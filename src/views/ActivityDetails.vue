<template>
    <ActivityItemDetails v-bind:id="id"/>
</template>

<script>

import ActivityItemDetails from "@/components/ActivityItemDetails";

export default {
    props: ["id"],
    components: {
        ActivityItemDetails
    }
}

</script>