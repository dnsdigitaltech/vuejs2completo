<template>
    <small>
        Escrito por {{ autor.firstName }} {{ autor.lastName }}
    </small>
</template>
<script>
    import { eventBus } from './main';
    export default {
        props: {
            autor: {
                type: Object,
                required: true
            }
        },
        created() {
            eventBus.$on('articleWasShared', (data) => {
                alert("Alguém compartilhou um artigo sobre " + data.media + "!");
            })
        },
    }
</script>