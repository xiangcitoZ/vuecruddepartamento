<template>
    <div>
        <h1>Departamentos</h1>
        <div v-if="status == false">
            <img src="./../assets/loading.gif"/>
        </div>
        <table class="table table-bordered table-warning" v-else>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>LOCALIDAD</th>
                    <th>Detalles</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departamentos" :key="dept.numero">
                    <td>{{dept.numero}}</td>
                    <td>{{dept.nombre}}</td>
                    <td>{{dept.localidad}}</td>
                    <td>
                        <router-link :to="'/details/' + dept.numero + '/'+ dept.nombre + '/'+dept.localidad"
                        class="btn btn-success">
                            Details
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="'/update/' + dept.numero "
                        class="btn btn-info">
                            Edit
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="'/delete/' + dept.numero "
                        class="btn btn-danger">
                            Delete
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceDepartamentos from './../Services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

    export default {
        name:"DepartamentosComponent",
        
        data(){
            return{
                departamentos:[],
                status: false
            }
        }, mounted(){
            service.getDepartamentos().then(result =>{
                this.departamentos = result;
                this.status = true;
            });
        }
    }
</script>