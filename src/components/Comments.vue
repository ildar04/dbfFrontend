<template>
  <v-list subheader>
    <v-subheader v-if="items && items.length" class="overline">Последние комментарии</v-subheader>
    <v-subheader v-else class="overline">Комментарии отсутствуют</v-subheader>
    <div v-if="items && items.length">
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        class="comments-item"
      >
        <v-list-item-avatar>
          <v-icon class="icon hover account">mdi-account</v-icon>
        </v-list-item-avatar>

        <v-list-item-content class="comment-content">
          <div class="comment-content-flex">
            <span class="message body-2">{{item.text}}</span>
            <span class="comment-date caption" style="color: rgba(0, 0, 0, 0.54)">{{item.addDateTime}}</span>
          </div>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div class="add-comment-container">
        <v-text-field
          single-line
          hide-details
          class="comment-text"
          append-icon="mdi-send"
          solo
          placeholder="Комментарий"
          v-model="commentdata"
          @click:append="handleCreateComment"
          v-on:keyup.enter="handleCreateComment"
        >
        </v-text-field>
    </div>
  </v-list>
</template>

<script>
  import API from "@/api";

  export default {
    props: {
      title: String,
      items: Array,
      activityId: String
    },
    data: function() {
      return {
        commentdata: "",
        commentSuccess: false
      }
    },
    methods: {
      handleCreateComment() {
        API.post("api/activity/comment", {
          "entityUid": this.activityId,
          "authorUid": this.uid,
          "text": this.commentdata
        }).then(res => {
          this.items = res.data;
        });
        this.commentdata = "";
      }
    },
    computed: {
          uid () {
              return this.$store.getters['auth/getUid'];
          }
      },
  }
</script>

<style>

.comment-added {
  visibility: hidden;
}

div .commentSuccess {
  visibility: visible;
}

.comment-text .v-icon {
  cursor: pointer;
}

.commentSuccess {
  visibility: hidden;
}

</style>

<style scoped>

.add-comment-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding: 15px 16px 0px;
}

.comment-content-flex {
    display: flex;
    justify-content: space-between;
}

.comment-date {
    min-width: 110px;
    white-space: nowrap;
}

.comments-item:not(:last-of-type) .comment-content {
    border-bottom: 1px solid #e9e9e9;
}

</style>