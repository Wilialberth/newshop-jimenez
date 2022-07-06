import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () =>{
  return(
    <div>
      <NavBar />
      <ItemCount />
      <ItemListContainer />
      <ItemDetailContainer />
      
    </div>
  );
}

export default App