<template>
  <div>
    <v-app-bar
      color="white"
      dense
    >
        <v-toolbar-title v-on:click="handleTitleClick" class="title-pointer">VOLUNTEERY</v-toolbar-title>
        <v-tab  v-on:click="goToActivityList" >
            Мероприятия
        </v-tab>
        <v-tab v-on:click="goToFundList">
            Фонды
        </v-tab>

      <div class="flex-grow-1"></div>
      <template v-if="$vuetify.breakpoint.smAndUp">
      <v-menu offset-y v-if="authentificated">
          <template v-slot:activator="{ on }">
              <v-btn
                      color="success"
                      class="create-button"
                      dark
                      small
                      v-on="on"
              >
                  Создать
              </v-btn>
          </template>
          <v-list>
              <v-list-item @click="toCreateActivity" >
                  <v-list-item-title>Мероприятие</v-list-item-title>
              </v-list-item>

              <v-list-item @click="toCreateFund">
                  <v-list-item-title>Фонды </v-list-item-title>
              </v-list-item>
          </v-list>
      </v-menu>

    <v-menu offset-y v-if="authentificated">
          <template v-slot:activator="{ on }">
              <v-icon v-on="on" class="user-button">mdi-account-circle</v-icon>
          </template>
          <v-list>
              <v-list-item @click="handleGoToProfile" >
                  <v-list-item-title>Профиль</v-list-item-title>
              </v-list-item>

              <v-list-item @click="handleLogoutClick" >
                  <v-list-item-title>Выйти</v-list-item-title>
              </v-list-item>
          </v-list>
      </v-menu>
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
        toCreateFund() {
            this.$router.push("/create-fund")
        },
        handleGoToProfile() {
          this.$router.push({path: "/user/" + this.uid })
        },

        goToActivityList() {
            this.$router.push({path: "/activities" })
            this.$store.dispatch('navbar/setTab', '/activitys');
        },

        goToFundList() {
            this.$router.push({path: "/fund" })
            this.$store.dispatch('navbar/setTab', '/fund');
        }
    },
    computed: {
        authentificated: function() {
            return this.$store.getters["auth/isAuth"];
        },
        uid: function() {
          return this.$store.getters["auth/getUid"];
        },
        currTab: function() {
            // console.log(this.$store.getters["navbar/getCurrTab"]);
            return this.$store.getters["navbar/getCurrTab"];
        }
    },
    mounted() {

       //  this.$router.beforeEach((to, from, next) => {
       // console.log("to")
       // console.log(to)
       //  })

    }
}

</script>

<style scoped>

.create-button {
    margin-right: 10px;
}

div .user-button {
    opacity: 0.65;
    font-size: 32px;
}

div .user-button:hover {
    opacity: 1;
}

.title-pointer {
    cursor: pointer;
}

</style>

<style>

i.icon {
    opacity: 0.65;
}

i.icon:hover {
    opacity: 1;
}

</style>