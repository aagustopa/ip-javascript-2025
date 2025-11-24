import { Outlet } from 'react-router';
import Header from '../components/Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="px-16 my-8">
                <Outlet />
            </main>
        </>
    );
}
