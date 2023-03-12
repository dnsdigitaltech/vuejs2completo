<template>
    <div class="alert alert-info">
        <div v-if="announcenment">
            {{ announcenment }}
        </div>
        <div v-else>
            Nenhum anúncio ainda.
        </div>
    </div>
</template>

<script>
    import { eventBus } from './main';
    export default {
        data() {
            return {
                announcenment: null
            };
        },
        created() {
            eventBus.$on('articleWasShared', (data) => {
                this.announcenment = data.article.title + ' foi compartilhado em ' + data.media + '!';
            })
        },
    }
</script>