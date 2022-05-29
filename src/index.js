import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import "./styles.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Today from "./components/Today";
import "react-loader-spinner";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import HabitsContext from "./contexts/HabitsContext";

export default function App() {

    const [user, setUser] = useState(
        {
            id:"",
            email:"",
            name:"",
            image:"",
            password:"",
            token:""
        }
    );

    const [habits, setHabits] =useState([]);

    return (
        <HabitsContext.Provider value={{habits, setHabits}}>
            <UserContext.Provider value={{user, setUser}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />
                        <Route path="/hoje" element={<Today />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </HabitsContext.Provider>
        
           
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
