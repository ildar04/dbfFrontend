<template>
  <div>
    <v-app-bar
      color="white"
      dense

    >
      <v-toolbar-title v-on:click="handleTitleClick" class="title-pointer">S0M3N4M3</v-toolbar-title>

      <div class="flex-grow-1"></div>

    <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon v-if="authentificated">
          <v-icon v-on:click="handleLogoutClick">mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>

export default {
    methods: {
        handleTitleClick: function() {
            this.$store.dispatch('navbar/ToHome');
        },

        handleLogoutClick: function() {
            this.$store.dispatch('auth/LogOut');
            this.$store.dispatch("navbar/ToLogin");
        }
    },
    computed: {
        authentificated: function() {
            return this.$store.getters["auth/isAuth"];
        }
    }
}

</script>

<style scoped>

.title-pointer {
    cursor: pointer;
}

</style>