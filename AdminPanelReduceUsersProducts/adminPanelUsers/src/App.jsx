import "./App.css";
import { useReducer } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home/Home";
import Admin from "./components/Pages/Admin/Admin";
import Post from "./components/Pages/Post/Post";
import Edit from "./components/Pages/Edit/Edit";
import reducer from "./components/Reducer/reducer";
import Users from "./components/Pages/Users/Users";
import Products from "./components/Pages/Products/Products";
import Postt from "./components/Pages/Postt/Postt";
import EditUsers from "./components/Pages/EditUsers/EditUsers";
import Login from "./components/Pages/Login/Login";
import NoPage from "./components/Pages/NoPage/NoPage";
import Register from "./components/Pages/Register/Register";
import PostUser from "./components/Pages/PostUser/PostUser";
import EditAll from "./components/Pages/EditAll/EditAll";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    filteredProd: [],
    users:[],
    filteredUsers:[]
  });

  const isLogin = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLogin ? <Layout /> : <Login />}>
            <Route index element={<Home state={state} dispatch={dispatch} />} />
            <Route
              path="users"
              element={<Users state={state} dispatch={dispatch} />}
            />
            <Route
              path="products"
              element={<Products state={state} dispatch={dispatch} />}
            />
            <Route path="postt" element={<Postt />} />
            <Route path="editall" element={<EditAll />} />
            <Route path="postuser" element={<PostUser />} />
            <Route path="editusers" element={<EditUsers />} />
            <Route path="edit" element={<Edit />} />
            <Route
              path="admin"
              element={<Admin state={state} dispatch={dispatch} />}
            />
            <Route path="post" element={<Post />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          {/* <Route path="login" element={isLogin ? <NoPage /> : <Login />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
