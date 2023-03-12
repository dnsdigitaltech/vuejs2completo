<template>
    <div class="alert alert-info">
        {{ announcenment }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                announcenment: 'O site será desativado para manutenção em breve!'
            };
        }
    }
</script>