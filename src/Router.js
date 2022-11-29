import { Route, Routes } from "react-router-dom";
import { Home, LogIn, SignIn, KakaoLogin, Wait, RoomDetail } from "./pages";
import { PublicRoute } from "./utilis";

function Router() {
  return (
    <Routes>
      <Route path="/" element= {<Wait/>} exact />
      <Route path="/login"  element={<LogIn/>} exact />
      <Route path="/signin" element={<SignIn/>} exact />
      <Route path="room-detail">
        <Route path=":id" element={<RoomDetail />} />
      </Route>
      <Route path = "/home" element = {<PublicRoute  redirectTo={"/"}>
        <Home/>
      </PublicRoute>}/>
    </Routes>
  );
}

export default Router;
