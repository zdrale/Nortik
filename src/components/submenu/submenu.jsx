import '../reset.css';
import './submenu.css';

const Submenu = () => {
    return <div className="submenuWrapper">
        <ul className="subMenuList">
           <li><a href="/topstories">Top Stories</a></li>
           <li><a href="/beststories">Best Stories</a></li>
           <li><a href="/newstories">New Stories</a></li>
        </ul>
    </div>
};

export default Submenu;


