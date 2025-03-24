function iniciarCarrito() {
    let productos = [
        { id: 1, nombre: "Remera", precio: 15000 },
        { id: 2, nombre: "Jeans", precio: 50000 },
        { id: 3, nombre: "buzito", precio: 33000 },
        { id: 4, nombre: "zapas", precio: 90000 }
    ];

    let total = 0;
    let carrito = [];
    let seguirComprando = true;

    while (seguirComprando) {
        let listaProductos = "Seleccione un producto:\n";
        productos.forEach(prod => {
            listaProductos += `${prod.id}. ${prod.nombre} - $${prod.precio}\n`;
        });

        let seleccion = parseInt(prompt(listaProductos));

        let productoEncontrado = productos.find(prod => prod.id === seleccion);
        
        if (productoEncontrado) {
            carrito.push(productoEncontrado);
            total += productoEncontrado.precio;
            seguirComprando = confirm("¿Quieres agregar otro producto?");
        } else {
            alert("Opción no válida. Intenta nuevamente.");
        }
    }

    if (carrito.length > 0) {
        let resumen = "🛍️ Tu compra:\n";
        carrito.forEach(prod => {
            resumen += `✔️ ${prod.nombre} - $${prod.precio}\n`;
        });
        resumen += `\n💰 Total a pagar: $${total}`;
        alert(resumen);
    } else {
        alert("No has comprado nada.");
    }
}
