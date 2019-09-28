<template>
    <div class="activity-item">
        <v-card class="activity-card" v-bind:class="{ loading: loading, increase: hoverIncrease, decrease: hoverDecrease }">
            <div class="rating-element" v-bind:class="{ opened: opened }">
                <div class="rating" @mouseleave="clearcolor">
                    <v-icon small class="icon increase" @mouseover="handleIncrease" @mouseleave="clearcolor" v-on:click="onIncrease">mdi-arrow-up-bold</v-icon>
                    <span>{{item.activity.rating.value}}</span>
                    <v-icon small class="icon decrease" @mouseover="handleDecrease" @mouseleave="clearcolor" v-on:click="onDecrease">mdi-arrow-down-bold</v-icon>
                </div>
            </div>
            <div class="activity-card-content">
                <v-expansion-panel class="activity-item-panel">
                    <v-expansion-panel-header v-on:click="handleClick">
                        <ActivityItemHeader :title="item.activity.title"/>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        {{item.activity.description}}

                        <div class="additional-info">
                            <v-btn text small outlined>Обсудить</v-btn>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-card-actions class="activity-actions">
                    <div class="comments">
                        <v-tooltip dark right v-if="this.item.comment && this.item.comment.length !== 0">
                            <template v-slot:activator="{ on }">
                                <v-icon class="icon hover" v-on:click="handleOpen" v-on="on">mdi-comment-multiple-outline</v-icon>
                                <span class="comments-count">{{commentsCount()}}</span>
                            </template>
                            <span>Left tooltip</span>
                        </v-tooltip>
                        <v-tooltip dark right v-else>
                            <template v-slot:activator="{ on }">
                                <v-icon class="icon hover" v-on:click="handleOpen">mdi-comment-outline</v-icon>
                                <span class="comments-count">{{commentsCount()}}</span>
                            </template>
                            <span>Right tooltip</span>
                        </v-tooltip>
                        <!-- <v-icon v-if="this.item.comment && this.item.comment.length !== 0" class="icon hover" v-on:click="handleOpen">mdi-comment-multiple-outline</v-icon>
                        <v-icon v-else class="icon hover" v-on:click="handleOpen">mdi-comment-outline</v-icon>
                        <span class="comments-count">{{commentsCount()}}</span> -->
                    </div>
                    <div class="activity-datetime">
                        {{this.activityDateTime}}
                    </div>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>

import ActivityItemHeader from "@/components/ActivityItemHeader";

export default {
    props: {
        item: Object,
        loading: Boolean,
        onIncrease: Function,
        onDecrease: Function,
        onOpen: Function
    },
    data() {
        return {
            opened: false,
            hoverIncrease: false,
            hoverDecrease: false,
            activityDateTime: ""
        }
    },
    computed: {

    },
    components: {
        ActivityItemHeader
    },
    methods: {
        commentsCount: function() {
            if (this.item.comment && this.item.comment.length) {
                this.activityDateTime = this.parseDate(this.item.activity);
                return this.item.comment.length;
            }

            return "";
        },
        parseDate: function(activity) {
            if (activity && activity.addDateTime) {
                var date = new Date(activity.addDateTime);
                if (date) {
                    let datetime = [];
                    datetime.push(date.getDate());
                    datetime.push(date.getMonth());
                    datetime.push(date.getFullYear());

                    return datetime.join(".");
                }
            }

            return "";
        },
        handleClick: function() {
            this.opened = !this.opened;
        },
        handleIncrease: function() {
            setTimeout(() => {
                this.hoverIncrease = !this.hoverIncrease
            }, 100);
        },
        handleDecrease: function() {
            setTimeout(() => {
                this.hoverDecrease = !this.hoverDecrease
            }, 100);
        },
        clearcolor: function() {
            this.hoverIncrease = false;
            this.hoverDecrease = false;
        },
        handleOpen: function() {
            this.$store.dispatch('activities/showDetails', this.$attrs.uid);
        }
    }
}

</script>

<style scoped>

.comments-count {
    padding-left: 5px;
}

.activity-actions {
    font-size: 14px;
    background-color: #f9f9fb;
    border-top: 1px solid #e9e9e9;
    padding: 2px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hover {
    cursor: pointer;
}

.activity-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    padding-left: 47px;
}

.activity-card-content {
    flex-grow: 30;
}

.v-expansion-panels .v-expansion-panel-header,
.v-expansion-panel--active .v-expansion-panel-header {
    transition: background-color 1s;
    min-height: 58px;
    border-bottom: 1px solid transparent;
}

.rating-element {
    flex-grow: 1;
    min-width: 45px;
    position: absolute;
    left: 0px;
    background-color: #FDFDFD;
    border-radius: 1px solid #e9e9e9;
    border: 1px solid #e9e9e9;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
}

.rating {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.rating span {
    font-size: 14px;
}

.icon {
    cursor: pointer;
    opacity: 0.65;
}

.icon:hover {
    opacity: 1;
}

.activity-card {
    display: flex;
    position: static;
    width: 100%;
}

.icon {
    border: 1px solid transparent;
}

.activity-card.increase .v-expansion-panel-header {
    background-color: rgba(200,230,201 ,1);
    border-bottom: 1px solid #e9e9e9;
}

.activity-card.decrease .v-expansion-panel-header {
    background-color: rgba(255,205,210 ,1);
    border-bottom: 1px solid #e9e9e9;
}

.activity-actions {
    background-color: #f9f9fb;
    border-top: 1px solid #e9e9e9;
    padding: 2px 24px;
}


</style>