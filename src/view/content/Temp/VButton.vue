<template>
  <v-btn class="mx-0 font-weight-light" color="success" v-on:click="submit">
    Executar comando
  </v-btn>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name:"v-button",
  methods: {
    ...mapActions({
      limparFlashMessage: "central_mensagens/limparFlashMessage",

      submit: function() {
        this.limparFlashMessage(); //① set the flash message
        // this.$router.push({ path: "/" }); //redirect-For notification ②Show
      }
    })
  }
};
</script>
