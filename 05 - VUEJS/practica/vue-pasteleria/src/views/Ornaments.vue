<template>
  <div class="row">
    <div class="mt-2 mb-2">
      <h2><b>Lista de Adornos</b></h2>
    </div>
    <div class="col-12">
      <div class="row">
        <table class="table table-light table-hover border col-lg-10 col-xs-10 m-2">
            <thead>
                <th class="col-lg-1 col-xs-1">Id</th>
                <th>Descripcion</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th v-if="ShowInventory">Inventario</th>
            </thead>
            <tbody>
              <tr v-for="orn in Adornos">
                <td>{{orn.id}}</td>
                <td>{{orn.Description}}</td>
                <td>{{ GetNombreTipo(orn.Type) }}</td>
                <td>{{orn.Price}}</td>
                <td v-if="ShowInventory">{{orn.Inventory}}</td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ornaments",
  props: {
    ShowInventory: Boolean
  },
  methods: {
    GetNombreTipo(id){
        let tipos = this.$store.getters.getOrnamentTypes;
        let tipo = tipos.find(t => t.id == id);
        return tipo.Name;
    }
  },
  computed: {
    Adornos: function(){
        if (this.ShowInventory) {
          return this.$store.getters.getFullOrnaments;
        }else{
          return this.$store.getters.getOrnaments;
        }

    }
  }
};

</script>

<style scoped>
</style>