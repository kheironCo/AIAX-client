import { Outlet, Route, Routes } from 'react-router-dom';
import { NavBar } from './pages/landing/components';
import { Home } from './pages/landing/Home';
import About from './pages/landing/Views/About';
import BusinessRoute from './pages/business/routes';
import UserRoute from './pages/dashboard/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <div>
              <NavBar />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/user/*" element={<UserRoute />} />
        <Route path="/register" element={<Register />} />
        <Route path="/business/*" element={<BusinessRoute />} />
      </Routes>
    </>
  );
}

export default App;
