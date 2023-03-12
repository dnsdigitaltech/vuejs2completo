<template>
    <button class="btn btn-primary" @click="share">
        Compartilhar no facebook
    </button>
</template>

<script>
    export default {
        methods: {
            share() {
                this.$emit('articleWasShared', {
                    media: 'Facebook'
                });
            }
        }
    }
</script>