import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './componentes/ProtectedRoute';

// Páginas públicas
import Principal from './paginas/inicio/paginaprincipal';
import Nosotros from './paginas/nosotros/nosotros';
import Servicios from './paginas/servicios/Servicios';
import InicioCon from './paginas/inicio/inicioCon';
import TerminosDeUso from './paginas/politicas/Terminos';
import Ayuda from './paginas/politicas/Ayuda';
import PoliticaDePrivacidad from './paginas/politicas/politica';
import RegisterForm from './componentes/registrar';
import LoginForm from './paginas/inicio/Login';
import Contacto from './paginas/contacto/InicioContactos';
import Hotel from './paginas/servicios/Hotel.jsx';
import Paquetes from './paginas/servicios/Paquetes.jsx';
import Excursiones from './paginas/servicios/Excursiones.jsx';
import ExcursionDesc from './paginas/descripcion/DescExcursion.jsx';
import PaqueteDesc from './paginas/descripcion/DescPaquete.jsx';
import HotelDesc from './paginas/descripcion/DescHotel.jsx';
import ReservaForm from './paginas/reservas/resevar'; // Asegúrate de que el nombre del archivo sea correcto

// Página de acceso denegado
import AccessDenied from './paginas/AccesoDenegado/AccesoDenegado.jsx';

// Rutas protegidas solo para Admin
import DashboardAdmin from './paginas/dashboard/Dashboard';
import AdminPage from './paginas/dashboard/dashboardadmin';
import AdminCrud from './paginas/admin/AdminPage';
import ClientesCRUD from './componentes/clientesCRUD';
import PaquetePage from './paginas/paquete/PaquetePage';
import FormExcursion from './paginas/excursiones/Excursiones';
import ComentariosCRUD from './componentes/comentarioCRUD';
import ListaDeContactos from './paginas/contacto/ListarContactos';
import FormHotel from './paginas/hoteles/FormHotel';
import Reservas from './paginas/reservas/ReservaCrud';
import Transporte from './paginas/transporte/TablaTransporte';
import ReservasGestion from './paginas/gestionreservas/gestioreserva.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Principal />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/inicio-con" element={<InicioCon />} />
          <Route path="/terminos" element={<TerminosDeUso />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/politica" element={<PoliticaDePrivacidad />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/sesion" element={<LoginForm />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/excursiones" element={<Excursiones />} />
          <Route path="/excursiondesc" element={<ExcursionDesc />} />
          <Route path="/paquetedesc" element={<PaqueteDesc />} />
          <Route path="/hoteldesc" element={<HotelDesc />} />
          <Route path="/reserva" element={<ReservaForm />} />

          {/* Página de acceso denegado */}
          <Route path="/denegado" element={<AccessDenied />} />

          {/* Rutas protegidas solo para admin */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <DashboardAdmin />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <AdminPage />
            </ProtectedRoute>
          } />
          <Route path="/crudadmin" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <AdminCrud />
            </ProtectedRoute>
          } />
          <Route path="/clientes" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <ClientesCRUD />
            </ProtectedRoute>
          } />
          <Route path="/paquete" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <PaquetePage />
            </ProtectedRoute>
          } />
          <Route path="/excursiones-admin" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <FormExcursion />
            </ProtectedRoute>
          } />
          <Route path="/comentario" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <ComentariosCRUD />
            </ProtectedRoute>
          } />
          <Route path="/crudcontacto" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <ListaDeContactos />
            </ProtectedRoute>
          } />
          <Route path="/formhotel" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <FormHotel />
            </ProtectedRoute>
          } />
          <Route path="/crud" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <Reservas />
            </ProtectedRoute>
          } />
          <Route path="/transporte" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <Transporte />
            </ProtectedRoute>
          } />
          <Route path="/gestionreserva" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <ReservasGestion />
            </ProtectedRoute>
          } />

          {/* Ruta de fallback */}
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

