import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto p-4">
      <Outlet /> {/* renders child routes like Dashboard, Profile */}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
