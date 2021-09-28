import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Stories from './components/stories/stories';
import Submenu from './components/submenu/submenu';
import TopStories from './components/topstories/topstories';
import NewStories from './components/newstories/newstories';
import BestStories from './components/beststories/beststories';
import Playgrounds from './components/playground/playgrounds';
const Index = () => {
    return (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/stories" component={Stories}/>
                <Route path="/topstories" render={props =><div> <Header/> <Submenu/> <TopStories/> </div>}/>
                <Route path="/beststories" render={props =><div> <Header/> <Submenu/> <BestStories/> </div>}/>
                <Route path="/newstories" render={props =><div> <Header/> <Submenu/> <NewStories/> </div>}/>
                <Route path='/playgrounds' render={props => <div> <Header/> <Playgrounds/></div>}/>
            </Switch>
        </div>
    </Router>
)};

ReactDOM.render(<Index />, document.querySelector('#root'));


