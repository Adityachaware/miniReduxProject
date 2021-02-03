import React from "react";
import "./App.css";
import BookContainer from "./components/BookContainer";
import { Provider } from "react-redux";
import Store from "./Redux/Store"
import HookBookContainer from "./components/HookBookContainer";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BookContainer></BookContainer>
        <HookBookContainer></HookBookContainer>
      </div>
    </Provider>
  );
}

export default App;
