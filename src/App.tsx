import 'antd/dist/antd.css';
import { cityApi } from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import AdminLayout from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import DashboardFeature from 'features/dashboard';
import StudentFeature from 'features/student';
import AddEditPage from 'features/student/pages/AddEditPage';
import ListPage from 'features/student/pages/ListPage';
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
        {/* <Route path="/admin" element={<PrivateRoute outlet={<AdminLayout />}/>} /> */}
        <Route path="/admin/" element={<PrivateRoute outlet={<AdminLayout />}/>} >
          <Route path="dashboard" element={<DashboardFeature />} />
          <Route path="students" element={<StudentFeature />} >
            <Route path="list" element={<ListPage />} />
            <Route path="add" element={<AddEditPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
