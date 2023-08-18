import axios from "axios";
export default class UsuariosApi{
    async adicionarUsuarios(usuarios){
        const response = await axios.post("http://localhost:3000/usuarios/", usuarios);   
        return response.data
}
}