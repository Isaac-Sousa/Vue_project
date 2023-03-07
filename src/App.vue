<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">
    {{ produto.nome }}
      <form @submit.prevent="salvar()">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="produto.nome">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD" v-model="produto.quantidade">
          <label>Valor</label>
          <input type="text" placeholder="Valor" v-model="produto.valor">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="Produtos of Produtos" :key="Produtos.id">

            <td>{{ produto.nome }}</td>
            <td>{{ produto.quantidade }}</td>
            <td>{{ produto.valor }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>
<script>
import Produtos from './services/Produtos';
export default{
  data(){
    return{
      produto:{
         nome: '',
         quantidade: '',
         valor: '',
      },
      Produtos:[]
    }
  },
  mounted(){
    Produtos.Listar().then(resposta=>{
      console.log(resposta.data)
      this.Produtos = Produtos.data
    })
  },
  methods:{
    salvar(){
     Produtos.salvar(this.produto).then(resposta=>{
      alert('Salvo com sucesso'),
      console.log(resposta)
     })
    }
  }

}
</script>

<style>

</style>
