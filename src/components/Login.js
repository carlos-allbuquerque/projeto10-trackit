import logo from "./images/logo.svg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Loading from "./Loading";
import UserContext from "../contexts/UserContext";
import axios from "axios";



export default function Login() {

    const [data, setData] = useState({});

    const {user, setUser} = useContext(UserContext);

    const [userData, setUserData] = useState(
        {
            email:"",
            password:"",
        });
    
    const [isLoading, setIsLoading] = useState(false);
    const [buttonValue, setButtonValue] = useState("Entrar");

    let navigate = useNavigate();

    function post() {
        setButtonValue(<Loading />);
        setIsLoading(true);
        
        let promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", userData);

        promise.catch(() => {alert("Dados inválidos!")});
        

        promise.then(response => {
            setUser(response.data)
            navigate("/hoje")
        })
        .catch(() => {alert("Dados inválidos!")})

    }



    return(
        <Container>
            <Logo src={logo} alt="" />
            <Input
                placeholder="email" type="email" value={userData.email} onChange={(event) => setUserData({...userData, email: event.target.value})}>

            </Input>

            <Input
                placeholder="senha" type="password" value={userData.password} onChange={(event) => setUserData({...userData, password: event.target.value})}>

            </Input>
            <Button onClick={post} disabled={isLoading} >{buttonValue}</Button>
            
            <Link to="/cadastro"><Text>Não tem uma conta? Cadastre-se!</Text></Link>
            
        </Container>
        
    );
} 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Logo = styled.img`
    height: 250px;
    width: 200px;
    margin-bottom: 30px;
`

const Button = styled.button`
    width: 308px;
    height: 45px;
    background-color: #52B6FF;
    font-size: 20px;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.h2`
    font-size: 14px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    margin-top: 20px;
`

const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 2px solid #D5D5D5;
    font-size: 20px;
    border-radius: 5px;
    margin-bottom: 5px;

    &:placeholder-shown {
        color: #DBDBDB;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        
    }

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`