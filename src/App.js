import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Todo from "./Todo";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
