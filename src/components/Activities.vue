
<template>
    <v-expansion-panels>
        <ActivityItem
            v-for="(item, i) in currentItems"
            :key="i"
            :item="item"
            :loading="loading"
        />
  </v-expansion-panels>
</template>

<script>
import ActivityItem from "@/components/ActivityItem";

export default {
    components: {
        ActivityItem
    },
    beforeCreate: function() {
        this.$store.dispatch('activities/getItems');
    },
    data: function() {
        return {
            loading: true,
            items: [
                {
                    title: "hello",
                    content: "test"
                },
                                {
                    title: "hello",
                    content: "test"
                }
            ]
        };
    },
    computed: {
        currentItems () {
            return this.$store.getters['activities/getItems']
        }
    }
};

</script>