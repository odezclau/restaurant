import React from "react";
import Navbar from "./components/layouts/navbar";
import TopMenu from "./components/layouts/topMenu";
import ContentBody from "./components/layouts/contentBody";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <TopMenu />
        <div>
          <ContentBody />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
