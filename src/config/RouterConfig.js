import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import routes from "../routes/Routes";
const RouterConfig = () => {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, idx) => {
            return (
              <>
                <Route path={route.path} element={route.component} key={idx} />;
              </>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};
export default RouterConfig;
