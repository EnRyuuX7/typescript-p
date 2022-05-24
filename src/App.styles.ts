import styled, { createGlobalStyle, css } from "styled-components";
//@ts-ignore
import BGImage from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`${css`
    html {
        height: 100%;
    }

    body {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: "Nunito";
        color: white;
    }
`}`;
