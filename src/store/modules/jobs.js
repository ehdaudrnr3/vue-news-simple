import { fetchJobs } from '../../api/index.js';

const state = {
    jobs: []
}

const actions = {
    async FETCH_JOBS(context) {
        try {
            const res = await fetchJobs();
            context.commit('SET_JOBS', res.data)
            return res;
        } catch (error) {
            console.error(error);
        }
    },
}

const mutations = {
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    }
}

const getters = {
    GET_JOBS(state) {
        return state.jobs;
    }
}
export default {
    state, actions, mutations, getters
}