import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ openModal }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-sand text-slate-800 overflow-x-hidden">
      <Navbar openModal={openModal} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer openModal={openModal} />
    </div>
  );
}
