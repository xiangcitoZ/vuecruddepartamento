<template>
    <div>
        <h1>
            Detalle
        </h1>
        <h2 style="color:red">
            Nombre: {{$route.params.nombre}},
            Localidad: {{$route.params.localidad}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: "DetallesDepartamento"
    }
</script>