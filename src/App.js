import React from "react";
import "./styles.css";

function Nav() {
  return (
    <div className="w-full shadow-lg bg-white">
      <div className="flex">
        <div className="p-2 bg-purple-400 text-white m-2">
          <a href="#menu1">Menu1</a>
        </div>
        <div className="p-2 bg-purple-400 text-white m-2">
          <a href="#menu2">Menu2</a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full h-20 border-t-2 border-blue-400 bg-white">
      <div className="w-full">Footer</div>
    </div>
  );
}

function ContentA() {
  return <div className="w-full h-48 bg-gray-400">ContentA</div>;
}

function ContentB() {
  return <div className="w-full h-48 bg-blue-400">ContentB</div>;
}
function ContentC() {
  return <div className="w-full h-48 bg-purple-400">ContentC</div>;
}

export default function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <div className="mt-4 mx-2">
          <ContentA />
          <ContentB />
          <ContentC />
        </div>
        <Footer />
      </div>
    </div>
  );
}