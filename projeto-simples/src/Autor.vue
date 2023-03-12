<template>
    <small>
        Escrito por {{ autor.firstName }} {{ autor.lastName }}
    </small>
</template>
<script>
    export default {
        data() {
            return {
                autor: {
                    firstName: 'Davi',
                    lastName: 'Bernardo'
                }
            }
        }
    }
</script>