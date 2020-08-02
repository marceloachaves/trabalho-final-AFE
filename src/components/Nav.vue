<template>
  <div id="nav">

      <router-link to="/" exact>MyHeroes</router-link> |
      <router-link to="/about">Sobre</router-link> 
      <H1 class="text-white">MyHeroes</H1>
      <img src="@/assets/marvel.png" />
      
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>

.seu-nome {
  text-align: start;
}
.text-bibliografia {
  margin-right: 160px;
  text-align: justify;
  text-justify: inter-word;
}
.img-perfil {
  float: right;
  margin-right: 50px;
  border-radius: 50%;
  height: 250px;
  width: 250px;
}
.text-white {
  color: #ffffff;
}
.table-user {
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
}
.width-50 {
  width: 50%;
}
</style>
