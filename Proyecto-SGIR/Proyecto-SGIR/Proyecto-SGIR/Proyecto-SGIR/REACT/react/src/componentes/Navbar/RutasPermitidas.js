const obtenerRutasP = (isAuthenticated, roles) => {
    const rutasBase = [
        { nombre: 'Inicio', ruta: '/', roles: [] },
        { nombre: 'Sesión', ruta: '/sesion', roles: [] },
        // Otras rutas públicas que necesites
    ];

    const rutasAdmin = [
        { nombre: "Clientes", ruta: "/clientes", roles: ["admin"] },
        { nombre: "Comentarios", ruta: "/comentarios", roles: ["admin"] },
        { nombre: "Comida", ruta: "/comida", roles: ["admin"] },
        { nombre: "Contactos", ruta: "/contactos", roles: ["admin"] },
        { nombre: "Excursiones", ruta: "/excursiones-admin", roles: ["admin"] },
        { nombre: "Hoteles", ruta: "/hoteles", roles: ["admin"] },
        { nombre: "Paquete", ruta: "/paquete", roles: ["admin"] },
        { nombre: "Reserva", ruta: "/reserva", roles: ["admin"] },
        { nombre: "Transporte", ruta: "/transporte", roles: ["admin"] },
        { nombre: "Dashboard", ruta: "/dashboard", roles: ["admin"] },
        { nombre: "Admin", ruta: "/admin", roles: ["admin"] }
    ];

    let rutasPermitidas = [
        ...rutasBase,
        ...(isAuthenticated && roles?.includes("admin") ? rutasAdmin : []),
    ];

    return rutasPermitidas.filter((ruta, index, self) =>
        index === self.findIndex((r) => r.ruta === ruta.ruta)
    );
};
