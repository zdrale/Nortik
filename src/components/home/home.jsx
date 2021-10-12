import './home.css';
import '../reset.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div className="wrapper">
        <Link to="/stories" className="left">
            <div className="leftText">If you are interested in reading our most fun stories, choose this side.</div>
        </Link>

        <Link to="/playgrounds" className="right">
            <div className='rightText'>If you are interested in spending some playfull time, choose this side.</div>
        </Link>
    </div>
};

export default Home;


