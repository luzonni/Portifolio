import { Outlet } from "react-router-dom"
import MyHeader from "../../components/MyHeader"
import Footer from "../../components/Footer"


const DefaultPage = () => {
    return (
        <>
            <MyHeader />
            <Outlet/>
            <Footer />
        </>
    )
}

export default DefaultPage