<template>
  <div class="row">
    <div class="mt-2 mb-2">
      <h2><b>Lista de Pedidos</b></h2>
    </div>
    <div class="col-12">
      <div class="row" style="overflow:auto">
        <table class="table table-light table-hover border col-lg-10 col-xs-10 m-2">
            <thead>
                <th class="col-lg-1 col-xs-1">Id</th>
                <th>Fecha</th>
                <th>Descripcion</th>
                <th>Sabores</th>
                <th>Adornos</th>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Precio Total</th>
            </thead>
            <tbody>
              <tr v-for="order in this.$store.getters.getOrders">
                <td>{{order.id}}</td>
                <td>
                  <p><pre>{{order.CreateDate}}</pre></p>  
                </td>
                <td align="center">
                  <div class="TextContainerSmall">
                    <p>
                      {{order.Description}}
                    </p>
                  </div>
                </td>
                <td align="center">
                  <div class="TextContainerSmall">
                    <p v-for="f in order.Flavors">
                      {{f}}
                    </p>
                  </div>
                </td>
                <td align="center">
                  <div class="TextContainerSmall">
                    <p v-for="o in order.Ornaments">
                      {{o}}
                    </p>
                  </div>
                </td>
                <td>{{order.Name}}</td>
                <td>{{order.Tel}}</td>
                <td>{{order.Email}}</td>
                <td>{{order.Price}}</td>
                
              </tr>
            </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "OrderList",
  props: {
    
  },
  
};
</script>



<style scoped>
  .TextContainerSmall{
      width: 150px; 
      height: 100px; 
      overflow: auto;
  }
  pre{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
  }
</style>