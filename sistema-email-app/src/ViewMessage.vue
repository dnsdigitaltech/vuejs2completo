<template>
    <div class="inbox-body">
        <p><strong>Date: </strong>{{ data.message.date.fromNow() }}</p>
        <p><strong>De: </strong>{{ data.message.from.name }} <{{ data.message.from.email }}></p>
        <hr>
        <div v-html="data.message.content" class="message"></div>
        <div v-if="data.message.attachments.length > 0" class="attachments">
            <h4>Anexos</h4>
            <ul>
                <li v-for="attachment in data.message.attachments">
                    <i class="fa fa-paperclip"> {{ attachment.fileName }} ({{ attachment.size | formatBytes }})</i>
                </li>
            </ul>           

        </div>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        activated() {
            if(typeof this.data.message.isRead !== 'undefined'){
                this.data.message.isRead = true;
            }
        },
        filters: {
            formatBytes(bytes) {
                if (bytes == 0) {
                    return '0 Bytes';
                }
                let decimals = 2;
                let k = 1000;
                let dm = decimals + 1 || 3;
                let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                let i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            }
        }
    }
</script>