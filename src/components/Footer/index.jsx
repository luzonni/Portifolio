import styled from "styled-components"
import { ColorOne, White } from "../../assets/Colors"
import AppDock from "../AppDock"

const FooterStyle = styled.footer`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    padding: 2rem;
    background-color: ${ColorOne};
    color: ${White};
    justify-content: center;
    font-size: 1.25rem;
    strong {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .social {
        margin-top: 4rem;
        width: 40%;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
    }
    h3 {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        font-size: 1rem;
        text-align: center;
        strong {
            font-size: 1rem;
        }
        .social {
            margin-top: 1rem;
            width: 100%;
            justify-content: center;
            flex-direction: column;
        }

        h3 {
            font-size: 1rem;
        }
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <h1>By <strong>Lucas Zonzini Lisboa</strong> with React</h1>
            <AppDock />
            <h3>© 2024</h3>
        </FooterStyle>
    )
}

export default Footer