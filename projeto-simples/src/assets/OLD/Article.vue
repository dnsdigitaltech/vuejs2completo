<template>
    <div class="article">
        <h1>{{ title }}</h1>
        <p>Publicado em: {{ published | moment}}</p>
        <p class="lead">{{ content }}</p>
        <p>Compatilhamentos: {{ shares }}</p>
        <app-autor :autor="autor"></app-autor>
        <br><br>
        <app-social-sharing :article="$data" @articleWasShared="shared"></app-social-sharing>
        <app-contact></app-contact>
    </div>
</template>
<script>
    import 'moment/locale/pt-br';
    import moment from 'moment';
    import Autor from './Autor.vue';
    import Social from './Social.vue';
    import Contact from './Contact.vue';
    export default {
        data() {
            return {
                title: '10 razões pelas quais o Vue.js é incrível',
                published: new Date(),
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                autor: {
                    firstName: 'Davi',
                    lastName: 'Bernardo'
                },
                shares: 0
            }
        },
        methods: {
            shared: function(event) {
                this.shares++;
                console.log(event);
            }
        },
        filters: {
            moment: function(value) {
                return moment(value).format("dddd, MMMM Do YYYY");
            }
        },
        components: {
            appAutor: Autor,
            appSocialSharing: Social,
            appContact: Contact
        }
    }
</script>