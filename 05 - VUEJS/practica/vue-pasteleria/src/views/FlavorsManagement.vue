<template>
  <Flavors v-bind:ShowInventory="true"/>
  <FlavorsComponent/>
</template>

<script>
import FlavorsComponent from '../components/FlavorsComponent.vue'
import Flavors from './Flavors.vue'

export default {
  name: "FlavorsManagement",
  components: {
    Flavors,
    FlavorsComponent
  }
};

</script>



<style scoped>
</style>