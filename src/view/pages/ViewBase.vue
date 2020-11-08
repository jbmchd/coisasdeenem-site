<template>
  <v-row no-gutters>
      <v-col cols="12">
        <template v-if="esta_autorizado || desabilitarAutorizacao">
            <template v-if="!blank">
                <page-title-bar :title="pageTitle" ></page-title-bar>
            </template>

            <slot></slot>

        </template>
        <erro-403 v-else></erro-403>
      </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import middleware_autorizacao from './../router/middlewares/autorizacao'

export default {
    props:{
        desabilitarAutorizacao: Boolean,
        empresaObrigatorio: Boolean,
        centroObrigatorio: Boolean,
        pageTitle:String,
        blank:Boolean,
    },
  computed: {
    ...mapGetters('sessao', {sessaoEmpresa:'empresa',sessaoCentroResultados:'centro_resultados'}),
    empresa(){
        return this.sessaoEmpresa ? this.sessaoEmpresa : this.$route.params.empresa
    },
    centro(){
        return this.sessaoCentroResultados ? this.sessaoCentroResultados : this.$route.params.centro_resultados
    },
    esta_autorizado () {
      let result = middleware_autorizacao(this.$router.currentRoute)
      return result
    },
  },
  created() {
      if( this.empresaObrigatorio && !this.empresa) this.$router.push({name:'empresas'})
      if( this.centroObrigatorio && !this.centro) this.$router.push({name:'centros-resultados'})
  },
};
</script>
