<template>
    <div class="activity-item">
        <v-card class="activity-card">
            <div class="activity-card-content">
                <v-expansion-panel class="activity-item-panel">
                    <v-expansion-panel-header v-on:click="handleClick">
                        <div class="rating">
                            <v-icon increase class="icon increase prevent" @click.native.stop="onClickRating">mdi-arrow-up-bold</v-icon>
                            <span class="mark-count">{{marks}}</span>
                            <v-icon decrease class="icon decrease prevent" @click.native.stop="onClickRating">mdi-arrow-down-bold</v-icon>
                        </div>
                        <ActivityItemHeader :title="item.title"/>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        {{item.description}}
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-card-actions class="activity-actions">
                    <div class="actions-left comments">
                        <v-tooltip dark right v-if="commentsCount !== 0">
                            <template v-slot:activator="{ on }">
                                <v-icon class="icon hover" v-on:click="handleOpen" v-on="on">mdi-comment-multiple-outline</v-icon>
                                <span class="comments-count">{{commentsCount}}</span>
                            </template>
                            <span>К расширенному просмотру</span>
                        </v-tooltip>
                        <v-tooltip dark right v-else>
                            <template v-slot:activator="{ on }">
                                <v-icon class="icon hover" v-on:click="handleOpen">mdi-comment-outline</v-icon>
                                <span class="comments-count">{{commentsCount}}</span>
                            </template>
                            <span>К расширенному просмотру</span>
                        </v-tooltip>
                    </div>
                    <div class="actions-right">
                        <div class="activity-datetime">
                            {{this.activityDateTime}}
                        </div>
                        <v-icon class="icon hover account" v-on:click="showUser">mdi-account</v-icon>
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
        onOpen: Function
    },
    data() {
        return {
            opened: false,
            hoverIncrease: false,
            hoverDecrease: false,
            activityDateTime: "",
            commentsCount: 0,
            marks: 0
        }
    },
    created() {
        this.commentsCount = this.item.commentsCount;
        this.marks = this.item.mark;
    },
    components: {
        ActivityItemHeader
    },
    methods: {
        handleClick: function() {
            this.opened = !this.opened;
        },
        handleOpen: function() {
            this.$store.dispatch('activities/showDetails', this.$attrs.uid);
        },
        onClickRating: function(e) {
            this.$store.dispatch("activities/activityAction", this.createDTO(e.target.hasAttribute('increase'))).then(res => {
                this.marks = res.data;
            });
        },
        createDTO: function(flagValue) {
            return {
                entityUid: this.$attrs.uid,
                userUid: this.$store.getters["auth/getUid"],
                flag: flagValue
            };
        },
        showUser: function() {
            this.$router.push({path: "/user/" + this.item.authorUid });
        }
    }
}

</script>

<style scoped>

.mark-count {
    padding: 5px 0;
}

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
    border-bottom: 1px solid transparent;
    padding: 10px 24px 16px 8px;
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
    flex: 0;
    padding-right: 10px;
}

.rating span {
    font-size: 14px;
}

.rating .icon {
    cursor: pointer;
    opacity: 0.65;
    font-size: 24px;
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