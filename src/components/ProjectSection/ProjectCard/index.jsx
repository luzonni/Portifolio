import styled from "styled-components"
import { ColorOne, ColorThree, ColorTwo, Font_Two, Font_One } from "../../../assets/Colors"
import { Link } from "react-router-dom"

const CardStyle = styled.div`
    background: ${ColorTwo};
    width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    color: ${Font_One};
    border-radius: 12px;

    img {
        width: 100%;
        border-radius: 10px;
        transition: 120ms;
    }

    p {
        padding: 0 1rem;
        color: ${Font_Two};
    }

    hr {
        width: 100%;
        margin: 0;
        border-color: ${Font_Two};
    }

    .link {
        color: ${Font_One};
        padding: 1rem 1.5rem;
        color: ${Font_One};
        font-size: 1.5rem;
        text-decoration: none;
        background-color: ${ColorOne};
        border-radius: 1rem;
        font-weight: 700;
        text-align: center;
        transition: 250ms;
        margin-top: auto;
    }

    .link:hover {
        color: ${ColorOne};
        background-color: ${Font_One};
    }

    @media screen and (max-width: 1080px) {
        .link {
            font-size: 1rem;
            padding: 0.75rem;
            border-radius: 10px;
        }
        p {
            font-size: 1rem;
        }
    }

`

const Title = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-size: 1.5rem;
    }
    .tools {
        display: flex;
        gap: 1rem;
    }

    .tools img {
        width: 2rem;
    }

    @media screen and (max-width: 1080px) {
    
        h1 {
            font-size: 1.25rem;
        }
        .tools img {
            width: 1.5rem;
        }
    }

`

const PictureStyle = styled.div`
    position: relative;
    box-sizing: border-box;
    transition: 250ms;
    
    .thumb {
        width: 100%;
        box-sizing: border-box;
        height: 10rem;
        object-fit: cover;
    }

    .buttons {
        display: none;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        justify-content: center;
        bottom: 1px;
    }

    .buttons img {
        width: 6rem;
    }

    &:hover .buttons {
        display: flex;
    }

    &:hover .thumb {
        filter: brightness(0.25);
    }

`

const ProjectCard = ({Name, Thumb, Icons, Texts, URL}) => {
    return (
        <CardStyle>
            <PictureStyle>
                <img className="thumb" src={Thumb} alt="Thumb do Wanderer project" />
                <a className="buttons" href={URL} target="_blank"><img src="./imgs/github_icon.png" alt="GitHub Icon" /></a>
            </PictureStyle>
            <Title>
                <h1>{Name}</h1>
                <div className="tools">
                {Icons.map((icon, index) => {
                    return (
                        <img key={"pci-"+index} src={icon} alt="icon"/>
                    )
                })}
                </div>
            </Title>
            <hr />
            {Texts.map((text, index) => {
                return (<p key={"pct-"+index} >{text}</p>)
            })}
            <Link className="link" to={`/Project/${Name}`}>Saiba mais</Link>
        </CardStyle>
    )
}

export default ProjectCard