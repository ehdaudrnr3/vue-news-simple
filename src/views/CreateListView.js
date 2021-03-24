import ListView from './ListView.vue';
import bus from '../utils/bus.js'

export default function createListView(name) {
    return {
        name,
        created() {
            const store = this.$store;
            const routeName = this.$route.name;
            bus.$emit("start:spinner");
            store.dispatch('FETCH_LIST', routeName)
                .finally(() => {
                    bus.$emit("end:spinner");
                });  
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}