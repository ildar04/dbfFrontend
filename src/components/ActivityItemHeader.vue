<template>
    <div class="header-container">
        <div class="activity-header-text">
            {{title}}
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: String
    }
}

</script>

<style scoped>

.header-container {
    display: flex;
    align-items: center;
}

</style>

