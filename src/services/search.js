import axios from 'axios';

export const YOUTUBE = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyDnFbiU5T90vkb0Bl633G9IUIdTJ16sA3E',
        q: ''
    },
});
export const TICKETMASTER = axios.create({
    baseURL: ' https://app.ticketmaster.com/discovery/v2',
    params: {
        apikey: 'b8bgOphhDQurAPBX8jGoCASBBUsggg7H',
        keyword: 'teste',
        size: '10'
    },
});