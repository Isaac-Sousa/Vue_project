import {http} from './config'

export default{
   Listar:()=>{
    return http.get('produtos')
   },
   salvar:(produto)=>{
      return http.post('produto',produto)
   } 
}