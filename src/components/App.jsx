import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import About from "../pages/About";


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
       {/*  <Home></Home>  */} 
    {/*  <NotFound></NotFound> */}
        <About></About>  
      <Footer></Footer>
    
    
    </div>
  );
}

export default App;
