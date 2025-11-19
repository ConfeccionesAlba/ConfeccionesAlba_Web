<script setup lang="ts">
import {APP_ROUTE_NAMES} from "@/constants/routeNames";
import {WHATSAPP_NUMBER_URL} from "@/constants/constants";
</script>

<template>
  <div class="container mb-5">
    <div class="card mb-3 bg-body-tertiary border-0">
      <div class="card-body">
        <h2 class="card-title text-center mb-3">
          Confecciones hechas con cariño y estilo
        </h2>
        <p class="card-text text-center mb-3">
          Ropa a medida, comidas caseras y artesanías - todo hecho por nuestra familia para vos.
        </p>
        <p class="card-text text-center mb-3">
          Hacemos realidad tus ideas: desde un traje especial hasta un postre para tu fiesta.
        </p>
        <div class="d-flex justify-content-center gap-3 mb-3">
          <router-link :to="{name: APP_ROUTE_NAMES.PRODUCTS}" class="btn btn-success">Ver Productos ️→</router-link>
          <a :href="WHATSAPP_NUMBER_URL" target="_blank" rel="noopener noreferrer"
             class="btn btn-outline-secondary">
            Contactar por WhatsApp
          </a>
        </div>
        <div class="text-center">
          <small class="text-muted">Pedidos personalizados | Entregas locales | Hecho a mano</small>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <!-- TODO: Talk about the business and the family -->
  </div>

  <div class="container mb-5">
    <h2>Nuestras categorías</h2>

    <div class="row mb-4">

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
        <div class="card h-100">
          <div class="card-header">
            Confecciones
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              Ropa a medida, trajes, disfraces y ropa especial.
            </p>
            <p class="card-text">
              <strong>Ejemplos:</strong> Vestidos de fiesta, trajes para chicos, disfraces temáticos, ropa para eventos.
            </p>
            <button class="btn btn-secondary mt-auto">Ver confecciones</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
        <div class="card h-100">
          <div class="card-header">
            Comidas
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              Comidas caseras y dulces, hechos con recetas de la familia.
            </p>
            <p>
              <strong>Ejemplos:</strong>Tortas a pedido, postres, facturas y conservas.
            </p>
            <button class="btn btn-secondary mt-auto">Ver comidas</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
        <div class="card h-100">
          <div class="card-header">
            Otros
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              Manualidades y artículos personalizados: muñecos, decoraciones y regalos hechos a mano.
            </p>
            <p>
              <strong>Ejemplos:</strong> Muñecos hechos a mano, decoraciones para fiestas, artículos personalizados.
            </p>
            <button class="btn btn-secondary mt-auto">Ver otros</button>
          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- Gallery section with responsive layouts -->
  <div class="container mb-5">
    <h2>Galería destacada</h2>

    <!-- Mobile carousel - only visible on small screens -->
    <div id="carouselExample" class="carousel slide d-md-none">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/sewing_machine.svg" class="d-block w-100" alt="alt" loading="lazy">
        </div>
        <div class="carousel-item">
          <img src="@/assets/sewing_machine.svg" class="d-block w-100" alt="alt" loading="lazy">
        </div>
        <div class="carousel-item">
          <img src="@/assets/sewing_machine.svg" class="d-block w-100" alt="alt" loading="lazy">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- PC grid layout - only visible on medium screens and up -->
    <div class="row d-none d-md-flex">
      <div class="col-md-4 mb-4">
        <img src="@/assets/sewing_machine.svg" class="img-fluid" alt="alt" loading="lazy">
      </div>
      <div class="col-md-4 mb-4">
        <img src="@/assets/sewing_machine.svg" class="img-fluid" alt="alt" loading="lazy">
      </div>
      <div class="col-md-4 mb-4">
        <img src="@/assets/sewing_machine.svg" class="img-fluid" alt="alt" loading="lazy">
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <h2>Testimonios</h2>

    <div class="row mb-4">

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
        <div class="card w-100 bg-body-tertiary">
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              "Excelente trabajo: el traje quedó perfecto y a tiempo."
            </p>
            <p class="card-text">
              <strong>- Mariana R.</strong>
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
        <div class="card w-100 bg-body-tertiary">
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              "Comunicación fácil y precio justo."
            </p>
            <p class="card-text">
              <strong>- Jose M.</strong>
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch mb-4">
        <div class="card w-100 bg-body-tertiary">
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              "Atención cercana y producto impecable. Volveré a pedir."
            </p>
            <p class="card-text">
              <strong>- Ana P.</strong>
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="container mb-5">
    <div class="card mb-3 bg-warning bg-opacity-25 border-0">
      <div class="card-body">
        <h2 class="card-title text-center mb-3">
          ¿Querés un producto hecho a medida?
        </h2>
        <p class="card-text text-center mb-3">
          Contanos tu idea y te armamos un presupuesto sin compromiso.
        </p>
        <div class="d-flex justify-content-center mb-3">
          <a :href="WHATSAPP_NUMBER_URL" target="_blank" rel="noopener noreferrer"
             class="btn btn-success">
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
