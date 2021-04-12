import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    const data = {
      sexo: "",
      man: "Hola compañero",
      woman: "Hola compañera",
      other: "Hola forastero",
    };

    const result = () => {
      switch (data.sexo) {
        case "man":
          return data.man;
        case "woman":
          return data.woman;
        default:
          return data.other;
      }
    };
    return (
      <>
        <h1>{result()}</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/210px-React-icon.svg.png"></img>
        <button onClick={() => console.log("Saludos desde React...")}>Hola!</button>
      </>
    );
  }
  render() {
    let helloWorld = React.createElement("h1", null, "Hello World");
    let img = React.createElement(
      "img",
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/210px-React-icon.svg.png" },
      null
    );
    let div = React.createElement("div", { key: "1" }, [helloWorld, img]);
    return div;
  }
}
render(<App />, document.getElementById("root"));
