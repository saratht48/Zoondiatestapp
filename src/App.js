import{BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Header from './components/Header'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Productlisting from './pages/Productlisting'
import { Logincontextprovider } from './context/Logincontext'
import Protectedroute from './hooks/Protectedroute'
function App() {
  return (
    <Logincontextprovider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Login/>}></Route>
        <Route path="/Dashboard" element={<Protectedroute><Dashboard/></Protectedroute>}></Route>
        <Route path="/Productlisting" element={ <Productlisting/>}></Route>
      </Routes>
    </Router>
    </Logincontextprovider>
  );
}

export default App;
