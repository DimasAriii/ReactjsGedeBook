import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "../App";
import Menu from "../menu";
import AboutUs from "../AboutUs";

export default function Routers (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  );
};