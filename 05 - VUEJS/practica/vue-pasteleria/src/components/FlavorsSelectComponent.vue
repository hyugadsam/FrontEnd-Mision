<template>
    <div class="row mt-1">
        <label class="col-lg-2 col-xs-12 col-form-label" for="TipoAdorno"><i>Sabores</i></label>
        <div class="col-lg-8 col-xs-12">
            <div class="form-check" v-for="(flavor, index) in this.$store.getters.getFlavors">
                <input type="checkbox" class="form-check-input" :id="`Sbox${index}`" :value="flavor.id" @change="emitToParent" v-model="this.CheckedFlavors">
                <label class="form-check-label" :for="`Sbox${index}`">{{flavor.Description}}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlavorsSelectComponent',
    data(){
        return {
            CheckedFlavors: []
        }
    },
    methods:{
        emitToParent (event) {
            this.$emit('EmitFlavors', this.CheckedFlavors)
        }
    }
}
</script>

<style scoped>
.form-check-label{
    float: left;
}
</style>>
