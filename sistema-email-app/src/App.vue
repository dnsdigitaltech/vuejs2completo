<template>
    <div class="container">
        <div class="mail-box">
            <app-sidebar :messages="messages"></app-sidebar>
            <app-content :messages="messages"></app-content>
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import Content from './Content.vue';
    import message from './data/messages';
    export default {
        data() {
            return {
                messages: message
            };
        },
        components: {
            appSidebar: Sidebar,
            appContent: Content
        }
    }
</script>