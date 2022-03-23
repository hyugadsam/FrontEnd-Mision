<template>
<div class="row" style="margin: 0;">
    <div id="Slidder" class="flex-shrink-0 p-3 bg-white col-lg-2 col-xs-12">
      <router-link to="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <div class="SmallLogo">
          <img src="./assets/Img/Cake-Logo.png" style="width:50px" alt="Cake-Logo">
          <h1 id="TituloNav">♥ Pasteleria el morrito</h1>
        </div>
      </router-link>
      <ul id="NavBar" class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
            data-bs-target="#home-collapse" aria-expanded="false">Inicio</button>
          <div class="collapse" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <router-link id="Homebtn" class="link-dark rounded" to="/home">Home</router-link>
                </li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse" aria-expanded="false">
            Pedidos
          </button>
          <div class="collapse" id="dashboard-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <router-link class="link-dark rounded" to="flavors">Sabores</router-link>
              </li>
              <li>
                <router-link class="link-dark rounded" to="ornaments">Adornos</router-link>
              </li>
              <li>
                <router-link class="link-dark rounded" to="/NewOrder">Nuevo Pedido</router-link>
              </li>
              
            </ul>
          </div>
          
        </li>

        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
            data-bs-target="#Admin-collapse" aria-expanded="false">
            Administracion
          </button>
          <div class="collapse" id="Admin-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <router-link to="/OrnamentsManagement" class="link-dark rounded" >Administracion Adornos</router-link>
              </li>
              <li>
                <router-link to="/FlavorsManagement" class="link-dark rounded" >Administracion Sabores</router-link>
              </li>
              <li>
                <router-link class="link-dark rounded" to="/OrderList">Lista Pedidos</router-link>
              </li>
            </ul>
          </div>
          
        </li>

        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
            data-bs-target="#Help-collapse" aria-expanded="false">
            Ayuda
          </button>
          <div class="collapse" id="Help-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="#ContactFooter" class="link-dark rounded" >Contacto</a>
              </li>
            </ul>
          </div>
          
        </li>
      </ul>

    </div>
    <div class="col-lg-10 col-xs-12">
      <div class="row">
        <div class="col-lg-12 col-xs-12">
          <div class="HeaderPage">
            <img src="./assets/Img/Cake-Logo.png" alt="Cake-Logo">
            <h1>Pasteleria el morrito</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <router-view/>
      </div>
      <div class="row">
        <PageFooter/>
      </div>
    </div>
  </div>
  
</template>

<script>
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    PageFooter
  }
}
</script>


<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import './assets/css/General.css';
@import './assets/css/sidebars.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
