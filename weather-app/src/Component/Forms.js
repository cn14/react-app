import React from 'react'

function Forms({onButton, city, country, searchCountry, searchCity}) {
    return (
        <div>
            <form onSubmit = {onButton}>
                <input type="text" name="city" placeholder="city.." defaultValue = {city} onChange={searchCity}/>
                <input type="text" name="country" placeholder="country.." defaultValue = {country} onChange={searchCountry}/>
                <button>Get weather</button>
            </form>
            
        </div>
    )
}

export default Forms;
