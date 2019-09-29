<template>

    <div style="margin-top: 10px;">
        <v-card 
            class="mx-auto"
        >
            <v-card-title class="card-details">
                <div class="details-rating">
                    {{extendedItem.mark}}
                </div>
                <div class="title-row">
                    <div class="activity-name">
                        <v-icon  left class="icon hover account">mdi-library</v-icon>
                        <span class="title font-weight-light">{{extendedItem.title}}</span>
                    </div>
                    <div class="creation-date caption font-weight-light">
                        {{extendedItem.addDateTime}}
                    </div>
                </div>
            </v-card-title>
            <div>
                <img v-bind:src="extendedItem.pictureUrl" class="content-image"/>
                <v-card-text class="card-details-content" v-html="extendedItem.description" />
            </div>
            <div v-if="extendedItem.tags.length !== 0" class="tags-container">
                <v-chip v-for="(item, i) in extendedItem.tags"
                    v-bind:key="i"
                    small
                >
                    {{item.name}}
                </v-chip>
            </div>
            <Comments 
                :activityId="id"
                :items="extendedItem.comments"
            />
        </v-card>
    </div>

</template>

<script>
import Comments from "@/components/Comments";

export default {
    props: {
        id: String,
    },
    data: function() {
        return {
            extendedItem: {
                tags: {
                    length: []
                }
            }
        }
    },
    components: {
        Comments
    },
    created: function() {
        this.$store.dispatch('activities/GetActivityDetails', this.id).then(res => {
            this.extendedItem = res;
            debugger;
        });
    },
    computed: {
        currentItem: function() {
            return this.$store.getters['activities/getDetailedItems'];
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

    .content-image {
        padding: 18px;
        max-width: 600px;
        max-height: 400px;
    }

    .tags-container {
        padding-left: 10px;
    }

    .tags-container .v-chip {
        margin-right: 10px;
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