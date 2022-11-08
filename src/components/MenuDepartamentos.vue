<template>
 <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="/#"><img style="width: 100px"
    src="./../assets/crud.jpg"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/insert">Nuevo Departamento</router-link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" 
          role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Departamento
          </a>
          <ul class="dropdown-menu">
            
            
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: "MenuDepartamentos.vue"
    }
</script>