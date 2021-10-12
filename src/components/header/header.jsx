import '../reset.css';
import logo from '../img/logo.png';
import '../header/header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Header = () => {
    return <div className="header">

        <div className="headerLeft">
           <Link to='/'><img src={logo} alt='error'></img></Link>
        </div>

        <div className="headerRight">
            <ul className="headerNav">
               <li><a href="/stories">Stories</a></li>
               <li><a href="/playgrounds">Playground</a></li>
            </ul>
        </div>
    </div>
   
};

export default Header;


