import styledComponents from "styled-components";
import Header from "./Header"
import Footer from "./Footer";
import styled from "styled-components";
import "dayjs/locale/pt-br";
import UserContext from "../contexts/UserContext";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TodayHabits from "./TodayHabits";

export default function Today() {

    const {user} = useContext(UserContext);
    const [habits, setHabits] = useState([]);

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
                <h3>Nenhum hábito completo ainda</h3>
                <TodayHabits habits={habits}/>
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

    & h3 {
        color: #BABABA;
        font-size: 18px;
        margin-bottom: 40px;
    }
`

const Title = styled.h2`
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 5px;

`
const ButtonAdd = styled.button`
    height: 35px;
    width: 40px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;

`