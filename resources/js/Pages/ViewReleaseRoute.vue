<template>
    <div class="padding-y">
      <p>Comunicados y noticias publicadas para conocimiento de la comunidad albarracina</p>
      <br>
      <div class="row">
        <div class="col-md-12">
          <img class="rounded-lg" style="width: 100%; object-fit: cover;" :src="'https://www.ie42003cgalbarracin.edu.pe/' + selectedRelease.archivo" alt="">
          <h5><b>{{ selectedRelease.titulo }} <span class="float-right">{{ selectedRelease.registro }}</span> </b></h5>
          <p v-html="selectedRelease.cuerpo"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        selectedRelease: {} // Aquí almacenaremos el comunicado seleccionado
      };
    },
    mounted() {
      // Obtener el ID del comunicado de la ruta
      const releaseId = this.$route.params.id;
  
      // Hacer la solicitud para obtener el comunicado específico basado en su ID
      axios.get(`https://ie42003cgalbarracin.edu.pe/app/ajax/comunicado/posts.php?id=${releaseId}`)
        .then(response => {
          // Almacenar los datos del comunicado seleccionado en selectedRelease
          this.selectedRelease = response.data[0];
        })
        .catch(error => {
          console.error("Error al obtener el comunicado:", error);
        });
    }
  };
  </script>  