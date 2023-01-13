import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage";
import List from "./Pages/List";
import Login from "./Pages/Login";
import NewItems from "./Pages/NewItems";
import Single from "./Pages/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userID" element={<Single />} />
              <Route path="newitems" element={<NewItems />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productsID" element={<Single />} />
              <Route path="newitems" element={<NewItems />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
