import React, {useState, useEffect} from "react";
import { getStory } from "../api/api";
import '../news/news.css';

export const News = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {  //This will run every time component renders
        getStory(storyId).then(data => data && data.url && setStory(data)); //gets story then it resolves function, check url and then set story

    }, []); 

    return (
        <div className="storyCard">
            <a href={story.url} target="_blank">{story.title}</a>
            <p><span className="blue">{story.score}</span> points by <span className="blue"> {story.by}</span></p>
        </div>
    )
};