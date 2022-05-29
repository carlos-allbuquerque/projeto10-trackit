import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
    const percentage = 55;

    return (
        <Container>
            <Link to="/habitos">
                <Option>Hábitos</Option>
            </Link>
            <Box>
                <CircularProgressbar value={percentage} />
                <h3>Hoje</h3>
            </Box>   
            <Link to ="/historico">
                <Option>Histórico</Option>
            </Link>

        </Container>
    
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-family: 'Lexend Deca', sans-serif;
    
    .CircularProgressbar {
    padding: 4px;
    }
    .CircularProgressbar-path {
        stroke: #fff;
    }
    .CircularProgressbar-trail {
        stroke: #52b6ff;
    }
    .CircularProgressbar-background {
        stroke: #52b6ff;
    }

    h3 {
        position: absolute;
        font-size: 18px;
    }
`

const Option = styled.h2`
    font-size: 18px;
    color: #52B6FF;
    font-style: none;

`

const Box = styled.div`
    height: 90px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    background-color:  #52B6FF;
    border-radius: 50%;
    color: #FFFFFF;
    position: relative;
`
