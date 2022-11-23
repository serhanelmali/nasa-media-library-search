import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import DetailView from "pages/DetailView";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detailed-view" element={<DetailView />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
