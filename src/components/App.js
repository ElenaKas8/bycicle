
import React from "react";
import Container from "./Container/Container";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Proposition from "../components/Proposition";
import Feedback from "./Feedback";
import Bikerental from "./Bikerental";
import Services from "./Services";

function App() {

let services = [
  {
    border: "1px solid #ffffff",
    title: "Годовое ТО",
    backgroundColor: "#22356F"
  },
  {
    border: "1px solid #ffffff",
    title: "Выравнивание колес",
    backgroundColor: "#0052C1"
  }
  , 
  {
    border: "1px solid #ffffff",
    title: "Настройка переключателей",
    backgroundColor: "#76B58B"
  }
  

]


  return (
    <div>
      <Container backgroundColor="#F4F9E2">
        <Header />
        <Hero />
      </Container>
      <Container backgroundColor="#62D0DF">
        <Proposition />
      </Container>
      <Container>
        <Feedback />
        <div style={{ display: "flex" }}>
          
      </div>
      {services.map((service) => (
      <Services key={service.id} title={service.title} border={service} backgroundColor= { service.backgroundColor}/>
    ))}

        <Bikerental />
      </Container>
    

   
    </div>
  );
}

export default App;
