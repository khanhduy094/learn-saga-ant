import { cityApi } from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import AdminLayout from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Button} from 'antd';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => {
      console.log(res.pagination);
    });
  }, []);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(authActions.logout())
  }
  return (
    <div>
      {/* <Button  type='primary' onClick={handleLogoutClick}>Logout</Button> */}
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
