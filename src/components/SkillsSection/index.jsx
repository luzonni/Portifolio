import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import { ColorOne, ColorTwo, Gray, White } from "../../assets/Colors"
import { useState } from "react"
import Tab from "./Tab"

const SkillsStyle = styled.section`
    color: ${White};
    width: 80%;
    margin: 4rem auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    box-sizing: border-box;

    @media screen and (max-width: 1080px) {
        width: 90%;
    }
`
const FrameSkillsStyle = styled.div`
    display: flex;
    padding: 2rem 4rem;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 1080px) {
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
    }
`

const CardSkillStyle = styled.div`
    background: ${ColorTwo};
    padding: 1rem 2rem;
    border-radius: 6px;
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: ${Gray};
        text-align: center;
    }

    hr {
        width: 100%;
        border: 1px solid ${Gray};
    }

    @media screen and (max-width: 1080px) {
        font-size: 1rem;
        padding: 1rem 2rem;
    }
`

const LinkedButton = styled.a`
    font-size: 1rem;
    margin-top: 1rem;
    background-color: ${ColorOne};
    color: ${White};
    text-decoration: none;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    transition: 120ms;

    &:hover {
        color: ${ColorOne};
        background-color: ${White};
    }
`

function SkillsSection({ Skills }) {
    const tabs = ["Experiences", "Software", "Languages", "Frameworks", "Libraries"]
    const [indexTab, setIndexTab] = useState(0)
    return (
        <SkillsStyle>
            <SectionTitle>My <strong>Skills</strong></SectionTitle>
            <Tab Tabs={tabs} Index={indexTab} setTab={setIndexTab}/>
            <FrameSkillsStyle>
                {Skills[indexTab].map(skill => {
                    return (
                        <CardSkillStyle>
                            <h1>{skill.Title}</h1>
                            <hr />
                            <p>{skill.Period}</p>
                            {skill.Url && 
                                <LinkedButton href={skill.Url} target="_blank">Veja mais</LinkedButton>
                            }
                        </CardSkillStyle>
                    )
                })}
            </FrameSkillsStyle>
        </SkillsStyle>
    )
}

export default SkillsSection