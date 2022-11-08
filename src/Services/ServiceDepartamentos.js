import Global from './../Global';
import axios from 'axios';

export default class ServiceDepartamentos{
    getDepartamentos(){
        return new Promise(function(resolve){
            var request = "/api/Departamentos";
            var url = Global.urldepartamentos + request;
            var departamentos = [];
            axios.get(url).then(response =>{
                departamentos = response.data;
                resolve(departamentos);
            })
        })
    }

    //INSERT DE LA CRUD
    //METODO QUE RECIBA UN OBJETO DEPARTAMANTO 
    //DESDE LA PETICION
    insertarDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "/api/departamentos";
            var url = Global.urldepartamentos + request;
            axios.post(url,departamento).then(response =>{
                resolve(response);

            });
        })
    }


    //METODO PARA ENCONTRAR EL DEPARTAMENTO, (NO ES DE MODIFICAR)
    findDepartamento(id){
        return new Promise(function(resolve){
            var request = "/api/departamentos/"+ id;
            var url = Global.urldepartamentos + request;
            
            var departamento = {};
            axios.get(url).then(response =>{
                departamento = response.data
                resolve(departamento);

            });
        })     
    }

    //METODO PARA MODIFICAR UN DEPARTAMENTO
    //RECIBIMOS EL DATO DEL OBJETO DEPARTAMENTO
    updateDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "/api/departamentos/";
            var url = Global.urldepartamentos + request;
            
            //NECESITA UN OBJETO, POR ESO PONEMOS DESPUES DE url, el departamento
            axios.put(url,departamento).then(response =>{
                resolve(response);
            });
        })     
    }

    //METODO PARA ELIMINAR RECIBIENDO UN ID
    deleteDepartamento(id){
        return new Promise(function(resolve){
            var request = "/api/departamentos/" + id;
            var url = Global.urldepartamentos + request;
            
            axios.delete(url).then(response =>{
                resolve(response);
            });
        })     
    }

}