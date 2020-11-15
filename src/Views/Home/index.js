import React from "react";
import Layout from "../../Components/Layout";
import { WrapperContainerHome } from "./styled";
import backImg from "../../Assets/home.jpg";

const Home = () => {
  return (
    <Layout>
      <WrapperContainerHome backurl={backImg} className="col"></WrapperContainerHome>
    </Layout>
  );
};
export default Home;
