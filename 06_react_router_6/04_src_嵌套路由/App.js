import { NavLink,  useRoutes } from "react-router-dom";
import Header from "./components/Header";
// import About from "./pages/About";
// import Home from "./pages/Home";
import "./style.css";
import {routes} from "./routes"

function App() {
  //根据路由表生成路由规则
  const routesElement = useRoutes(routes)
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <hr />

      <div className="row">
        <div className="offset-md-2 col-md-2">
          <div className="list-group">
            {/* <a className="list-group-item active" href="/about">About</a>
            <a className="list-group-item" href="/home">Home</a> */}
            {/* 编写路由链接 */}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel">
            <div className="panel-body">
              {/* <!-- 指定组件的呈现位置 --> */}
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/home" />} />
              </Routes> */}
              {routesElement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
