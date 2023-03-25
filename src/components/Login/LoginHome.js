import React from "react";
import styled, { css } from "styled-components";

//Styles
const Container = styled.div`
    display: grid;
    grid-template-areas: "left right";
`;

const Section = styled.section`
    grid-area: "left";
    ${(props) =>
        props.left &&
        css`
            border: 2px solid red;
        `}

    ${(props) =>
        props.right &&
        css`
            grid-area: "right";
            border: 2px solid blue;
        `}
`;

function LoginHome() {
    return (
        <Container>
            <Section left>Image</Section>

            <Section right>
                <span>
                    Don't have an account? <span>Sign Up</span>
                </span>
                <input type={"text"} enterKeyHint={"Email"}></input>
                <input type={"password"} enterKeyHint={"Password"}></input>
            </Section>
        </Container>
    );
}

export default LoginHome;
