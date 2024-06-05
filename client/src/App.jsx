import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import AdminSideBar from './feature/AdminSideBar';
import AdminLayout from './layouts/admin/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';
import Main from './layouts/user/Main';
import RequireAdminAuth from './components/admin/RequireAdminAuth';
import { DashboardLayout } from './layouts/admin/DashboardLayout';
import { OverView } from './pages/admin/OverView';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './utils/MUITheme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='login' element={<AdminLogin />} />
            <Route element={<RequireAdminAuth />}>
              <Route path='dashboard' element={<DashboardLayout />} >
                <Route path='overview' element={<OverView />} />
              </Route>
            </Route>
          </Route>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
