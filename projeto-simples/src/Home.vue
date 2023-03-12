<template>
    <div>
       <h1>HOME</h1> 
    </div>
</template>
<script>
    export default {
        activated() {
            alert('O componente home foi ativado');
        },
        deactivated() {
            alert('O componente home foi desativado');
        }
    }
</script>