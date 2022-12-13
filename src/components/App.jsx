import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import About from "../pages/About";
import Apartment from "../pages/Apartment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/about" element={<About />} />
					<Route path="apartment/:apartmentId" element={<Apartment />} />

				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
