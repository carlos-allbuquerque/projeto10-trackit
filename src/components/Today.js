import styledComponents from "styled-components";
import Header from "./Header"
import Footer from "./Footer";
import styled from "styled-components";
import "dayjs/locale/pt-br";
import UserContext from "../contexts/UserContext";
import HabitsContext from "../contexts/HabitsContext";
import axios from "axios";
import { useContext, useEffect } from "react";

export default function Today() {

    console.log("cheguei");

    const {user} = useContext(UserContext);
    const {habits, setHabits} = useContext(HabitsContext);

    const dayjs = require("dayjs");
    dayjs.locale("pt-br");

    const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(() => {
        axios
            .get(`${URL}today`, requestHeader) 
            .then((response => setHabits(response.data)))
    }, []);
    
    return (
        <Box>
            < Header />
            <Container>
                <Title>{dayjs().format("dddd - DD/MM").replace("-feira", "")}</Title>
            </Container>
            <Footer />
        </Box>
    );
}

const Box = styled.div`
    background-color: #E5E5E5;
    height: 100%;

`

const Container = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    padding: 0 20px 0 20px;
    margin-top: 70px;
    padding-top: 30px;
`

const Title = styled.h2`
    color: #126BA5;
    font-size: 23px;

`
const ButtonAdd = styled.button`
    height: 35px;
    width: 40px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;

`