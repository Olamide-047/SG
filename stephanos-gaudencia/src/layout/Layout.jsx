import Header from "../components/Header"
import Footer from "../components/Footer"
import {Outlet} from "react-router-dom"

function Layout(){

return(

<div className="min-h-screen flex flex-col bg-onyx text-ivory selection:bg-gold selection:text-onyx">

<Header/>

<main className="grow">
  <div className="max-w-7xl mx-auto px-6 w-full">
    <Outlet/>
  </div>
</main>

<Footer/>

</div>

)

}

export default Layout