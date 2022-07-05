import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () =>{
  return(
    <div>
      <NavBar />
      <ItemCount />
      <ItemListContainer />
      
    </div>
  );
}

export default App