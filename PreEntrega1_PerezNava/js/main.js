let costo = 0;
let cantC = 0,cantO = 0,cantT = 0,cantTo = 0;
let cantJ = 0,cantL = 0,cantS = 0;
let cantP3=0,cantP6=0;
let cantC3=0, cantC6=0, cantC9=0;
let cantR=0, cantST=0, cantGS=0, cantGM=0, cantGL=0;

function menu() {
    console.log("Bienvenido\n¿Que deseas comprar?");
    console.log("1. Ropa\n2. Suplementos\n3. Accesorios\n4. Carrito\n5. Comprar y Salir\n6. Salir sin Comprar");
    let opcion = parseInt(prompt("Selecciona una opción"));
    return opcion;
}

function main() {
    let opcion;
    do {
        opcion = menu();
        switch (opcion) {
            case 1:
                ropa();
                break;
            case 2:
                Suplementos();
                break;
            case 3:
                Accesorios();
                break;
            case 4:
                mostrarCarrito();
                break;
            case 5:
                if (confirmarCompra()==true) {
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

function ropa() {
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

function mostrarCarrito() {
    console.log("Carrito de Compras:");
    if (cantC > 0) console.log(cantC + " playeras de compresión - $" + cantC * 200);
    if (cantO > 0) console.log(cantO + " playeras oversize - $" + cantO * 250);
    if (cantT > 0) console.log(cantT + " playeras de tirantes - $" + cantT * 150);
    if (cantTo > 0) console.log(cantTo + " tops - $" + cantTo * 180);
    if (cantJ > 0) console.log(cantJ + " joggers - $" + cantJ * 250);
    if (cantL > 0) console.log(cantL + " leggins - $" + cantL * 200);
    if (cantS > 0) console.log(cantS + " shorts - $" + cantS * 180);
    if (cantP6 > 0) console.log(cantP6 + " proteina(60 servicios) - $" + cantP6 * 750);
    if (cantP3 > 0) console.log(cantP3 + " proteina(30 servicios) - $" + cantP3 * 450);
    if (cantC3 > 0) console.log(cantC3 + " creatina(30 servicios) - $" + cantC3 * 200);
    if (cantC6 > 0) console.log(cantC6 + " creatina(60 servicios) - $" + cantC6 * 380);
    if (cantC9 > 0) console.log(cantC9 + " creatina(90 servicios) - $" + cantC9 * 500);
    if (cantST > 0) console.log(cantST + " straps - $" + cantST * 150);
    if (cantR > 0) console.log(cantR + " rodilleras - $" + cantR * 350);
    if (cantGS > 0) console.log(cantGS+ " guantes(S) - $" + cantGS * 150);
    if (cantGM > 0) console.log(cantGM+ " guantes(M) - $" + cantGM * 160);
    if (cantGL > 0) console.log(cantGL+ " guantes(L) - $" + cantGL * 170);
    if(costo==0) console.log("No tienes articulos agregados");


    console.log("Costo total: $" + costo);
}

function confirmarCompra() {
    let confirmar = prompt("¿Deseas comprar el carrito? (1.si/2.no)");
    if (confirmar == 1 && costo>0) {
        console.log("Compra realizada con éxito. ¡Gracias por tu compra!");
        return true;
    } else {
        console.log("Sigue agregando productos a tu carrito.");
        return false;
    }
}

function reiniciar() {
    costo = 0;
    cantC = 0, cantO = 0, cantT = 0, cantTo = 0;
    cantJ = 0, cantL = 0, cantS = 0;
    cantP3 = 0, cantP6 = 0;
    cantC3 = 0, cantC6 = 0, cantC9 = 0;
    cantR = 0, cantST = 0, cantGS = 0, cantGM = 0, cantGL = 0;
    main();
}

function playera() {
    let opcion2;

    do {
        console.log("\n1. Compresión\n2. Oversize\n3. Tirantes\n4. Top\n5. Regresar");
        opcion2 = parseInt(prompt("Selecciona una opción"));
        switch (opcion2) {
            case 1:
                console.log("Precio\n$200");
                let numC = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numC + " playeras de compresion al carrito");
                let totalC = numC * 200;
                costo += totalC;
                cantC += numC;
                break;
            case 2:
                console.log("Precio\n$250");
                let numO = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numO + " playeras oversize al carrito");
                let totalO = numO * 250;
                costo += totalO;
                cantO += numO;
                break;
            case 3:
                console.log("Precio\n$150");
                let numT = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numT + " playeras de tirantes al carrito");
                let totalT = numT * 150;
                costo += totalT;
                cantT += numT;
                break;
            case 4:
                console.log("Precio\n$180");
                let numTo = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numTo + " tops al carrito");
                let totalTo = numTo * 180;
                costo += totalTo;
                cantTo += numTo;
                break;
            case 5:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion2 != 5);
}

function pants() {
    let opcion2;
    do {
        console.log("\n1. Jogger\n2. Leggins\n3. Shorts\n4. Regresar");
        opcion2 = parseInt(prompt("Selecciona una opción"));
        switch (opcion2) {
            case 1:
                console.log("Precio\n$250");
                let numJ = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numJ + " jogger(s) al carrito");
                let totalJ = numJ * 250;
                costo += totalJ;
                cantJ += numJ
                break;
            case 2:
                console.log("Precio\n$200");
                let numL = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numL + " leggin(s) al carrito");
                let totalL = numL * 200;
                costo += totalL;
                cantL += numL
                break;
            case 3:
                console.log("Precio\n$180");
                let numS = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numS + " short(s) al carrito");
                let totalS = numS * 180;
                costo += totalS;
                cantS += numS;
                break;
            case 4:
                console.log("Regresando...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion2 != 4);
}

function Suplementos(){
    let opcion;
    do {
        console.log("SUPLEMENTOS\n1. Proteinas\n2. Creatina\n3. Regresar ");
        opcion = parseInt(prompt("Selecciona una opción"));

        switch (opcion) {
            case 1:
                Proteinas();
                break;
            case 2:
                Creatina();
                break;
            case 3:
                console.log("Regresando a página principal...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 3);
}

function Proteinas(){
    let opcion;
    do {
        console.log("1. 60 servicios\n2. 30 servicios \n3. Regresar\n");
        opcion = parseInt(prompt("Selecciona una opción"));

        switch (opcion) {
            case 1:
                console.log("Precio\n$750");
                let numP6 = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numP6 + " proteina(60 servicios)");
                let totalP6 = numP6 * 750;
                costo += totalP6;
                cantP6 += numP6;
                break;
            case 2:
                console.log("Precio\n$750");
                let numP3 = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numP3 + " proteina(30 servicios)");
                let totalP3 = numP3 * 450;
                costo += totalP3;
                cantP3 += numP3;
                break;
            case 3:
                console.log("Regresando a página principal...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 3);
}

function Creatina(){
    let opcion;
    do {
        console.log("1. 30 servicios\n2. 60 servicios \n3. 90 servicios\n4. Regresar\n");
        opcion = parseInt(prompt("Selecciona una opción"));

        switch (opcion) {
            case 1:
                console.log("Precio\n$200");
                let numC3 = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numC3 + " creatina(30 servicios)");
                let totalC3 = numC3 * 200;
                costo += totalC3;
                cantC3 += numC3;
                break;
            case 2:
                console.log("Precio\n$380");
                let numC6 = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numC6 + " creatina(60 servicios)");
                let totalC6 = numC6 * 380;
                costo += totalC6;
                cantC6 += numC6;
                break;
            case 3:
                console.log("Precio\n$500");
                let numC9 = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numC9 + " creatina(90 servicios)");
                let totalC9 = numC9 * 500;
                costo += totalC9;
                cantC9 += numC9;
                break; 
            case 4:
                console.log("Regresando a página principal...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 4);
}

function Accesorios(){
    let opcion;
    do {
        console.log("ACCESORIOS\n1. Straps\n2. Rodilleras\n3. Guantes\n4. Regresar");
        opcion = parseInt(prompt("Selecciona una opción"));

        switch (opcion) {
            case 1:
                console.log("Precio\n$150");
                let numST = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numST + " straps al carrito");
                let totalST = numST * 150;
                costo += totalST;
                cantST += numST;
                break;
            case 2:
                console.log("Precio\n$350");
                let numR = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numR + " rodilleras al carrito");
                let totalR = numR * 350;
                costo += totalR;
                cantR += numR;
                break;
            case 3:
                Guantes();
                break;
            case 4:
                console.log("Regresando a página principal...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 4);
}

function Guantes(){
    let opcion;
    do {
        console.log("TALLA\n1. S \n2. M\n3. L\n4. Regresar");
        opcion = parseInt(prompt("Selecciona una opción"));

        switch (opcion) {
            case 1:
                console.log("Precio\n$150");
                let numST = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numST + " guantes(S)");
                let totalGS = numGS * 150;
                costo += totalGS;
                cantGS += numGS;
                break;
            case 2:
                console.log("Precio\n$160");
                let numGM = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numGM + " guantes(M)");
                let totalGM = numGM * 350;
                costo += totalGM;
                cantGM += numGM;
                break;
            case 3:
                console.log("Precio\n$170");
                let numGL = parseInt(prompt("¿Cuántas piezas quieres?"));
                console.log("Has agregado " + numGL + " guantes(L)");
                let totalGL = numGL * 350;
                costo += totalGL;
                cantGL += numGL;
                break;
            case 4:
                console.log("Regresando a página principal...");
                break;
            default:
                console.log("Selecciona una opción correcta");
        }
    } while (opcion != 4);
}
main();
