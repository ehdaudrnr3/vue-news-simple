<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <div v-if="this.$route.name !== 'item'">
        <div>
          {{ user.id }}
        </div>
        <span class="time">
          Joined {{ user.created }}, 
        </span>
        <span v-if="user.karma">
          {{ user.karma }}
        </span>
      </div>
      <div v-else>
        <router-link :to="`/user/${user.id}`">
          {{ user.id }}
        </router-link>
        <div class="time">
          Posted {{ user.created }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propUser: {}
  },
  created() {
    if(this.$route.name !== 'item') {
      const username = this.$route.params.id;
      this.$store.dispatch('FETCH_USER', username);
    }    
  },
  computed: {
    user() {
      if(this.$route.name !== 'item') {
        return this.$store.getters['GET_USER'];
      }
      return {
        id: this.propUser.user,
        created : this.propUser.time_ago
      };
    }
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