import styled from "styled-components"
import { ColorOne, White } from "../../assets/Colors"

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

const SocialStyle = styled.span`
    display: flex;
    align-items: center;
    gap: .5rem;
    img {
        width: 3rem;
    }
    a {
        color: ${White};
        text-decoration: none;
        font-size: 1.5rem;
    }
    @media screen and (max-width: 1080px) {
        justify-content: center;
        img {
            width: 2rem;
        }
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <h1>By <strong>Lucas Zonzini Lisboa</strong> with React</h1>
            <div className="social">
                <SocialStyle><img src="./icons/instagram_icon.svg" alt="" /><a href="https://www.instagram.com/lucaszonzini_/" target="_blank">@lucaszonzini_</a></SocialStyle>
                <SocialStyle><img src="./imgs/github_icon.png" alt="" /><a href="https://github.com/luzonni" target="_blank">luzonni</a></SocialStyle>
            </div>
            <h3>© 2024</h3>
        </FooterStyle>
    )
}

export default Footer