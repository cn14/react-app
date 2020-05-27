import React, { useState, useEffect } from 'react';
import {toast, ToastContainer } from 'react-toastify';
import {Route, Router, Switch} from 'react-router-dom';
import firebase from 'firebase';
import './App.css';
function App() {

  const showToast = (type, message) => {
    switch(type){
      case 0:
        toast.warning(message);
        break;
      case 1:
        toast.success(message);
        break;
      default:
        break;
    }
}
const [authenticated, setAuthenticated ] = useState(false);
const [loading, setLoading ] = useState(true);

useEffect(()=>{
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      setAuthenticated(true);
      setLoading(false);
    }else{
      setAuthenticated(false);
      setLoading(false);
    }
  })
},[])

  return (
    loading === true ? (
      <div className="spinner-border text-success" role = 'status'>
      <span className="sr-only">Loading...</span>
      </div>
    ):(
      <Router>
        <ToastContainer autoClose = {2000} hideProgressBar = {true} position = {toast.POSITION.TOP_CENTER}/>
        <Switch/>
      </Router>

    )
  );
}

export default App;
