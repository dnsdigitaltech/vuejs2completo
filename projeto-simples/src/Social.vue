<template>
    <div>
        <h3>Compartilhar {{ article.title }} com seus amigos</h3>
        <button class="btn btn-primary" @click="share('Facebook')">
            Compartilhar no facebook
        </button>
        <button class="btn btn-primary" @click="share('Twitter')">
            Compartilhar no twiter
        </button>
    </div>    
</template>

<script>
    import { eventBus } from './main'
    export default {
        props: {
            article: {
                type: Object,
                required: true
            }
        },
        methods: {
            share(media) {
                eventBus.$emit('articleWasShared', {
                    article: this.article,
                    media: media
                });
                this.$emit('articleWasShared', {
                    media: media
                });
            }
        }
    }
</script>