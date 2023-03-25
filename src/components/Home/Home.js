import React from "react";
import HomeTitle from "./HomeTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Styles
const BodyText = styled.div`
    text-align: center;
    padding: 4em 5em;
    padding-bottom: 2em;
    font-size: 3em;
    font-weight: 100;
    color: gray;
`;

const Button = styled.button`
    justify-self: center;
    height: 3em;
    width: 11em;
    font-size: 2em;
    background: transparent;
`;

const Logo = styled.span`
    font-family: monospace;
    font-size: 18em;
    font-weight: 400;
    margin-top: 0.3em;
    justify-self: center;
    font-style: italic;
`;

//Functionality

function Home() {
    return (
        <div style={{ display: "grid" }}>
            <HomeTitle />
            <BodyText>
                All your beauty solution in one place. Join the new world of
                beauty & fashion.
            </BodyText>
            <Link
                to={"/login"}
                style={{ justifyContent: "center", justifySelf: "center" }}
            >
                <Button>Join Us</Button>
            </Link>

            <Logo>Gnsn Alvero</Logo>
        </div>
    );
}
export default Home;
