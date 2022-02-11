import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import React from "react";
{
  /* import the zodiac array */
}
import { zodiac } from "./data";
// import { render } from "react-dom";

// const name = "The Young One";
// const currentYear = new Date().getFullYear();

// function App() {
//   return (
//     <div className="App">
//       {/* import and use the Header. Main, and Footer components here */}
//       {/* the Header component needs a string passed in as the `name` prop */}
//       <Header name={name}></Header>
//       {/* the Footer component needs a year passed in as the `year` prop */}
//       <Footer year={currentYear}></Footer>
//       {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
//       <Main zodiac={zodiac} />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const name = 'The Young One'
    const currentYear = new Date().getFullYear()
    return (
      <div className="App">
        {/* import and use the Header. Main, and Footer components here */}
        {/* the Header component needs a string passed in as the `name` prop */}
        <Header name={name}></Header>
        {/* the Footer component needs a year passed in as the `year` prop */}
        <Footer year={currentYear}></Footer>
        {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
        <Main zodiac={zodiac} />
      </div>
    )
  }
}

export default App
