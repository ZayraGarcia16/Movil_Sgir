import { useState, useEffect } from "react";
import axios from "axios";
import "../paginas/css/crud.css";

function ClientesCRUD() {
  const [clientes, setClientes] = useState([]);
  const [nuevoCliente, setNuevoCliente] = useState({
    numeroDocumento: "", 
    nombre: "",
    apellido: "",
    correo: "",
    usuario: "",
    contrasena: ""
  });
  const [clienteEditando, setClienteEditando] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get("http://localhost:7700/api/clientes");
        setClientes(response.data);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
        alert("Error al obtener los clientes.");
      }
    };
    fetchClientes();
  }, []);

  const agregarCliente = async () => {
    try {
      if (Object.values(nuevoCliente).some(field => field === "")) {
        alert("Todos los campos son obligatorios.");
        return;
      }

      const response = await axios.post("http://localhost:7700/api/clientes", nuevoCliente);
      setClientes((prevClientes) => [...prevClientes, response.data]);
      setNuevoCliente({
        numeroDocumento: "",
        nombre: "",
        apellido: "",
        correo: "",
        usuario: "",
        contrasena: ""
      });
      alert("Cliente agregado correctamente");
    } catch (error) {
      console.error("Error al agregar cliente:", error);
      alert(`Error al agregar cliente: ${error.response?.data?.message || error.message}`);
    }
  };

  const eliminarCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:7700/api/clientes/${id}`);
      setClientes((prevClientes) => prevClientes.filter((cliente) => cliente._id !== id));
      alert("Cliente eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
      alert(`Error al eliminar cliente: ${error.response?.data?.message || error.message}`);
    }
  };

  const guardarEdicion = async () => {
    if (!clienteEditando) return;

    const { _id, ...datosActualizar } = clienteEditando;

    try {
      const response = await axios.put(`http://localhost:7700/api/clientes/${_id}`, datosActualizar);
      setClientes((prevClientes) =>
        prevClientes.map((cliente) =>
          cliente._id === _id ? response.data : cliente
        )
      );
      setClienteEditando(null);
      alert("Cliente actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar cliente:", error.response?.data || error.message);
      alert(`Error: ${error.response?.data?.message || "No se pudo actualizar el cliente."}`);
    }
  };

  const editarCliente = (cliente) => {
    setClienteEditando(cliente);
  };

  const cancelarEdicion = () => {
    setClienteEditando(null);
  };

  return (
    <div className="clientes-crud-container">
      <h1 className="titulo">Gestión de Clientes</h1>
  
      <div className="crud-content">
        <div className="formulario-container">
          <h3 className="formulario-titulo">{clienteEditando ? "Editar Cliente" : "Agregar Cliente"}</h3>
  
          <div className="formulario-campos">
            <div className="formulario-campo">
              <input
                className="input-field"
                placeholder="Número de Documento"
                value={clienteEditando ? clienteEditando.numeroDocumento : nuevoCliente.numeroDocumento}
                onChange={(e) =>
                  clienteEditando
                    ? setClienteEditando({ ...clienteEditando, numeroDocumento: e.target.value })
                    : setNuevoCliente({ ...nuevoCliente, numeroDocumento: e.target.value })
                }
              />
            </div>
            <div className="formulario-campo">
              <input
                className="input-field"
                placeholder="Nombre"
                value={clienteEditando ? clienteEditando.nombre : nuevoCliente.nombre}
                onChange={(e) =>
                  clienteEditando
                    ? setClienteEditando({ ...clienteEditando, nombre: e.target.value })
                    : setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })
                }
              />
            </div>
            <div className="formulario-campo">
              <input
                className="input-field"
                placeholder="Apellido"
                value={clienteEditando ? clienteEditando.apellido : nuevoCliente.apellido}
                onChange={(e) =>
                  clienteEditando
                    ? setClienteEditando({ ...clienteEditando, apellido: e.target.value })
                    : setNuevoCliente({ ...nuevoCliente, apellido: e.target.value })
                }
              />
            </div>
            <div className="formulario-campo">
              <input
                className="input-field"
                placeholder="Correo"
                value={clienteEditando ? clienteEditando.correo : nuevoCliente.correo}
                onChange={(e) =>
                  clienteEditando
                    ? setClienteEditando({ ...clienteEditando, correo: e.target.value })
                    : setNuevoCliente({ ...nuevoCliente, correo: e.target.value })
                }
              />
            </div>
            <div className="formulario-campo">
              <input
                className="input-field"
                placeholder="Usuario"
                value={clienteEditando ? clienteEditando.usuario : nuevoCliente.usuario}
                onChange={(e) =>
                  clienteEditando
                    ? setClienteEditando({ ...clienteEditando, usuario: e.target.value })
                    : setNuevoCliente({ ...nuevoCliente, usuario: e.target.value })
                }
              />
            </div>
            <div className="formulario-campo">
              <input
                className="input-field"
                placeholder="Contraseña"
                type="password"
                value={clienteEditando ? clienteEditando.contrasena : nuevoCliente.contrasena}
                onChange={(e) =>
                  clienteEditando
                    ? setClienteEditando({ ...clienteEditando, contrasena: e.target.value })
                    : setNuevoCliente({ ...nuevoCliente, contrasena: e.target.value })
                }
              />
            </div>
          </div>
  
          <div className="formulario-botones">
            {clienteEditando ? (
              <>
                <button className="btn-guardar" onClick={guardarEdicion}>Guardar Cambios</button>
                <button className="btn-cancelar" onClick={cancelarEdicion}>Cancelar</button>
              </>
            ) : (
              <button className="btn-agregar" onClick={agregarCliente}>Agregar Cliente</button>
            )}
          </div>
        </div>
  
        <div className="lista-container">
          <h3 className="lista-titulo">Lista de Clientes</h3>
          <ul className="clientes-lista">
            {clientes.map((cliente) => (
              <li key={cliente._id} className="cliente-item">
                <div className="cliente-info">
                  <span><strong>Número de Documento:</strong> {cliente.numeroDocumento}</span>
                  <span><strong>Nombre:</strong> {cliente.nombre}</span>
                  <span><strong>Apellido:</strong> {cliente.apellido}</span>
                  <span><strong>Correo:</strong> {cliente.correo}</span>
                  <span><strong>Usuario:</strong> {cliente.usuario}</span>
                </div>
                <div className="cliente-botones">
                  <button className="btn-editar" onClick={() => editarCliente(cliente)}>Editar</button>
                  <button className="btn-eliminar" onClick={() => eliminarCliente(cliente._id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClientesCRUD;
