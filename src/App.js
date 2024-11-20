import logo from "./logo.svg";
// import './App.css';
import ToDoFeature from "./features/ToDo";
import AlbumFeature from "./features/Album";
import Counter from "./components/Counter";
import ColorBox from "./components/ColorBox";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { useEffect } from "react";
import productApi from "./api/productApi";
import CounterFeature from "./features/Counter";

import styled from 'styled-components'
import Header from "components/Header";
import EmailConfirm from "features/ToDo/pages/Email/index";
const Title = styled.h1`
  text-align: center,
  font-weight: bold,
  color: ${(props) => props.color || 'green'}
`;


function App() {

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        _limit: 10 //params của axios
      }
      //const list = await productApi.getAll(params)

      
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header />
      <br/>
      {/* <Link to="/todos">Todos</Link>
      <Link to="/albums">Albums</Link> */}


      <Routes>  
        {/* Nested Routing */}
        <Route path="/todos/*" element={<ToDoFeature/>} />
        <Route path="/albums" element={<AlbumFeature/>} />
        <Route path="/" element={<CounterFeature/>}></Route>
        <Route path="/confirm-email" element={<EmailConfirm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>


      Footer
    </div>
  );
}

export default App;
