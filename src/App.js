import React, {Component} from "react";
import TodoScreen from "./components/TodoScreen"
class App extends Component {

  render() {
      return (
          <div className={`main`}>
              <TodoScreen />
          </div>
      );
  }
}

export default App;
