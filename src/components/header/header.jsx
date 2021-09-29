import '../reset.css';
import logo from '../img/logo.png';
import '../header/header.css';

const Header = () => {
    return <div className="header">

        <div className="headerLeft">
           <a href='/'><img src={logo} alt='error'></img></a>
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


