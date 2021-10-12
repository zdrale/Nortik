import '../reset.css';
import './submenu.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Submenu = () => {
    return <div className="submenuWrapper">
        <ul className="subMenuList">
           <li><Link to="/topstories">Top Stories</Link></li>
           <li><Link to="/beststories">Best Stories</Link></li>
           <li><Link to="/newstories">New Stories</Link></li>
        </ul>
    </div>
};

export default Submenu;


