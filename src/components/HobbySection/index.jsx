import styled from "styled-components";
import { MdKeyboardArrowLeft as LeftArrow, MdKeyboardArrowRight as RightArrow} from "react-icons/md";
import SectionTitle from "../SectionTitle";
import { ColorOne, ColorTwo, Gray, White } from "../../assets/Colors";
import { useState } from "react";
import Tab from "../Tab";


const HobbyStyle = styled.section`
    width: 70%;
    margin: 4rem auto 0 auto;
    .container__hobbies {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 1rem;
        padding: 2rem;
    }
    .changeButton {
        background: transparent;
        border: none;
        color: ${ColorOne};
        transition: 120ms;
    }

    .changeButton:hover {
        color: ${White};
    }

    .hobby_tab {
        margin-top: 1rem;
        display: none;
    }

    @media screen and (max-width: 1080px) {
        width: 90%;
        margin: 2rem auto 0 auto;
        .container__hobbies {
            padding: 2rem 0;
        }
        .changeButton {
            display: none;
        }
        .hobby_tab {
            display: block;
        }
    }
`

const CardHobby = styled.div`
    width: 40%;
    background-color: ${ColorTwo};
    padding: 1rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: 1s;
    align-items: baseline;
    .card__title {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    h1 {
        width: 1.75rem;
        height: 1.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${White};
        font-size: 1.5rem;
        background-color: ${ColorOne};
        padding: 0.5rem;
        border-radius: 25%;
    }
    h2 {
        font-size: 1.5rem;
        color: ${White};
    }
    p {
        width: 90%;
        margin: 0 auto;
        color: ${Gray};
        size: 4rem;
    }
    @media screen and (max-width: 1080px) {
        width: 90%;
        display: flex;
    }
`

const HobbySection = ({Hobbies}) => {
    const Tabs = Hobbies.map(hobby => hobby.Title)
    const [indexHobby, setIndexHobby] = useState(0)
    const changeHobby = (newIndex) => {
        if(newIndex > Hobbies.length-1) {
            newIndex = 0
        }else if(newIndex < 0) {
            newIndex = Hobbies.length-1
        }
        setIndexHobby(newIndex)
    }
    return (
        <HobbyStyle>
            <SectionTitle>My <strong>Hobbies</strong></SectionTitle>
            <div className="hobby_tab">
                <Tab Tabs={Tabs} setTab={setIndexHobby} Index={indexHobby}/>
            </div>
            <div className="container__hobbies">
                <button className="changeButton" onClick={() => changeHobby(indexHobby-1)}><LeftArrow size="4rem"/></button>
                <CardHobby key={indexHobby}>
                    <div className="card__title">
                        <h1>{indexHobby+1}°</h1>
                        <h2>{Hobbies[indexHobby].Title}</h2>
                    </div>
                    {Hobbies[indexHobby].Content.map(text => <p>{text}</p>)}
                </CardHobby>
                <button className="changeButton" onClick={() => changeHobby(indexHobby+1)}><RightArrow size="4rem"/></button>
            </div>
        </HobbyStyle>
    )
}

export default HobbySection