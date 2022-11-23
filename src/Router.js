import { Route, Routes } from "react-router-dom";
import { Home, LogIn, SignIn, KakaoLogin, Main } from "./pages";
import { PublicRoute } from "./utilis";

function Router() {
  return (
    <Routes>
      <Route path="/"  element={<LogIn/>} exact />
      <Route path="/signin" element={<SignIn/>} exact />
      <Route path = "/home" element = {<PublicRoute  redirectTo={"/"}>
        <Home/>
      </PublicRoute>}/>
      <Route path="/main"  element={<Main/>} exact />
    </Routes>
  );
}

export default Router;
