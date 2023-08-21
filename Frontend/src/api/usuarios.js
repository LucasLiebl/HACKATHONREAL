import axios from "axios";
export default class UsuariosApi{
    async adicionarUsuarios(usuarios){
        const response = await axios.post("http://localhost:3000/usuarios/", usuarios);   
        return response.data
    }
    async removerUsuarios(id){
        const response = await axios.delete(`http://localhost:3000/usuarios/${id}`);
        return response.data
    }
    async 
}
