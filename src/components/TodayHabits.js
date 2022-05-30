import { useContext } from "react";
import styled from "styled-components";
import check from "./images/check.svg";
import axios from "axios";
import UserContext from "../contexts/UserContext";

function Habit({
    id,
    name, 
    done,
    currentSequence, 
    highestSequence
}) {
    const {user} = useContext(UserContext);

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    return (
        <Container>
            <Right>
                <h2>{name}</h2>
                <h4>{`Sequencia atual: ${currentSequence} dias`}</h4>
                <h4>{`Seu recorde: ${highestSequence} dias`}</h4>   
            </Right>
            <Button onClick={() => checkHabit(id, requestHeader)}><img src={check} alt="" /></Button>
        </Container>
    )

}

export default function TodayHabits({habits}) {

    return (
        <Box>
            {habits.map((habit, index) => 
                <Habit id={habit.id} name={habit.name} done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} key={index}></Habit>
            )}
        </Box>
    );
}

function checkHabit(id, requestHeader) {
    axios
        .get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, requestHeader)
        
}

const Box = styled.ul`
`

const Container = styled.li`
    width: 90%;
    height: 70px;
    border-radius: 5px;
    background-color: #FFFFFF;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    & h2 {
        margin-bottom: 10px;
        font-size: 20px;
        color: #666666;
        margin-bottom: 5px;
    }

    & h4 {
        font-size: 13px;
        color: #666666;
        margin-top: 10px;
    }
`


const Right = styled.div`
`

const Button = styled.button`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`