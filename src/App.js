import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const currentUser = true; // Replace this with actual user authentication logic
  /* 
  const users = [] == list of all users from local storage as a state
  register: => handlechange function which is listening for every keystroke then updating the local storage
  with the user information with each user as an object{username: "",password: "", email: "", image: "", 
    currentUser: boolean, key: , id: ;
  }.
  should also map over the current users to see if the username has already been taken.

  login function: => it will map over the users array to check if the user already exists if it does 
  return that object of the current user and redirect ot the home page
  else 
  make an alert


  const [items, setItems] = useState([]) - all the items in the homepage which will be objects and
  received from the local storage.

  write function => create an object for an item and adds the object in the item by waiting for the submit
  event then takes the values of the form and appends the items
  array then updates the local storage with the new array of items


  topbar search function =>
    filter the items object looking for the item with the tag or title matching the value of 
  the search input.
  will get the item with the matching value, get it's id and display/link it as the single page
  and display it
  if it is not found, it will return a not found message

  settings update function =>
    filter the users array and finds the current user 
    at the current user using the application,
    setcurrent user values to the changed values and updates the user array when the user clicks the update
    button.
  settings delete function => 
    filter the users array and finds the current user then pop the current user from the array.
    then update the local storage with the new array of users
    Return the person to the home page.
    ;
  */

  return (
    <Router>
      <Topbar />
      <Routes>
        {/* receave the items array of objects as a prop */}
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        {/* login will take an onClick prop containing the login function*/}
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        {/* receive the write function */}
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Navigate to="/login" />}
        />
        {/* receive update and delete functions */}
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Navigate to="/login" />}
        />
        <Route 
        path="/about"
        element = {<Sidebar />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
