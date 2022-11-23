import { Route, Routes } from "react-router-dom";
import { Home, LogIn, SignIn, KakaoLogin } from "./pages";
import { PublicRoute } from "./utilis";

function Router() {
  return (
    <Routes>
      <Route path="/"  element={<LogIn/>} exact />
      <Route path="/signin" element={<SignIn/>} exact />
      <Route path = "/home" element = {<PublicRoute  redirectTo={"/"}>
        <Home/>
      </PublicRoute>}/>
    </Routes>
  );
}

export default Router;
