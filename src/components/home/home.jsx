import './home.css';
import '../reset.css';

const Home = () => {
    return <div className="wrapper">
        <a href="/stories" className="left">
            <div className="leftText">If you are interested in reading our most fun stories, choose this side.</div>
        </a>

        <a href="/playgrounds" className="right">
            <div className='rightText'>If you are interested in spending some playfull time, choose this side.</div>
        </a>
    </div>
};

export default Home;


