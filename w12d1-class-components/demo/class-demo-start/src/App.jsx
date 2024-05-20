// import Time from "./components/Time";
// import { useState } from "react";

import ClassTime from "./components/Time";

import React from "react";

class ClassApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTime: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState(oldState => ({ showTime: !oldState.showTime }));
  }

  render() {
    return (
      <>
        <h1> Hello from App </h1>

        <button onClick={this.handleClick}>Toggle Time!</button>

        {this.state.showTime && <ClassTime />}
      </>
    )
  }
}

export default ClassApp;

// function FunctionalApp() {
//   const [showTime, setShowTime] = useState(true);

  // const handleClick = e => {
  //   e.preventDefault();

  //   setShowTime(oldShowTime => (!oldShowTime));
  //   // setShowTime(!showTime);
  // }

//   return (
//     <>
//       <h1> Hello from App </h1>

//       <button onClick={handleClick}>Toggle Time!</button>

//       {showTime && <Time />}
//     </>
//   )
// }

// export default FunctionalApp;
