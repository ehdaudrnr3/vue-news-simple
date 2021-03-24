import { fetchAsks, fetchUser, fetchItem } from '../../api/index.js';

const state = {
    asks: [],
    user: {},
    item: {}
}

const actions = {
    async FETCH_ASKS({commit}) {
        try {
            const res = await fetchAsks();
            commit('SET_ASKS', res.data)
            return res;
        } catch (error) {
            console.error(error);
        }
    },
    async FETCH_USER({commit}, name) {
        try {
            const res = await fetchUser(name);
            commit('SET_USER', res.data);
            return res;
        } catch (error) {
            console.error(error);
        }
    },
    async FETCH_ITEM({commit}, id) {
        try {
            const res = await fetchItem(id);
            commit('SET_ITEM', res.data);
            return res;
        } catch (error) {
            console.error(error);
        }
    }
}

const mutations = {
    SET_ASKS(state, asks) {
        state.asks = asks;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_ITEM(state, item) {
        state.item = item;
    }
}

const getters = {
    GET_ASKS(state) {
        return state.asks;
    },
    GET_USER(state) {
        return state.user;
    },
    GET_ITEM(state) {
        return state.item;
    }
}
export default {
    state, actions, mutations, getters
}