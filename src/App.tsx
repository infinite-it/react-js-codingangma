import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <DayList/>
                <Routes>
                    <Route path={"/"} element={<Day/>}></Route>
                    <Route path={"/day/:day"} element={<Day/>}></Route>
                    <Route path={"/create-word"} element={<CreateWord/>}></Route>
                    <Route path={"/create-day"} element={<CreateDay/>}></Route>
                    <Route path={"*"} element={<EmptyPage/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
