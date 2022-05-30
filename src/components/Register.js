import axios from "axios";
import logo from "./images/logo.svg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";

    
export default function Register() {

    const {user, setUser} = useContext(UserContext);
    const [userData, setUserData] = useState(
        {
            email:"",
            name:"",
            password:"",
            image:""
        });

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    let navigate = useNavigate();

    function Post() {
        let promise = axios.post (URL, userData);
        promise.catch(() => alert("não foi possível criar uma conta com os dados fornecidos"));
        promise.then(() => navigate("/"));
        promise.then(() => setUser({...user, image: userData.image}))
    }

    return (
        <Container>
            <img src={logo} alt="" />
            <Input
                placeholder="email" type="email" value={userData.email} onChange={(event) => setUserData({...userData, email: event.target.value})}>

            </Input>
            <Input
                placeholder="senha" type="password" value={userData.password} onChange={(event) => setUserData({...userData, password: event.target.value})}>

            </Input>

            <Input
                placeholder="nome" type="text" value={userData.name} onChange={(event) => setUserData({...userData, name: event.target.value})}>

            </Input>

            <Input
                placeholder="foto" type="url" value={userData.image} onChange={(event) => setUserData({...userData, image: event.target.value})}>

            </Input>
            
            <Button onClick={Post}>Cadastrar</Button>
            <Link to="/"><Text>Já tem uma conta? Faça login!</Text></Link>
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