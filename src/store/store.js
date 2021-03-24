import Vue from 'vue';
import Vuex from 'vuex';
import news from './modules/news.js';
import ask from './modules/ask.js';
import jobs from './modules/jobs.js';
import { fetchList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        news, jobs, ask
    },
    state: {
        list : []
    },
    actions: {
        async FETCH_LIST({commit}, pageName) {
            try {
                const res = await fetchList(pageName);
                commit('SET_LIST', res.data)
                return res;
            } catch(error) {
                console.error(error);
            }
        }
    },
    mutations:{
        SET_LIST(state, list) {
            state.list = list;
        }
    },
    getters: {
        GET_LIST(state) {
            return state.list;
        }
    }
})