import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import { ColorTwo, Gray, White } from "../../assets/Colors"
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

    p {
        color: ${Gray};
        text-align: center;
    }

    hr {
        border: 1px solid ${Gray};
    }

    @media screen and (max-width: 1080px) {
        font-size: 1rem;
        padding: 1rem 2rem;
    }
`

function SkillsSection({ Skills }) {
    const tabs = ["Experience", "Software", "Language"]
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
                        </CardSkillStyle>
                    )
                })}
            </FrameSkillsStyle>
        </SkillsStyle>
    )
}

export default SkillsSection