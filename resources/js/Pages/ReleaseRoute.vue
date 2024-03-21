<template>
    <div class="padding-y">
        <p>Comunicados y noticias publicadas para conocimiento de la comunidad albarracina</p>
        <br>
        <div class="row">
            <div class="col-md-4" v-for="item in items" :key="item.id">
                <router-link class="router-link" :to="'/comunicados/' + item.id">
                    <img class="rounded-lg" style="width: 100%; height: 300px; object-fit: cover;" :src="'https://www.ie42003cgalbarracin.edu.pe/' + item.archivo" alt="">
                    <h5><b>{{ item.titulo }}</b></h5>
                </router-link>
                <br>
            </div>
        </div>    
    </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
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
    setup() {
        // Utilizamos ref para crear una reactividad
        const response = ref(null);

        // Función para hacer la solicitud a la API
        const triggerEndpoint = async () => {
            try {
                const result = await axios.get("/api/test-me");
                response.value = result.data;
            } catch (error) {
                // Manejar el error de manera adecuada
                console.error(error);
            }
        };

        // Retornamos las variables y funciones que necesitamos en el template
        return {
            response,
            triggerEndpoint,
        };
    },
};
</script>
