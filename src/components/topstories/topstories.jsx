import '../reset.css';
import '../topstories/topstories.css';
import React, {useEffect, useState} from 'react';
import { getTopStoryIds, getStory } from '../api/api';
import {News} from '../news/news';

const TopStories = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
      getTopStoryIds().then(data => setStoryIds(data));
    }, [])
 


    return storyIds.map(storyId => (
      <div className="storiesContainer">
       <News key={storyId} storyId={storyId}/>
      </div>
    ));
 
};

export default TopStories;


