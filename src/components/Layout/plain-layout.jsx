import Header from '../header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer'

function PlainLayout() {
    return (
        <div>
            <div className='fixed top-0 w-full z-10'>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default PlainLayout