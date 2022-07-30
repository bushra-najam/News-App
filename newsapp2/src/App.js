import React from "react";
import News from "./components/News"
import NavBar from "./components/NavBar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 const pageSize = 9;
  return (
    <div>
        {<Router>
          <NavBar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={pageSize} counrty="us" category="general" />} />
              <Route exact path="/general" element={<News key="general" pageSize={pageSize} counrty="us" category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={pageSize} counrty="us" category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} counrty="us" category="entertainment" />} />
              <Route exact path="/healthscience" element={<News key="healthscience" pageSize={pageSize} counrty="us" category="healthscience" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} counrty="us" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} counrty="us" category="technology" />} />
            </Routes>
          </div>
  </Router>}
    </div>
  );
}

export default App;
