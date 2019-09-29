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
                    <v-icon class="icon hover account hover" v-on:click="handleClose">mdi-close</v-icon>
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

                        <VueCtkDateTimePicker label="Дата начала мероприятия"  style="margin-top: 10px" v-model="startDate"/>
                        <VueCtkDateTimePicker  label="Дата окончания мероприятия" style="margin-top: 15px; margin-bottom: 20px" v-model="endDate"/>

                        <v-text-field
                                v-model="budget"
                                hide-details
                                type="number"
                                label="Бюджет"
                        />

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
          },
          uid () {
              return this.$store.getters['auth/getUid'];
          }
      },
      methods: {
          submit() {
              const data = {
                  "uid": this.uid,
                  "title": this.title,
                  "description": this.description,
                  "budget": this.budget,
                  "startDate": this.startDate,
                  "endDate": this.endDate
              }

              // console.log(data);

              this.$store.dispatch('fund/createFund', data).then((status)=> {
              //     // this.$router.push('/');
              });
          },

        handleClose() {
              this.$store.dispatch('navbar/ToHome');
          }
      },
      data(){
          return  {
              title: '',
              description: '',
              authorUids: [],
              endDate:'2017-06-30 11:05:00',
              startDate:'2017-06-30 11:05:00',
              budget: 0,
          }
      }
  }
</script>
<style scoped>
    .dateInput {
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>