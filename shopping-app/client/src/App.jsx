import UserLayout from "./pages/UserLayout";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemStore from "./components/ItemStore";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<ItemStore />}></Route>

            <Route path="/mycart" element={<h1>My Cart</h1>}></Route>
            <Route path="/myorder" element={<h1>My Order</h1>}></Route>
            <Route path="/settings" element={<h1>Settings</h1>}></Route>
            <Route path="/myprofile" element={<h1>My Profile</h1>}></Route>
            <Route path="/logout" element={<h1>Logout</h1>}></Route>
            <Route path="*" element={<h1>Error Page</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
