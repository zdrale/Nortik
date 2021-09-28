import '../reset.css';
import './stories.css';

const Stories = () => {
    return <div className="container">
        <a href='/topstories' className='card'>Top Stories</a>
        <a href='/beststories' className='card'>Best Stories</a>
        <a href='/newstories' className='card'>New Stories</a>
    </div>
};

export default Stories;


