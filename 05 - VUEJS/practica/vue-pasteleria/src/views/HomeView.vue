<template>
<div><h1><b>Home</b></h1></div>
<div class="container">
  <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://irp-cdn.multiscreensite.com/60560196/DESKTOP/jpg/342.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://irp-cdn.multiscreensite.com/60560196/DESKTOP/jpg/343.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container">
    <router-link class="btn btn-primary" to="neworder">
      <i class="bi bi-plus-circle-fill"></i> Generar pedido
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.container{
  text-align: center;
  width: 80%;
  margin-top: 15px;
}

#NuevoPedidoBtn{
  font-size: 24px;
}
</style>
