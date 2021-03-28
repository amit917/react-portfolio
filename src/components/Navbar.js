import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import logo from "../Logo.png";



const Navbar = ()=>{
    return(
        <nav className ="navbar navbar-expand-lg navbar-light bg-dark">
        
            

        <a className="navbar-brand" href="#"><img src = {logo} alt="logo...."></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon = {faBars} style={{color: "#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portfolio</a>
            </li>
            
           
          </ul>
          
        </div>
        
      </nav>  
    )
}
export default Navbar