import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import TrackIt from "./images/TrackIt.svg"


export default function Header() {
    const {user} = useContext(UserContext);

    return (
        <Container>
            <Image src={TrackIt} alt="" />
            <ProfilePicture src={user.image} alt="" />
        </Container>
        
    );
}

const Container = styled.div`
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;

`
const Image = styled.img`
    height: 49px;
    width: 97px;
    margin-left: 20px;
`

const ProfilePicture = styled.img`
    height: 51px;
    width: 51px;    
    border-radius:30px;
    margin-right: 20px;
`