import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import { ColorTwo, White } from "../../assets/Colors"
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
const frameSkillsStyle = styled.div`
    display: flex;
    padding: 2rem 4rem;
`

const cardSkillStyle = styled.div`
    background: ${ColorTwo};
    width: 100%;
`

function SkillsSection({ Skills }) {
    const tabs = ["Experience", "Software", "Language"]
    const [indexTab, setIndexTab] = useState(0)
    return (
        <SkillsStyle>
            <SectionTitle>My <strong>Skills</strong></SectionTitle>
            <Tab Tabs={tabs} Index={indexTab} setTab={setIndexTab}/>
            <frameSkillsStyle>
                {Skills.map(skill => {
                    if(skill.Type.toLowerCase() === tabs[indexTab].toLowerCase()) {
                        return (
                            <cardSkillStyle>{skill.Title} - {skill.Period}</cardSkillStyle>
                        )
                    }
                })}
            </frameSkillsStyle>
        </SkillsStyle>
    )
}

export default SkillsSection