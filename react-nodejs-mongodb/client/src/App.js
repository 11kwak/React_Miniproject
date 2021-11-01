import React from "react";
import { Container } from 'react-bootstrap';
import Layout from "./layouts/Layout";


function App() {
  return (
    <Layout>
      <Container style={{ minHeight: "75vh" }}><img width="800px" src={require("./img/portfolio.jpg").default} ></img></Container>
    </Layout >
  );
}

export default App;
