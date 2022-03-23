<template>
  <div class="row">
    <div class="mt-2 mb-2">
      <h2><b>Nuevo Pedido</b></h2>
    </div>
    <div class="col-12">
        <div class="row">
            <label class="col-lg-2 col-xs-12 col-form-label" for="Nombre">Nombre</label>
          <div class="col-lg-8 col-xs-12">
            <input class="form-control" type="text" v-model="Nombre" name="Nombre" id="Nombre" />
          </div>
        </div>

        <div class="row mt-1">
            <label class="col-lg-2 col-xs-12 col-form-label" for="Tel">Teléfono</label>
          <div class="col-lg-8 col-xs-12">
            <input class="form-control" type="tel" v-model="Tel" name="Tel" id="Tel" />
          </div>
        </div>

        <div class="row mt-1">
            <label class="col-lg-2 col-xs-12 col-form-label" for="Email">Correo Electrónico</label>
          <div class="col-lg-8 col-xs-12">
            <input class="form-control" type="email" v-model="Email" name="Email" id="Email" />
          </div>
        </div>

        <div class="row mt-1">
            <label class="col-lg-2 col-xs-12 col-form-label" for="Descripcion">Descripcion del pedido</label>
          <div class="col-lg-8 col-xs-12">
            <textarea class="form-control" v-model="Description" name="Descripcion" id="Descripcion" 
            rows="10" cols="50" maxlength="250">Escriba su pedido aqui</textarea>
          </div>
        </div>

        <FlavorsSelectComponent v-on:EmitFlavors="SaveSelectedFlavors" />

        <OrnamentsSelectComponent v-on:EmitOrnaments="SaveSelectedOrnaments" />

        <div class="row mt-3">
          <div>
            <button id="SendBtn" type="submit" @click="SaveOrder" class="btn btn-primary">
                <i class="bi bi-send-check"></i>&nbsp;&nbsp;Enviar</button>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import FlavorsSelectComponent from '../components/FlavorsSelectComponent.vue'
import OrnamentsSelectComponent from '../components/OrnamentsSelectComponent.vue'

export default {
  name: "NewOrder",
  components: {
    FlavorsSelectComponent,
    OrnamentsSelectComponent
  },
  data(){
    return {
      SelectedFlavors: [],
      SelectedOrnaments: [],
      Nombre: '',
      Tel: '',
      Email: '',
      Description: ''
    }
  },
  methods:{
    SaveSelectedFlavors(value){ //Metodo que se ejecuta cuando el componente evite el callback del evento para guardar la lista de los checks
      this.SelectedFlavors = value;
    },
    SaveSelectedOrnaments(value){ //Metodo que se ejecuta cuando el componente evite el callback del evento para guardar la lista de los checks
      this.SelectedOrnaments = value;
    },
    SaveOrder(){
      if (this.Nombre.length == 0 ||
      this.Tel.length == 0 ||
      this.Email.length == 0 ||
      this.Description.length == 0) {
        alert('Debe ingresar la informacion en todos los campos');
        return;
      }

      if (this.SelectedFlavors.length == 0 ||
      this.SelectedOrnaments.length == 0 ) {
        alert('Debe seleccionar por lo menos un sabor y adorno');
        return;
      }

      let Order = {
          Name: this.Nombre,
          Tel: this.Tel,
          Email: this.Email,
          Flavors: this.SelectedFlavors,
          Ornaments: this.SelectedOrnaments,
          Description: this.Description
      }
      this.$store.commit('AddOrder', Order);
      console.log(this.$store.getters.getOrders);
      alert('Pedido creado Correctamente!');
      this.$router.push('Home'); 
    }
  }
};

</script>


<style scoped>

</style>