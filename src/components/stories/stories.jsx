import '../reset.css';
import './stories.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Stories = () => {
    return <div className="container">
        <Link to='/topstories' className='card'>Top Stories</Link>
        <Link to='/beststories' className='card'>Best Stories</Link>
        <Link to='/newstories' className='card'>New Stories</Link>
    </div>
};

export default Stories;


