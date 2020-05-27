import React from 'react';
import './App.css';
import RoomList from './Components/RoomList';
import SenderMessageForm from './Components/SenderMessageForm';
import NewRoomForm from './Components/NewRoomForm';
import MessageList from './Components/MessageList';

function App() {
  return (
    <div className="App">
      <RoomList/>
      <MessageList/>
      <SenderMessageForm/>
      <NewRoomForm/>
    </div>
  );
}

export default App;
