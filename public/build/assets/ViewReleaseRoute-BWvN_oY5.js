import{_ as c,a as l,c as n,b as e,i,t as a,o as r}from"./app-ryD5buGh.js";const d={data(){return{selectedRelease:{}}},mounted(){const o=this.$route.params.id;l.get(`https://ie42003cgalbarracin.edu.pe/app/ajax/comunicado/posts.php?id=${o}`).then(s=>{this.selectedRelease=s.data[0]}).catch(s=>{console.error("Error al obtener el comunicado:",s)})}},p={class:"padding-y"},u=e("p",null,"Comunicados y noticias publicadas para conocimiento de la comunidad albarracina",-1),_=e("br",null,null,-1),h={class:"row"},m={class:"col-md-12"},b=["src"],g={class:"float-right"},f=["innerHTML"];function R(o,s,w,x,t,v){return r(),n("div",p,[u,_,e("div",h,[e("div",m,[e("img",{class:"rounded-lg",style:{width:"100%","object-fit":"cover"},src:"https://www.ie42003cgalbarracin.edu.pe/"+t.selectedRelease.archivo,alt:""},null,8,b),e("h5",null,[e("b",null,[i(a(t.selectedRelease.titulo)+" ",1),e("span",g,a(t.selectedRelease.registro),1)])]),e("p",{innerHTML:t.selectedRelease.cuerpo},null,8,f)])])])}const B=c(d,[["render",R]]);export{B as default};
