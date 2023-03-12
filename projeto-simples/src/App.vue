<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <announcement></announcement>                
        <app-article></app-article>        
        <app-contact>
          <p slot="top">Entre em contato conosco e um de nossos representantes entrará em contato com você o mais rápido possível</p>
          <p slot="bottom">Por favor, não envie nenhuma informação sensível</p>
        </app-contact>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>