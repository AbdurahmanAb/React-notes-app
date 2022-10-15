import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
const home = () => {
  return (
      <div id='ear'>
 &nbsp;
    <div className='container'>
    <div className='container-text'>
       <h2> Welcome To  React Notes App</h2>
       <ul className="text-list">
       <p>What Can You Do: </p>
        <li className="list-item"><i className="fa fa-pen"></i>      Add A note</li>
        <li className="list-item"><i className="fa fa-remove"></i>   Remove a Note</li>
        <li className="list-item"><i className="fa fa-search"></i>   Search a Note</li>
        <li className="list-item"><i className="fa fa-save"></i>     Save to LocalStorage</li>
       </ul>
   <Link to='/app' className='btn-start'>Start Writing Note</Link>
   </div>
    </div>
    </div>
  )
}

export default home