import { Route, Routes } from "react-router-dom";
import { Home, LogIn, SignIn, KakaoLogin, Wait, RoomDetail, Main, MyPage, CreateRoom} from "./pages";
import { PublicRoute } from "./utilis";

function Router() {
  return (
    <Routes>
      <Route path="/" element= {<Wait/>} exact />
      <Route path="/login"  element={<LogIn/>} exact />
      <Route path="/signin" element={<SignIn/>} exact />
      <Route path="room">
        <Route path=":id" element={<RoomDetail />} />
      </Route>
      <Route path = "/home" element = {<PublicRoute  redirectTo={"/"}>
        <Home/>
      </PublicRoute>}/>
      <Route path="/main"  element={<Main/>} exact />
      <Route path="/mypage"  element={<MyPage/>} exact />
      <Route path="/create"  element={<CreateRoom/>} exact />
    </Routes>
  );
}

export default Router;
