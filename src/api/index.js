import axios from 'axios';


const config = {
    BASE_API_URL : 'https://api.hnpwa.com/v0',
    NEWS_API_URL : 'https://api.hnpwa.com/v0/news/1.json',
    ASK_API_URL : 'https://api.hnpwa.com/v0/ask/1.json',
    JOBS_API_URL : 'https://api.hnpwa.com/v0/jobs/1.json',
    USER_API_URL : 'https://api.hnpwa.com/v0/user',
    ITEM_API_URL : 'https://api.hnpwa.com/v0/item'
}
function fetchNews() {
    return axios.get(config.NEWS_API_URL);
}
function fetchAsks() {
    return axios.get(config.ASK_API_URL);
}
function fetchJobs(){
    return axios.get(config.JOBS_API_URL);
}
function fetchList(pageName) {
    return axios.get(`${config.BASE_API_URL}/${pageName}/1.json`);
}
function fetchUser(username) {
    return axios.get(`${config.USER_API_URL}/${username}.json`);
}
function fetchItem(id) {
    return axios.get(`${config.ITEM_API_URL}/${id}.json`);
}
export {
    fetchNews,
    fetchAsks,
    fetchJobs,
    fetchUser,
    fetchItem,
    fetchList
}