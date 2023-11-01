import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <ToastContainer/>
      <div className='min-h-screen flex flex-col justify-between'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
