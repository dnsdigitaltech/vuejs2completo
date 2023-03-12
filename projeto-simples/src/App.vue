<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a href="" class="navbar-brand" @click="activeView = 'app-about'">Nome do projeto</a>
        </div>
        <div id="navbar" class="navbar-collapse ">
          <ul class="nav navbar-nav">
            <li><a href="" @click="activeView = 'app-home'" class="navbar-brand">Home</a></li>
            <li><a href="" @click="activeView = 'app-about'" class="navbar-brand">Sobre</a></li>
            <li><a href="" @click="activeView = 'app-conctat'" class="navbar-brand">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="jumbotron">
        <keep-alive>
          <component :is="activeView"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeView: 'app-home'
    };
  }
}
</script>