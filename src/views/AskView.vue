<template>
  <div>
    <list-item />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import mixin from '../mixin/ListMixin.js'

export default {
  components: {
    ListItem
  },
  mixins: [ mixin ]
}
</script>