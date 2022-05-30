import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../contexts/UserContext";
import { useContext, useState } from "react";
import plusIcon from "./images/plusIcon.svg";
import styled from "styled-components";
import Delete from "./images/delete.svg";
import { buildStyles } from "react-circular-progressbar";

export default function Habits() {

    const [days, setDays] = useState([
        { day: "D", id: 0, selected: false },
        { day: "S", id: 1, selected: false },
        { day: "T", id: 2, selected: false },
        { day: "Q", id: 3, selected: false },
        { day: "Q", id: 4, selected: false },
        { day: "S", id: 5, selected: false },
        { day: "S", id: 6, selected: false },
    ]);

    const {user} = useContext(UserContext);

    const [habits, setHabits] = useState([]);

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    axios
        .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",requestHeader)
        .then(response => setHabits(response.data))

    return (
        <Container>
            <Div>
                <Box>
                    <h1>Meus hábitos</h1>
                    <Button><img src={plusIcon} alt="" /></Button>
                </Box>
                <ShowHabits habits={habits} days={days} />
            </Div>
            <Header />
            <Footer />
        </Container>
    );

}

 

    function Days({days, habits}) {
        
    
        return (
            <B>
                {days.map((day) => <div>{day.day}</div>)}
            </B>
        );
    }
        
    function ShowHabits({habits, days}) {
        if (habits.length === 0) {
            return (
                <EmptyMessage>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
                    começar a trackear!
                </EmptyMessage>
            );
        }
        return (
            habits.map((habit) => 
            <Habit>
                <Right>
                    <h1>{habit.name}</h1>
                    <Days days={days} habits={habits}/>   
                </Right>
                <img src={Delete} alt="" />

            </Habit>
            )
        );

    }  

const Container = styled.div`
    width: 90%;
    margin-top: 70px;
    font-family: 'Lexend Deca', sans-serif;
    padding-top: 30px;

`

const Box = styled.div`
    width: 85vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h1 {
        color:#126BA5;
        font-size: 23px;
    }

    button {
        color: #52B6FF;
        height: 35px;
        width: 40px;
    }
`

const Button = styled.button`
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
`

const Div = styled.div`

    padding-left: 20px;
`

const EmptyMessage = styled.h2`
    color: #666666;
`

const B = styled.div `
    display: flex;
    gap: 5px;
    display: flex;
    margin-bottom: 20px;
    & div {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 30px;
        width: 30px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.color};
    }

`
const Habit = styled.div`
    width: 85vw;
    height: 80px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    h1 {
        color: #666666;
        font-size: 20px;
        margin-bottom: 20px;
    }

    img {
        width: 13px;
        height: 15px;
    }
`
const Right = styled.div`

`
