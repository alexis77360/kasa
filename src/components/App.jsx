import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import About from "../pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*//! Revoir le Css .navbar__links__style:focus dans Navigation CSS */

function App() {
	return (
		<div className="App">
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
