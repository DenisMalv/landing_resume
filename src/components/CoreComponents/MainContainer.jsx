import { Outlet } from "react-router-dom"

const MainContainer = ({children}) =>{

    return (
        <div className="main-container">
            <Outlet/>
            {children}
        </div>
    )
}

export default MainContainer