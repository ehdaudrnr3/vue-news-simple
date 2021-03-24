<template>
  <div>
    <list-item />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixin/ListMixin.js';

export default {
  components: { 
    ListItem 
  },
  mixins: [ ListMixin ]
};
</script>

<style scoped>

</style>