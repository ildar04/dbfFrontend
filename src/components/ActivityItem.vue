<template>
    <div class="activity-item">
        <v-card class="activity-card">
            <div class="rating-element" v-bind:class="{ opened: opened }">
                <div class="rating">
                    <v-icon small class="icon increase" v-on:click="onIncrease">mdi-arrow-up-bold</v-icon>
                    <span>{{item.mark}}</span>
                    <v-icon small class="icon decrease" v-on:click="onDecrease">mdi-arrow-down-bold</v-icon>
                </div>
            </div>
            <div class="activity-card-content">
                <v-expansion-panel class="activity-item-panel">
                    <v-expansion-panel-header v-on:click="handleClick">
                        <ActivityItemHeader :title="item.title"/>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        {{item.description}}
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-card-actions class="activity-actions">
                    <div class="actions-left comments">
                        <v-tooltip dark right v-if="item.commentsCount">
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
                    </div>
                    <div class="actions-right">
                        <div class="activity-datetime">
                            {{this.activityDateTime}}
                        </div>
                        <v-icon class="icon hover account">mdi-account</v-icon>
                    </div>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>

import ActivityItemHeader from "@/components/ActivityItemHeader";
import ActivityActions from "@/components/ActivityActions";
import Helper from "../Helper";

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
        ActivityItemHeader,
        ActivityActions
    },
    methods: {
        commentsCount: function() {
            if (this.item.commentCount) {
                var helper = new Helper();
                this.activityDateTime = helper.string2date(this.item.addDateTime);
                return this.item.commentCount;
            }

            return "";
        },
        handleClick: function() {
            this.opened = !this.opened;
        },
        handleOpen: function() {
            this.$store.dispatch('activities/showDetails', this.$attrs.uid);
        }
    }
}

</script>

<style scoped>

.actions-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.actions-right .icon {
    border: 1px solid transparent;
    border-radius: 50%;
    background-color: white;
    padding: 5px;
    margin-left: 10px;
}

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