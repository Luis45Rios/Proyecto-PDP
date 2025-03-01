document.getElementById("hacerCompra").addEventListener("click", function() {
    window.location.href = "../Compras/compras.html";
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los contenedores de productos
    let productos = document.querySelectorAll("#productos-destacados div");

    productos.forEach(producto => {
        // Verificamos si ya tiene un botón
        let tieneBoton = producto.querySelector("button");

        // Si no tiene botón, lo agregamos
        if (!tieneBoton) {
            let boton = document.createElement("button");
            boton.textContent = "Comprar";
            boton.classList.add("boton-comprar"); // Clase CSS opcional

            // Agregar funcionalidad al botón
            boton.addEventListener("click", function() {
                alert("Producto agregado al carrito");
            });

            // Agregar el botón al producto
            producto.appendChild(boton);
        }
    });
});