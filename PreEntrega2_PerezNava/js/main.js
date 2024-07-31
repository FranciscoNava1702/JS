let costo = 0;
let carrito = [];

const productos = [
    { id: 1, categoria: "Ropa", tipo: "Playera", nombre: "Compresión", precio: 200 },
    { id: 2, categoria: "Ropa", tipo: "Playera", nombre: "Oversize", precio: 250 },
    { id: 3, categoria: "Ropa", tipo: "Playera", nombre: "Tirantes", precio: 150 },
    { id: 4, categoria: "Ropa", tipo: "Playera", nombre: "Top", precio: 180 },
    { id: 5, categoria: "Ropa", tipo: "Pants", nombre: "Jogger", precio: 250 },
    { id: 6, categoria: "Ropa", tipo: "Pants", nombre: "Leggins", precio: 200 },
    { id: 7, categoria: "Ropa", tipo: "Pants", nombre: "Shorts", precio: 180 },
    { id: 8, categoria: "Suplementos", tipo: "Proteina", nombre: "Proteina 60 servicios", precio: 750 },
    { id: 9, categoria: "Suplementos", tipo: "Proteina", nombre: "Proteina 30 servicios", precio: 450 },
    { id: 10, categoria: "Suplementos", tipo: "Creatina", nombre: "Creatina 30 servicios", precio: 200 },
    { id: 11, categoria: "Suplementos", tipo: "Creatina", nombre: "Creatina 60 servicios", precio: 380 },
    { id: 12, categoria: "Suplementos", tipo: "Creatina", nombre: "Creatina 90 servicios", precio: 500 },
    { id: 13, categoria: "Accesorios", tipo: "Straps", nombre: "Straps", precio: 150 },
    { id: 14, categoria: "Accesorios", tipo: "Rodilleras", nombre: "Rodilleras", precio: 350 },
    { id: 15, categoria: "Accesorios", tipo: "Guantes", nombre: "Guantes S", precio: 150 },
    { id: 16, categoria: "Accesorios", tipo: "Guantes", nombre: "Guantes M", precio: 160 },
    { id: 17, categoria: "Accesorios", tipo: "Guantes", nombre: "Guantes L", precio: 170 }
];

const menu = () => {
    console.log("Bienvenido\n¿Que deseas comprar?");
    console.log("1. Ropa\n2. Suplementos\n3. Accesorios\n4. Carrito\n5. Comprar y Salir\n6. Salir sin Comprar");
    return parseInt(prompt("Selecciona una opción"));
}

const main = () => {
    let opcion;
    do {
        opcion = menu();
        switch (opcion) {
            case 1:
                ropa();
                break;
            case 2:
                suplementos();
                break;
            case 3:
                accesorios();
                break;
            case 4:
                mostrarCarrito();
                break;
            case 5:
                if (confirmarCompra()) {
                    reiniciar();
                }
                break;
            case 6:
                console.log("Vuelve pronto...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 6);
}

const ropa = () => {
    let opcion;
    do {
        console.log("ROPA\n1. Playeras\n2. Pants\n3. Regresar");
        opcion = parseInt(prompt("Selecciona una opción"));
        switch (opcion) {
            case 1:
                playera();
                break;
            case 2:
                pants();
                break;
            case 3:
                console.log("Regresando a página principal...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 3);
}

const mostrarCarrito = () => {
    console.log("Carrito de Compras:");
    if (carrito.length === 0) {
        console.log("No tienes artículos agregados");
    } else {
        carrito.forEach(item => {
            console.log(`${item.cantidad} ${item.nombre} - $${item.cantidad * item.precio}`);
        });
        console.log("Costo total: $" + costo);
    }
}

const confirmarCompra = () => {
    if (carrito.length === 0) {
        console.log("El carrito está vacío. Regresando al menú principal...");
        return false;
    }

    let confirmar = parseInt(prompt("¿Deseas comprar el carrito? (1.si/2.no)"));
    if (confirmar === 1 && costo > 0) {
        console.log("Compra realizada con éxito. ¡Gracias por tu compra!");
        return true;
    } else {
        console.log("Sigue agregando productos a tu carrito.");
        return false;
    }
}

const reiniciar = () => {
    costo = 0;
    carrito = [];
    main();
}

const playera = () => {
    let opcion;
    do {
        console.log("\n1. Compresión\n2. Oversize\n3. Tirantes\n4. Top\n5. Regresar");
        opcion = parseInt(prompt("Selecciona una opción"));
        let producto;
        switch (opcion) {
            case 1:
                producto = productos.find(p => p.nombre === "Compresión");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 2:
                producto = productos.find(p => p.nombre === "Oversize");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 3:
                producto = productos.find(p => p.nombre === "Tirantes");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 4:
                producto = productos.find(p => p.nombre === "Top");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 5:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 5);
}

const pants = () => {
    let opcion;
    do {
        console.log("\n1. Jogger\n2. Leggins\n3. Shorts\n4. Regresar");
        opcion = parseInt(prompt("Selecciona una opción"));
        let producto;
        switch (opcion) {
            case 1:
                producto = productos.find(p => p.nombre === "Jogger");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 2:
                producto = productos.find(p => p.nombre === "Leggins");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 3:
                producto = productos.find(p => p.nombre === "Shorts");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 4:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 4);
}

const suplementos = () => {
    let opcion;
    do {
        console.log("SUPLEMENTOS\n1. Proteinas\n2. Creatina\n3. Regresar ");
        opcion = parseInt(prompt("Selecciona una opción"));
        switch (opcion) {
            case 1:
                proteinas();
                break;
            case 2:
                creatina();
                break;
            case 3:
                console.log("Regresando a página principal...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 3);
}

const proteinas = () => {
    let opcion;
    do {
        console.log("Proteina");
        console.log("1. Proteina 60 servicios\n2. Proteina 30 servicios\n3. Regresar\n");
        opcion = parseInt(prompt("Selecciona una opción"));
        let producto;
        switch (opcion) {
            case 1:
                producto = productos.find(p => p.nombre === "Proteina 60 servicios");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 2:
                producto = productos.find(p => p.nombre === "Proteina 30 servicios");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 3:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 3);
}

const creatina = () => {
    let opcion;
    do {
        console.log("Creatina");
        console.log("1. Creatina 30 servicios\n2. Creatina 60 servicios\n3. Creatina 90 servicios\n4. Regresar\n");
        opcion = parseInt(prompt("Selecciona una opción"));
        let producto;
        switch (opcion) {
            case 1:
                producto = productos.find(p => p.nombre === "Creatina 30 servicios");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 2:
                producto = productos.find(p => p.nombre === "Creatina 60 servicios");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 3:
                producto = productos.find(p => p.nombre === "Creatina 90 servicios");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 4:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 4);
}

const accesorios = () => {
    let opcion;
    do {
        console.log("ACCESORIOS\n1. Straps\n2. Rodilleras\n3. Guantes\n4. Regresar");
        opcion = parseInt(prompt("Selecciona una opción"));
        let producto;
        switch (opcion) {
            case 1:
                producto = productos.find(p => p.tipo === "Straps");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 2:
                producto = productos.find(p => p.tipo === "Rodilleras");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 3:
                guantes();
                break;
            case 4:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 4);
}

const guantes = () => {
    let opcion;
    do {
        console.log("TALLA\n1. S\n2. M\n3. L\n4. Regresar");
        opcion = parseInt(prompt("Selecciona una opción"));
        let producto;
        switch (opcion) {
            case 1:
                producto = productos.find(p => p.tipo === "Guantes" && p.nombre === "Guantes S");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 2:
                producto = productos.find(p => p.tipo === "Guantes" && p.nombre === "Guantes M");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 3:
                producto = productos.find(p => p.tipo === "Guantes" && p.nombre === "Guantes L");
                console.log(`Producto seleccionado: ${producto.nombre} - $${producto.precio}`);
                agregarAlCarrito(producto);
                break;
            case 4:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 4);
}

const agregarAlCarrito = (producto) => {
    let cantidad = parseInt(prompt(`¿Cuántas piezas de ${producto.nombre} quieres?`));
    console.log(`Has agregado ${cantidad} ${producto.nombre} al carrito por un precio de $${producto.precio} cada uno.`);
    let total = cantidad * producto.precio;
    costo += total;

    let itemCarrito = carrito.find(item => item.nombre === producto.nombre);
    if (itemCarrito) {
        itemCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }
}

main();
