import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


var arrow = "<"

const details = { name: 'Alan Ford', id: '00005152', Appointment: '9:00 (24-05-2016)', 
phone: '+31123456789', Email: 'alan.form@email.nl' }
function App() {

  return (
    <div className="site-container">
      {/* Start Your code here */}
      <div className='All'>

        <div className='title'>
          <div>
            <p>{arrow}</p>
          </div>
          <div className='detail'>
            <strong>{details.name}</strong>
            <p>{details.id}</p>
          </div>
          <div className='print'>
            <button id='prntbtn' type='submit'>Print</button>
          </div>
        </div>

        <div className='customer-info'>
          <p><strong>Appointment </strong>{details.Appointment}</p>
          <p><strong>Email: </strong>{details.Email}</p>
          <p><strong>Phone </strong>{details.phone}</p>
        </div>

        <div className='order-info'>
          <div className='status'>
            <strong>Status</strong>
            <p><input type='radio'></input>In Progress</p>
          </div>

          <div className='door'>
            <strong>Door</strong>
            <p>Mark</p>
          </div>

          <div className='time'>
            <strong>Time</strong>
            <p>10:30 (25-05-2016)</p>
          </div>
        </div>

        <div className='product-list'>
          <input type="checkbox" id='tickbox'></input>
          <div>
            <img className='pic' src='https://www.w3schools.com/howto/img_avatar.png' alt='product-img'></img>
          </div>
          <div>
            <strong>Boltaart Bosbessen</strong>
            <p>Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkart</p>
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;
