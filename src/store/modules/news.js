import { fetchNews } from '../../api/index.js';

const state = {
    news: []
}

const actions = {
    async FETCH_NEWS({commit}) {
        try {
            const res = await fetchNews();
            commit('SET_NEWS', res.data);
            return res;
        } catch (error) {
            console.error(error);
        }
    }
}

const mutations = {
    SET_NEWS(state, news) {
        state.news = news;
    }
}

const getters = {
    GET_NEWS(state) {
        return state.news;
    }
}
export default {
    state, actions, mutations, getters
}