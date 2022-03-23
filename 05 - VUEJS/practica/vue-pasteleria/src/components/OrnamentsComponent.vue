<template>
    <div>
        <div class="row mt-3 mb-3">
            <div class="mx-auto">
                <button class="btn btn-success" data-bs-toggle="collapse"
            data-bs-target="#NewItemForm" aria-expanded="false">
                <i class="bi bi-plus-circle"></i>&nbsp;&nbsp;Agregar Nuevo Adorno
                </button>
            </div>
        </div>
        <div id="NewItemForm" class="row col collapse">
            <div class="row mt-1">
                <h3><b>Nuevo Adorno</b></h3>
            </div>

            <div class="row mt-1">
                <label class="col-lg-2 col-xs-12 col-form-label" for="Descripcion">Descripcion</label>
            <div class="col-lg-8 col-xs-12">
                <input class="form-control" v-model="Description" type="text" name="Descripcion" id="Descripcion">
            </div>
            </div>

            <div class="row mt-1">
            <label class="col-lg-2 col-xs-12 col-form-label" for="TipoAdorno">Tipo de Adorno</label>
            <div class="col-lg-8 col-xs-12">
                <select class="form-select" v-model="Type" name="TipoAdorno" id="TipoAdorno">
                    <option v-for="type in this.$store.getters.getOrnamentTypes"  v-bind:value="type.id">{{type.Name}}</option>
                </select>
            </div>
            </div>

            <div class="row mt-1">
                <label class="col-lg-2 col-xs-12 col-form-label" for="Precio">Precio</label>
            <div class="col-lg-8 col-xs-12">
                <input class="form-control" v-model="Price" type="number" min="0.1" name="Precio" id="Precio">
            </div>
            </div>

            <div class="row mt-1">
                <label class="col-lg-2 col-xs-12 col-form-label" for="Inventario">Inventario</label>
            <div class="col-lg-8 col-xs-12">
                <input class="form-control" v-model="Inventory" type="number" min="1" name="Inventario" id="Inventario">
            </div>
            </div>

            <div class="row mt-3">
            <div>
                <button id="SendBtn" @click="SaveItem" type="submit" class="btn btn-primary">
                    <i class="bi bi-save2-fill"></i>&nbsp;&nbsp;Guardar
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrnamentsComponent',
    data(){
        return {
            Description: '',
            Price: 1,
            Inventory: 1,
            Type: 1
        }
    },
    methods:{
        SaveItem(){
            if (this.Description.length == 0) {
                alert('Debes ingresar todos los campos del formulario')
                return;
            }
            let Orn = {
                id:0,
                Description: this.Description,
                Price: this.Price,
                Inventory: this.Inventory,
                Type: this.Type
            }
            
            this.$store.commit('AddOrnament', Orn);
        }
    }
}
</script>

<style scoped>

</style>