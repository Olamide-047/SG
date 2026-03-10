import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext.jsx"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Clothing from "./pages/Clothing"
import Catalogue from "./pages/Catalogue"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Search from "./pages/Search"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="clothing" element={<Clothing />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App