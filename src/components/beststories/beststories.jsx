import '../reset.css';
import '../topstories/topstories.css';
import React, {useEffect, useState} from 'react';
import {getBestStoryIds } from '../api/api';
import {News} from '../news/news';

const BestStories = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getBestStoryIds().then(data => setStoryIds(data));
    }, [])
 


    return storyIds.map(storyId => (
      <div className="storiesContainer">
       <News key={storyId} storyId={storyId}/>
      </div>
    ));
 
};

export default BestStories;


