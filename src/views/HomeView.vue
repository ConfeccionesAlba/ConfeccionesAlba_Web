<script setup lang="ts">
</script>

<template>
  <div class="container mb-5">
    <div class="card mb-3 bg-body-tertiary border-0">
      <div class="card-body">
        <h2 class="card-title text-center mb-3">
          Confecciones hechas con dedicación y estilo
        </h2>
        <p class="card-text text-center mb-3">
          Ropa a medida, comestibles artesanales y artesanías - todo diseñado por nuestra familia para usted.
        </p>
        <p class="card-text text-center mb-3">
          Transformamos ideas en piezas únicas: desde un traje especial hasta un postre para tu celebración.
        </p>
        <div class="d-flex justify-content-center mb-3">
          <button class="btn btn-success">Ver Productos ️→</button>
        </div>
        <div class="text-center">
          <small class="text-muted">Pedidos personalizados | Entregas locales | Hecho a mano</small>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <!-- Content here -->
  </div>

  <div class="container mb-5">
    <h2>Nuestras categorías</h2>

    <div class="row">

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card h-100">
          <div class="card-header">
            Confecciones textiles
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              Ropa a medida, trajes, disfraces y atuendos especiales.
            </p>
            <p class="card-text">
              <strong>Ejemplos:</strong> Vestidos de fiesta, trajes para niños, disfraces temáticos, confecciones para
              eventos.
            </p>
            <button class="btn btn-secondary mt-auto">Ver confecciones téxtiles</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card h-100">
          <div class="card-header">
            Comestibles
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              Productos de pastelería y comestibles caseros, preparados con recetas familiares.
            </p>
            <p>
              <strong>Ejemplos:</strong> Ejemplos: Tortas por encargo, postres, bollería y conservas.
            </p>
            <button class="btn btn-secondary mt-auto">Ver comestibles</button>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card h-100">
          <div class="card-header">
            Otros
          </div>
          <div class="card-body d-flex flex-column">
            <p class="card-text">
              Manualidades y objetos personalizados: muñecos, decoraciones y regalos hechos a mano.
            </p>
            <p>
              <strong>Ejemplos:</strong> Muñecos artesanales, decoraciones para fiestas, objetos personalizados.
            </p>
            <button class="btn btn-secondary mt-auto">Ver otros</button>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div class="container mb-5">
    <h2>Galería destacada</h2>

    <div id="carouselExample" class="carousel slide">
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

  </div>
  <div class="container mb-5">
    <h2>Testimonios</h2>

    <div class="row">

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card h-100 bg-body-tertiary border-0">
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

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card h-100 bg-body-tertiary border-0">
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

      <div class="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
        <div class="card h-100 bg-body-tertiary border-0">
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
    <div class="card mb-3 bg-body-tertiary border-0">
      <div class="card-body">
        <h2 class="card-title text-center mb-3">
          ¿Quieres un producto hecho a medida?
        </h2>
        <p class="card-text text-center mb-3">
          Cuentanos tu idea y te armamos un presupuesto sin compromiso.
        </p>
        <div class="d-flex justify-content-center mb-3">
          <button class="btn btn-success">Contactar por WhatsApp</button>
        </div>
      </div>
    </div>
  </div>


  <div class="container">
    <!-- Content here -->
  </div>
  <div class="container">
    <!-- Content here -->
  </div>
  <div class="container">
    <!-- Content here -->
  </div>
  <div class="container">
    <!-- Content here -->
  </div>
  <div class="container">
    <!-- Content here -->
  </div>
  <div class="container">
    <!-- Content here -->
  </div>
  <div class="container">
    <!-- Content here -->
  </div>
</template>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
</style>
