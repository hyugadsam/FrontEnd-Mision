<template>
  <Ornaments v-bind:ShowInventory="true"/>
  <OrnamentsComponent/>
</template>

<script>
import OrnamentsComponent from '../components/OrnamentsComponent.vue';
import Ornaments from './Ornaments.vue';

export default {
  name: "OrnamentsManagement",
  components: {
    Ornaments,
    OrnamentsComponent
  }
};

</script>

<style scoped>
</style>