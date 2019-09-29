<template>

    <div style="margin-top: 10px;">
        <v-card 
            class="mx-auto"
        >
            <v-card-title class="card-details">
                <div class="title-row">
                    <div class="activity-name">
                        <v-icon  left class="icon hover account">mdi-library</v-icon>
                        <span class="title font-weight-light">{{currentItem.title}}</span>
                    </div>
                    <div class="creation-date caption font-weight-light">
                        {{currentItem.addDateTime}}
                    </div>
                </div>
            </v-card-title>
            <v-card-text class="card-details-content">
                {{currentItem.description}}
            </v-card-text>

            <CommentsFund
                :activityId="id"
                :items="currentItem.comments"
            />
        </v-card>
    </div>

</template>

<script>
import CommentsFund from "@/components/CommentsFund";

export default {
    props: {
        id: String,
    },
    components: {
        CommentsFund
    },
    created: function() {
        this.$store.dispatch('fund/GetFundDetails', this.id);
    },
    computed: {
        currentItem: function() {
            return this.$store.getters['fund/getDetailedItems'];
        }
    }
}
</script>

<style scoped>
    .title-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .card-details {
        border-bottom: 1px solid #e9e9e9;
    }

    .card-details-content {
        padding-top: 10px;
    }

    .details-rating {
        position: absolute;
        left: 12px;
        top: -16px;
        width: 50px;
        height: 24px;
        color: #fff;
        background-color: #D0D0D0;
        border-radius: 2px;
        text-align: center;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>