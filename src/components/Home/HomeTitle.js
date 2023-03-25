import React from "react";
import styled from "styled-components";

// styles

const Container = styled.div`
    column-width: auto;
    display: flex;
    margin-top: 2em;
    justify-content: space-around;
`;

const Title = styled.span`
    margin-left: 2em;
    text-align: center;
    font-family: monospace;
    font-size: 6em;
`;

const SignUp = styled.span`
    font-size: 3em;
    font-weight: 100;
    padding-top: 0.3em;
    text-align: right;
`;

const Button = styled.span`
    margin-top: 15px;
    justify-self: center;
    padding-top: 0.4em;
`;

// Functionality

function HomeTitle() {
    return (
        <Container>
            <Button>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </Button>
            <Title>Gnsn Alvero</Title>
            <SignUp>Sign Up</SignUp>
        </Container>
    );
}

export default HomeTitle;
