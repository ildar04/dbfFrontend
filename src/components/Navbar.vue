<template>
  <div>
    <v-app-bar
      color="white"
      dense
    >
      <v-toolbar-title v-on:click="handleTitleClick" class="title-pointer">S0M3N4M3</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <template v-if="$vuetify.breakpoint.smAndUp">
      <v-menu offset-y  v-if="authentificated">
          <template v-slot:activator="{ on }">
              <v-btn
                      color="success"
                      dark
                      v-on="on"
              >
                  Создать
              </v-btn>
          </template>
          <v-list>
              <v-list-item @click="toCreateActivity" >
                  <v-list-item-title>Мероприятие</v-list-item-title>
              </v-list-item>

              <v-list-item @click="toCreateFond" >
                  <v-list-item-title>Фонды</v-list-item-title>
              </v-list-item>
          </v-list>
      </v-menu>

        <v-btn icon v-if="authentificated">
          <v-icon v-on:click="handleGoToProfile">mdi-account-circle</v-icon>
        </v-btn>

        <v-btn icon v-if="authentificated">
            <v-icon v-on:click="handleLogoutClick">mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>
<script>
export default {
    data: function() {
        return {};
    },
    methods: {
        handleTitleClick: function() {
            this.$store.dispatch('navbar/ToHome');
        },

        handleLogoutClick: function() {
            this.$store.dispatch('auth/LogOut');
            this.$store.dispatch("navbar/ToLogin");
        },
        toCreateActivity() {
          this.$router.push("/create-activity")
        },
        toCreateFond() {
            this.$router.push("/create-fond")
        },
        handleGoToProfile() {
          this.$router.push({path: "/user/" + this.uid })
        },
    },
    computed: {
        authentificated: function() {
            return this.$store.getters["auth/isAuth"];
        },
        uid: function() {
          return this.$store.getters["auth/getUid"];
        }
    }
}

</script>

<style scoped>

.title-pointer {
    cursor: pointer;
}

</style>