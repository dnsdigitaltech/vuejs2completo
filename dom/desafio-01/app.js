new Vue({
    el:'#desafio',
    data: {
        nome: 'Carlos',
        idade: '22',
        imagem: 'https://hcode.azureedge.net/courses/VU/logo_1670079919114.svg'
    },
    methods: {
        idadeVezes3: function() {
            return this.idade * 3
        },
        random: function() {
            return Math.random()
        }
    }, 
});    