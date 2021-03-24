<template>
  <div>
    <section>
      <user-profile :propUser="item" />
    </section>
    <section>
      <h2> {{ item.title }}</h2>
    </section>
    <section>
      <!-- content section -->
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    UserProfile
  },
  created(){
    const id = this.$route.query.id;
    this.$store.dispatch('FETCH_ITEM', id);
  },
  computed: {
    ...mapGetters({
      item : 'GET_ITEM'
    })
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.6rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>