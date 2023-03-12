<template>
    <div>
        <hr>
        <h2>Contate-nos</h2>
        <slot name="top"></slot>
        <form>
            <div class="form-group">
                <label for="yourNome">Seu nome completo</label>
                <input type="text" class="form-control" id="yourNome" placeholder="Seu nome completo">
            </div>
            <div class="form-group">
                <label for="emailAddres">Seu email</label>
                <input type="text" class="form-control" id="emailAddres" placeholder="Seu email">
            </div>
            <div class="form-group">
                <label for="message">Sua mensagem</label>
                <textarea name="message" id="" cols="30" rows="10" class="form-control" placeholder="Mensagem"></textarea>
            </div>

            <slot name="bottom">
                <p>
                    Responderemos em até 2 dias úteis
                </p>
            </slot>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>

<script>
    export default {

    }

</script>