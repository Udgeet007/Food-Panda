import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import { useState } from "react-router-dom";
import "./Home.css";


const Home = () => {

  const [category, setCategory] = useState("All");

  return <div>
    <Header />
    <ExploreMenu category={category} setCategory={setCategory}/>
  </div>;
};
export default Home;
