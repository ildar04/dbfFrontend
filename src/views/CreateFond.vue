<template>
    <v-row
            align="center"
            justify="center"
            class="form-style"
    >
        <v-col
                cols="12"
                sm="8"
                md="6"
        >

            <v-card class="elevation-12">
                <v-toolbar
                        color="primary"
                        dark
                        flat
                >
                    <v-toolbar-title>Создать фонд</v-toolbar-title>
                    <div class="flex-grow-1"></div>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                                v-model="title"
                                label="Название"
                                data-vv-name="title"
                                required
                        ></v-text-field>


                        <v-text-field
                                v-model="description"
                                label="Описание"
                                data-vv-name="description"
                                required
                        ></v-text-field>

                        <VueCtkDateTimePicker v-model="budget_start"/>
                        <VueCtkDateTimePicker v-model="budget_target"/>

                        <v-select
                                :items="listUsers"
                                v-model="authorUids"
                                item-text="fullName"
                                multiple
                                item-value="uid"
                                label="Пользователи"
                        ></v-select>

                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="primary" class="mr-4" @click="submit">Создать</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
  export default {
      mounted() {
          this.$store.dispatch('users/getUsers')
      },
      computed: {
          listUsers () {
              var value = this.$store.getters['users/list'];
              return value;
          }
      },
      methods: {
          submit() {
              let data = {
                  "title": this.title,
                  "description": this.description,
                  "imageUrl": "url",
                  "authorUids": this.authorUids
              };

              this.$store.dispatch('activities/create', data).then((status)=> {
                  this.$router.push('/');
              });
          }
      },
      data(){
          return  {
              title: '',
              description: '',
              authorUids: [],
              datetime:'2017-06-30 11:05:00',
          }
      }
  }
</script>
<style scoped>
    .dateInput {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>