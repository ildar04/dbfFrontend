<template>
    <v-card-actions class="activity-actions">
        <div class="actions-left comments">
            <v-icon v-if="activity.commentsCount" class="icon hover" v-on:click="handleOpen">mdi-comment-multiple-outline</v-icon>
            <v-icon v-else class="icon hover" v-on:click="handleOpen">mdi-comment-outline</v-icon>
            <span class="comments-count">{{this.commentsCount}}</span>
        </div>
        <div class="actions-right">
            <div class="activity-datetime">
                {{this.activityDateTime}}
            </div>
            <v-icon class="icon hover account">mdi-account</v-icon>
        </div>
    </v-card-actions>
</template>

<script>

import Helper from "../Helper";

export default {
    props: {
        activity: Object,
        uid: String
    },
    data: function() {
        return {
            activityDateTime: "",
            commentsCount: ""
        }
    },
    computed: {
        commentsCount() {
            return this.activity.commentsCount;
        }
    },
    created: function() {
        if (this.activity.addDateTime) {
            var helper = new Helper();
            this.activityDateTime = helper.string2date(this.activity.addDateTime);
        }
    },
    methods: {
        handleOpen: function() {
            this.$store.dispatch('activities/showDetails', this.activity.uid);
        }
    }
}

</script>