import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Header />
      <main className="overflow-hidden flex-1">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
