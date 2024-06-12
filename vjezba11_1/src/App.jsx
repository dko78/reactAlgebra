import UserList from "./Components/UserList";
import UserAdd from "./Components/UserAdd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserEdit from "./Components/UserEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<UserAdd />} />
        <Route path="/edit-user/:id" element={<UserEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
