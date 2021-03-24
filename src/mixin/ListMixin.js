import bus from '../utils/bus.js'
export default {
    created() {
        // const store = this.$store;
        // const routeName = this.$route.name;
        // bus.$emit("start:spinner");
        // setTimeout(()=>{
        //     store.dispatch('FETCH_LIST', routeName)
        //         .finally(() => {
        //             bus.$emit("end:spinner");
        //         })  
        // }, 1000)
    },
    mounted() {
        bus.$emit("end:spinner");
    }
}