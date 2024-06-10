import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./context/GithubContext";

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <Header />
        <main className="flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </GithubProvider>
  );
};

export default App;
