import Navigation from "../components/Navigation";
import HomeBanner from "../components/HomeBanner";
import Gallery from "../components/Gallery";
import "../styles/Home.css";

//?? Page d'accueil
const Home = () => {
  return (
    <main className="main">
        <Navigation></Navigation>
        <HomeBanner></HomeBanner>
        <Gallery></Gallery>
      

    </main>
  );
};

export default Home;