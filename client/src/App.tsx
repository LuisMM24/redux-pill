import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

//router
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
