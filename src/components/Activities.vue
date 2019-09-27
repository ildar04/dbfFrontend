<template>
    <v-expansion-panels>
        <ActivityItem
            v-for="(item, i) in items"
            :key="i"
            :item="item"
        />
  </v-expansion-panels>
</template>

<script>

import ActivityItem from "@/components/ActivityItem";

export default {
    components: {
        ActivityItem
    },

    data: function() {
        return {
            items: [
                {
                    title: "hello",
                    content: "test"
                }]
        };
    },
};

</script>