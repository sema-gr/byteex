import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from "../../pages/ProductPage/ProductPage";
import "./App.style.css"

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}