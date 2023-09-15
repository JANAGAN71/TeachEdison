import TopNavBar from "./components/top_navbar/topnav"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./components/home/home"
import Filter from "./components/serach_filter/filter"
import ShowArticle from "./components/show_article/show"
import Create_Article from './components/create/create'
import SettingsPage from "./components/settings/settings"
import Login from "./components/login/login"
import Register from "./components/register/register"
import About from "./components/about/about"
import Content from "./components/article_content/art_cont.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About /> }/>
          <Route path="/show" element={<ShowArticle/>}/>
          <Route path="/create" element={<Create_Article /> }/>
          <Route path="/settings" element={<SettingsPage /> }/>
          <Route path="/login" element={<Login /> }/>
          <Route path="/register" element={<Register /> }/>
        </Routes>
      </div>
    </Router>
    // <>
    // <Content />
    // </>
  );
}

{/* <TopNavBar /> 
<Home /> 
<ShowArticle /> 
<Create_Article /> 
<SettingsPage /> 
<Login /> 
<Register /> 
<About /> */}

export default App;
