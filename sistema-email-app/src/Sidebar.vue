<template>
    <aside class="sm-side">
        <div class="user-head">
            <img src="src/assets/images/profile.jpg">

            <div class="user-name">
                <h5>Bo Andersen</h5>
                <span class="email-address">info@codingexplained.com</span>
            </div>
        </div>

        <ul class="inbox-nav">
            <li :class="{active: activeView == 'app-inbox'}">
                <a href="#" @click.prevent="navigate('app-inbox','Inbox')">
                    <i class="fa fa-inbox"></i>Inbox <span class="label label-danger pull-right">{{ unreadMessages.length }}</span>
                </a>
            </li>

            <li :class="{active: activeView == 'app-sent'}">
                <a href="#" @click.prevent="navigate('app-sent','Sent')">
                    <i class="fa fa-envelope-o"></i>Sent <span class="label label-default pull-right">{{ sentMessages.length }}</span>
                </a>
            </li>

            <li :class="{active: activeView == 'app-important'}">
                <a href="#" @click.prevent="navigate('app-important','Important')">
                    <i class="fa fa-bookmark-o"></i>Important <span class="label label-warning pull-right">{{ importantMessages.length }}</span>
                </a>
            </li>

            <li :class="{active: activeView == 'app-trash'}">
                <a href="#" @click.prevent="navigate('app-trash','Trash')">
                    <i class=" fa fa-trash-o"></i>Trash <span class="label label-default pull-right">{{ trashedMessages.length }}</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    import { eventBus } from './main';
    export default {
        props: {
            messages: {
                type: Array,
                required: true
            }
        },
        created() {
            eventBus.$on('changeView', (data) => {
                this.activeView = data.tag;
            });
        },
        data() {
            return {
                activeView: 'app-inbox'
            }
        },
        methods: {
            navigate(newView, title) {
                eventBus.$emit('changeView', {
                    tag: newView,
                    title: title
                })
            }
        }, 
        computed: {
            unreadMessages() {
                return this.messages.filter(function(message) {
                    return (message.type == 'incoming' && !message.isRead && !message.isDeleted)
                });
            },
            sentMessages() {
                return this.messages.filter(function(message) {
                    return (message.type == 'outgoing' && !message.isDeleted);
                });
            },
            importantMessages() {
                return this.messages.filter(function(message) {
                    return (message.type == 'incoming' && !message.isImportant === true && !message.isDeleted);
                });
            },
            trashedMessages() {
                return this.messages.filter(function(message) {
                    return message.isDeleted === true;
                });
            }
        },
    }
</script>