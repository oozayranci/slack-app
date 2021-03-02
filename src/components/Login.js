import React from 'react'
import styled from "styled-components";

function Login() {
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt=""/>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div``;
const LoginInnerContainer = styled.div`
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
`;

