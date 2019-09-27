<template>
    <v-expansion-panel>
        <v-expansion-panel-header>
            {{item.title}}
        </v-expansion-panel-header>

        <v-expansion-panel-content>
            {{item.content}}
        </v-expansion-panel-content>

    </v-expansion-panel>
</template>

<script>

export default {
    props: ['item']
}

</script>