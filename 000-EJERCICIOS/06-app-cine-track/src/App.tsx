import Footer from './components/Footer';
import Header from './components/Header';
import MyMovies from './components/MyMovies';
import PrivateRoutes from './components/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router';

function App() {
  // return (
  //   <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-100">
  //     <Header />
  //     <main className="my-8 px-16">
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/login" element={<LoginPage />} />
  //         <Route path="/register" element={<RegisterPage />} />

  //         {/* rutas anidadas */}

  //         <Route element={<PrivateRoutes />}>
  //           <Route path="/user" element={<UserPage />}>
  //             <Route path='my-movies' element={<MyMovies />} />
  //           </Route>
  //         </Route>

  //         <Route element={<PublicRoutes />}>
  //           <Route path="/login" element={<LoginPage />} />
  //         </Route>
  //       </Routes>

  //     </main>
  //     <Footer />
  //   </div>
  // );
}

export default App;
