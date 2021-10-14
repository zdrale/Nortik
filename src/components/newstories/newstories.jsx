import '../reset.css';
import '../newstories/newstories.css';
import React, {useEffect, useState} from 'react';
import { getTopStoryIds, getStory, getNewStoryIds } from '../api/api';
import {News} from '../news/news';

const NewStories = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getNewStoryIds().then(data => setStoryIds(data));
    }, [])
 


    return storyIds.map(storyId => (
      <div className="storiesContainer">
        <News key={storyId} storyId={storyId}/>
      </div>
    ));
 
};

export default NewStories;


