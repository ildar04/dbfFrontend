<template>
    <FundItemDetails v-bind:id="id"/>
</template>

<script>

import FundItemDetails from "@/components/FundItemDetails";

export default {
    props: ["id"],
    components: {
        FundItemDetails
    }
}

</script>