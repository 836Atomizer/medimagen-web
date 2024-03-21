<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="container" style="display: flex; align-items: center;">
          <header style="margin-right: auto;">
            <h1 style="display: flex; align-items: center; margin: 0;">
              <b style="display: flex; align-items: center; margin-right: 20px;">
                <img :src="absoluteImagePath" style="width: 70px;" alt="">
                <span class="ititle">ALBARRACÍN </span> EDUCA
              </b>
            </h1>
          </header>
          <div class="nav-links" style="display: flex;">
            <router-link class="router-link" to="/" style="margin-right: 20px;"><b>Inicio</b></router-link>
            <router-link class="router-link" to="/comunicados" style="margin-right: 20px;"><b>Comunicados</b></router-link>
          </div>
        </div>
      </nav>
      
  
      <!-- Router View -->
      <router-view v-slot="{ Component, route }">
        <div class="container">
          <div :key="route.name">
            <Component :is="Component" />
          </div>
        </div>
      </router-view>
    </div>
  </template>
  <script>
export default {
  computed: {
    absoluteImagePath() {
      // Obtener la ruta base del host
      const host = window.location.origin;
      // Concatenar la ruta de la imagen a la ruta base
      return host + '/image/logo1.png';
    }
  }
};
</script>
  <style>
/* Estilos para el Navbar */
.navbar {
  padding: 1rem 0;
  color: #14161b;
}
.router-link {
  text-decoration: none !important;
}

.ititle{
    color: rgba(141, 10, 1, 0.7);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  color: #ffd207ea !important;
}

.nav-links {
  display: flex;
  gap: 1rem;
  font-size: 18px;
}

router-link {
  color: white;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
.padding-y{
    margin-top: 10px;
}
p{
    font-size: 20px;
}
</style>