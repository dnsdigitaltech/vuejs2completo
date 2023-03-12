<template>
    <small>
        Escrito por {{ autor.firstName }} {{ autor.lastName }}
    </small>
</template>
<script>
    export default {
        props: {
            autor: {
                type: Object,
                required: true
            }
        }
    }
</script>