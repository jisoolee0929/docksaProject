import { Route, Routes } from "react-router-dom";
import { Home, LogIn, SignIn } from "./pages";
import { PublicRoute } from "./utilis";

function Router() {
  return (
    <Routes>
      <Route path="/"  element={<LogIn/>} exact />
      <Route path="/signin" element={<SignIn/>} exact />
      <PublicRoute path="/home" component={Home} exact />
    </Routes>
  );
}

export default Router;
