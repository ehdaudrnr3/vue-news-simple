import Vue from 'vue'
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js'
import {store} from '../store/store.js'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path:'/news',
            name: 'news',
            component: NewsView,
            // component: createListView('NewsView')
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store.dispatch('FETCH_LIST', to.name)
                    .then(()=>{
                        next();
                    })         
                    .finally(() => {
                        bus.$emit("end:spinner");
                    })  
            }
        },
        {
            path:'/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView')
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store.dispatch('FETCH_LIST', to.name)
                    .then(()=>{
                        next();
                    });
            }
        },
        {
            path:'/jobs',
            name: 'jobs',
            component: createListView('JobsView')
        },
        {
            path: '/item',
            name: 'item',
            component: ItemView
        },
        {
            path: '/user/:id',
            component: UserView
        }
    ]
})