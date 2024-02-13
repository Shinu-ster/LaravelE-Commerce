import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AddProduct from "../pages/AddProduct";
import UpdateProduct from "../pages/UpdateProduct";
export default function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
