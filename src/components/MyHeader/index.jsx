import styled from "styled-components"
import { ColorOne, ColorThree, ColorHole, White } from "../../assets/Colors"
import MyLink from "./MyLink"
import { useState } from "react"

const StyleMenu = styled.header`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 1.5rem 15rem;
    background: ${ColorHole};
    background: linear-gradient(0deg, ${ColorHole} 0%, ${ColorThree} 100%);

    @media screen and (max-width: 1080px) { 
        padding: 0.5rem 0.5rem;
    }
`

const Logo = styled.h1`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 3rem;
    color: transparent;
    transition: 0.5s;
    h1 {
        color: ${ColorOne};
        font-size: 4rem;
        font-weight: 700;
        transform: rotate(-0.11turn);
        cursor: default;
        transition: 0.5s;
    }
    &:hover {
        gap: 0;
        color: ${White};
        h1 {
            transform: rotate(0turn);
            border: 0;
        }
    }

    @media screen and (max-width: 1080px) {
        width: 100%;
        color: ${White};
        gap: 0;
        font-size: 2rem;
        h1 {
            font-size: 3rem;
            transform: rotate(0);
        }
    }
`

const Navegation = styled.nav`
    margin: auto 0;
    .navegation__list {
        display: flex;
        gap: 5rem;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1080px){
        .navegation__list {
            display: none;
        }
        .burguer__list {
            display: flex;
        }
    }


`

const BurguerStyle = styled.div`
    display: none;
    img {
        width: 2.5rem;
    }
    .burguer__list {
        display: ${props => {
            return props.show ? "flex" : "none"
        }};
        flex-direction: column;
        position: absolute;
        right: 0;
        left: 0;
        width: auto;
        background-color: ${ColorHole};
        padding: 1rem;
        border-radius: 10px;
        gap: 1rem;
        align-items: center;
    }
    .burguer__button {
        background-color: transparent;
        border: none;
    }
    @media screen and (max-width: 1080px) {
        display: block;
    }
`

const MyHeader = () => {
    var [isShow, setShow] = useState(false)
    const showing = () => {
        setShow(!isShow)
    }
    return (<>
        <StyleMenu>
            <Logo><h1>Z</h1>onzini</Logo>
            <Navegation>
                <BurguerStyle show={isShow}>
                    <button className="burguer__button" onClick={showing}><img src="./icons/burguer.svg" alt="burguer" /></button>
                    <div className="burguer__list" onClick={showing} >
                        <MyLink to="/">Home</MyLink>
                        <MyLink to="/AboutMe">Sobre mim</MyLink>
                    </div>
                </BurguerStyle>
                <ul className="navegation__list">
                    <li className="list__item"><MyLink to="/">Home</MyLink></li>
                    <li className="list__item"><MyLink to="/AboutMe">About Me</MyLink></li>
                </ul>
            </Navegation>
        </StyleMenu>
    </>)
}

export default MyHeader