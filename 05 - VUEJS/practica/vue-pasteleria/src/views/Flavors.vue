<template>
  <div class="row">
    <div class="mt-2 mb-2">
      <h2><b>Lista de Sabores</b></h2>
    </div>
    <div class="col-12">
      <div class="row">
        <table class="table table-light table-hover border col-lg-10 col-xs-10 m-2">
            <thead>
                <th class="col-lg-1 col-xs-1">Id</th>
                <th>Sabor</th>
                <th>Precio</th>
                <th v-if="ShowInventory">Inventario</th>
            </thead>
            <tbody>
              <tr v-for="flavor in Sabores">
                <td>{{flavor.id}}</td>
                <td>{{flavor.Description}}</td>
                <td>${{flavor.Price}}</td>
                <td v-if="ShowInventory">{{flavor.Inventory}}</td>
              </tr>
            </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "Flavors",
  props: {
    ShowInventory: Boolean
  },
  computed: {
    Sabores: function(){
        if (this.ShowInventory) {
          return this.$store.getters.getFullFlavors;
        }else{
          return this.$store.getters.getFlavors;
        }
    }
  }
};
</script>



<style scoped>
</style>