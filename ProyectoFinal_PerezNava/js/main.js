document.addEventListener('DOMContentLoaded', async () => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let costo = parseFloat(localStorage.getItem('costo')) || 0;

    let productos = [];
    try {
        const response = await fetch('data.json');
        productos = await response.json();
    } catch (error) {
        console.error('Error al cargar productos:', error);
        mostrarMensaje('No se pudieron cargar los productos.', 'error');
        return;
    }

    const productosElement = document.getElementById('productos');
    const carritoElement = document.getElementById('carrito');
    const formElement = document.getElementById('formCantidad');
    const inputCantidad = document.getElementById('cantidad');
    const confirmacionElement = document.getElementById('confirmacionCompra');
    const btnConfirmarCompra = document.getElementById('btnConfirmarCompra');
    const btnCancelarCompra = document.getElementById('btnCancelarCompra');

    let productoSeleccionado = null;

    const mostrarProductos = (categoria, tipo) => {
        productosElement.innerHTML = '';
        const filteredProducts = productos.filter(p => p.categoria === categoria && (tipo ? p.tipo === tipo : true));

        filteredProducts.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto';
            productoDiv.innerHTML = `
                <span>${producto.nombre} - $${producto.precio}</span>
                <button onclick="seleccionarProducto(${producto.id})">Agregar al carrito</button>
            `;
            productosElement.appendChild(productoDiv);
        });
        
    };

    window.seleccionarProducto = (productoId) => {
        productoSeleccionado = productos.find(p => p.id === productoId);
        if (productoSeleccionado) {
            inputCantidad.value = '';
            formElement.style.display = 'block';
        }
    };

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        if (productoSeleccionado) {
            const cantidad = parseInt(inputCantidad.value, 10);

            if (isNaN(cantidad) || cantidad <= 0) {
                mostrarMensaje('Cantidad inválida', 'error');
                return;
            }

            let itemCarrito = carrito.find(item => item.id === productoSeleccionado.id);
            if (itemCarrito) {
                costo -= itemCarrito.cantidad * itemCarrito.precio; // Restar el costo anterior
                itemCarrito.cantidad += cantidad;
            } else {
                carrito.push({ ...productoSeleccionado, cantidad });
            }

            costo += cantidad * productoSeleccionado.precio; // Sumar el nuevo costo
            localStorage.setItem('carrito', JSON.stringify(carrito));
            localStorage.setItem('costo', costo);
            mostrarCarrito();
            mostrarMensaje(`Has agregado ${cantidad} ${productoSeleccionado.nombre} al carrito.`, 'success');
            productoSeleccionado = null;
            formElement.style.display = 'none';
        }
    });

    const mostrarCarrito = () => {
        carritoElement.innerHTML = '';
        if (carrito.length === 0) {
            carritoElement.innerHTML = '<p>No tienes artículos agregados</p>';
        } else {
            carrito.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'carrito-item';
                itemDiv.innerHTML = `${item.cantidad} ${item.nombre} - $${item.cantidad * item.precio}`;
                carritoElement.appendChild(itemDiv);
            });
            carritoElement.innerHTML += `<p>Costo total: $${costo}</p>`;
        }
    };

    const mostrarMensaje = (mensaje, tipo) => {
        Swal.fire({
            text: mensaje,
            icon: tipo === 'success' ? 'success' : tipo === 'error' ? 'error' : 'info',
            confirmButtonText: 'OK'
        });
    };

    const mostrarConfirmacionCompra = () => {
        Swal.fire({
            text: "¿Deseas comprar el carrito?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                if (carrito.length === 0) {
                    mostrarMensaje("El carrito está vacío.", 'error');
                    return;
                }

                mostrarMensaje("Compra realizada con éxito. ¡Gracias por tu compra!", 'success');
                costo = 0;
                carrito = [];
                localStorage.removeItem('carrito');
                localStorage.removeItem('costo');
                mostrarCarrito();
            } else {
                mostrarMensaje("Sigue agregando productos a tu carrito.", 'info');
            }
        });
    };

    document.getElementById('btnRopa').addEventListener('click', () => mostrarProductos('Ropa'));
    document.getElementById('btnSuplementos').addEventListener('click', () => mostrarProductos('Suplementos'));
    document.getElementById('btnAccesorios').addEventListener('click', () => mostrarProductos('Accesorios'));
    document.getElementById('btnCarrito').addEventListener('click', () => {
        carritoElement.style.display = 'block';
        mostrarCarrito();
    });
    document.getElementById('btnComprar').addEventListener('click', mostrarConfirmacionCompra);

    //mostrarMensaje("Selecciona una categoría para comenzar.", 'info');
});
