import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Historic() {
    return (
        <Container>
            <Header />
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o seu histórico de habitos aqui!</h2>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    margin-top: 70px;
    font-family: 'Lexend Deca', sans-serif;
    padding-top: 30px;

    h1 {
            color:#126BA5;
            font-size: 23px;
            margin-left:20px;
            margin-bottom: 30px;
        }

    h2 {
        margin-left: 20px;
        color: #666666;
        font-size: 19px;
    }
`