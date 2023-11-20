import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ClientLayout from './Layout/ClientLayout';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
         <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<Signup />} />
      <Route path='/' element = {<ClientLayout/>}>
        <Route index element={<HomePage />} />
      </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
