import axios from "axios";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl =`${baseUrl}item/`;

//Gets a single story
export const getStory = async storyId => {
    const result = await axios.get(`${storyUrl + storyId}.json`).then(({data}) => data);
    return result;
};


//Gets top storie's IDS
export const getTopStoryIds = async () => {
    const result = await axios.get(topStoriesUrl).then(({data}) => data); //after getting data return it.

    return result;
}


//Gets new storie's IDS
export const getNewStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({data}) => data); //after getting data return it.

    return result;
}


//Gets best storie's IDS
export const getBestStoryIds = async () => {
    const result = await axios.get(bestStoriesUrl).then(({data}) => data); //after getting data return it.

    return result;
}

