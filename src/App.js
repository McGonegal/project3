import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Routes>
                <Route path = "/" element={<Home />} />
                <Route path = "/book/:id" element={<BookDetails />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;