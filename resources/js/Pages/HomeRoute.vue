<template>
    <div class="padding-y rounded-lg bg-yellow card my-3">
        <div class="card-body">
            <p><b>Bienvenido, somos una institución educativa que 
                se dedica a brindar una Educación Integral y de calidad, 
                acorde con el avance científico- tecnológico, 
                el respeto a los derechos humanos, a la inclusividad 
                y el cuidado del medio ambiente; con la participación 
                de la comunidad educativa y contribuyendo al desarrollo 
                de la región y el país.</b></p>
        </div>
        <br>
    </div>
    <div class="row">
        <div class="col-md-8">
          <div class="">
            <h5><b>COMUNICADOS Y NOTICIAS</b></h5>
            <hr>
            <br>
            <div class="row">
              <div class="col-md-12" v-for="item in items" :key="item.id">
                <router-link class="router-link" :to="'/comunicados/' + item.id">
                <h5><b>{{ item.titulo }}</b></h5>
                <img class="rounded-lg" width="100%" :src="'https://www.ie42003cgalbarracin.edu.pe/' + item.archivo" alt="">
                <p>Publicado: {{ item.registro }}</p>
                <br>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <h5><b>SERVICIOS Y ENLACES</b></h5>
          <hr>
          <br>
          <a target="_blank" style="text-decoration: none;" href="https://www.plataforma.ie42003cgalbarracin.edu.pe/registro">Sistema de Mesa de Partes Virtual</a>
          <br><a target="_blank" style="text-decoration: none;" href="https://www.plataforma.ie42003cgalbarracin.edu.pe/">Aula Virtual</a>
          <br>
          <span><b>Facebook Institucional</b></span>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fie42003&tabs=timeline&width=380&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="100%" height="550" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        </div>
      </div>
    
</template>
<script>

import axios from 'axios';
export default{
    data(){
        return {
            items : []
        }
    },
    mounted(){
        axios.get('https://ie42003cgalbarracin.edu.pe/app/ajax/comunicado/posts.php')
        .then((response)=>{
            this.items = response.data;
        });
    },
};
</script>