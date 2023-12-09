import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
