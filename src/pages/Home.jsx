import Navigation from "../components/Navigation";
import HomeBanner from "../components/HomeBanner";
import "../styles/Home.css";


const Home = () => {
  return (
    <main className="main">
        <Navigation></Navigation>
        <HomeBanner></HomeBanner>
      

    </main>
  );
};

export default Home;