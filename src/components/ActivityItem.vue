<template>
    <div class="activity-item">
                    <div class="rating-element" v-bind:class="{ opened: opened }">
                <div class="rating">
                    <v-icon small class="icon">mdi-arrow-up</v-icon>
                    <span>{{item.rating.value}}</span>
                    <v-icon small class="icon">mdi-arrow-down</v-icon>
                </div>
            </div>
        <v-card class="activity-card" v-bind:class="{ loading: loading }">
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
                    <div>hello</div>
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
        loading: Boolean
    },
    data() {
        return {
            opened: false
        }
    },
    components: {
        ActivityItemHeader
    },
    methods: {
        handleClick: function() {
            this.opened = !this.opened;
            console.log(this.opened);
        }
    }
}

</script>

<style scoped>

.activity-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
}

.activity-card-content {
    flex-grow: 30;
}

.rating-element {
    padding: 10px;
    flex-grow: 1;
    min-width: 45px;
}

.rating {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.rating .icon {
    cursor: pointer;
}

.activity-card {
    display: flex;
    width: 100%;
}

.activity-actions {
    background-color: #f9f9fb;
    border-top: 1px solid #e9e9e9;
    padding: 2px 24px;
}


</style>