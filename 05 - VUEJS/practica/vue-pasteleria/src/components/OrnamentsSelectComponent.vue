<template>
    <div class="row mt-1 border-bottom">
        <label class="col-lg-2 col-xs-12 col-form-label" for="TipoAdorno"><i>Adornos</i></label>
        <div class="col-lg-8 col-xs-12">
            <div class="form-check" v-for="(ornament, index) in this.$store.getters.getOrnaments">
                <input type="checkbox" class="form-check-input" :id="`Abox${index}`" :value="ornament.id" @change="emitToParent" v-model="this.CheckedOrnaments">
                <label class="form-check-label" :for="`Abox${index}`">{{ornament.Description}}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrnamentsSelectComponent',
    data(){
        return {
            CheckedOrnaments: []
        }
    },
    methods:{
        emitToParent (event) {
            this.$emit('EmitOrnaments', this.CheckedOrnaments)
        }
    }
}
</script>

<style scoped>
.form-check-label{
    float: left;
}
</style>>
