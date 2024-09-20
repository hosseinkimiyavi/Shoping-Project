import { Routes ,Route, Navigate } from "react-router-dom"
import ProductPage from "./pages/ProductPage"
import CheckOutpage from "./pages/CheckOutpage"
import Detailspage from "./pages/Detailspage"
import Notfoundepage from "./pages/Notfoundepage"
function App() {
 

  return (
    <>
     <Routes>
      <Route index element={<Navigate to="/product" replace />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<Detailspage />} />
      <Route path="/CheckOut" element={<CheckOutpage />} />
      <Route path="*" element={<Notfoundepage />} />
     </Routes>
    </>
  )
}

export default App
