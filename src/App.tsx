import 'antd/dist/antd.css';
import { cityApi } from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import AdminLayout from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => {
      console.log(res.pagination);
    });
  }, []);


  return (
    <div>
    
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* private route react-router-v6 typescript */}
        <Route path="/admin" element={<PrivateRoute outlet={<AdminLayout />}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
