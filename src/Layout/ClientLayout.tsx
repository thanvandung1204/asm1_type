import Footer from '../pages/Footer';
import Header from '../pages/Header';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
    return (
        <>
            <Header/>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default ClientLayout