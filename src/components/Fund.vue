<template>
    <v-expansion-panels>
        <FundItem
            v-for="(item, i) in currentItems"
            :key="i"
            :item="item"
            :loading="loading"
            :onIncrease="handleIncrease"
            :onDecrease="handleDecrease"
            :uid="item.uid"
        />
  </v-expansion-panels>
</template>

<script>
import FundItem from "@/components/FundItem";

export default {
    components: {
        FundItem
    },
    beforeCreate: function() {
        this.$store.dispatch('fund/getFunds');
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
            var value = this.$store.getters['fund/getItems'];
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