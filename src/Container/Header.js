import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/header.css'
const Header = ({count}) => {
  return (
    <div>
     
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' style={{fontFamily:"sans-serif"}}>Tasty, Best Aroma & Healthier Food</a>
            <button className='btn btn-primary'>
              <Link to="/Orders" style={{color:"white",textDecoration:"none"}}>Orders</Link>  <span className='badge bg-secondary'>{count}</span>
            </button>
        </nav>
    </div>
  )
}

const mapStateToProps = state =>({
  count : state.ordereducer.length
})
export default connect(mapStateToProps)(Header);