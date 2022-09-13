import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Page() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
