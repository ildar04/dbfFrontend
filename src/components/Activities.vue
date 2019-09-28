
<template>
    <v-expansion-panels>
        <ActivityItem
            v-for="(item, i) in currentItems"
            :key="i"
            :item="item"
            :loading="loading"
            :onIncrease="handleIncrease"
            :onDecrease="handleDecrease"
            :uid="item.activity.uid"
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
            var value = this.$store.getters['activities/getItems'];
            return value;
        }
    },
    methods: {
        handleDecrease: function(sender) {
            //todo sender.uid - идентификатор пользователя
            return sender;
        },
        handleIncrease: function(sender) {
            //todo sender.uid - идентификатор пользователя
            return sender;
        },
        uidGetter: function() {
            return this.uid;
        }
    }
};

</script>