import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import { White } from "../../assets/Colors"
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
    
`

function SkillsSection({ Skills }) {
    const tabs = ["Experience", "Software", "Language"]
    const [indexTab, setIndexTab] = useState(0)
    return (
        <SkillsStyle>
            <SectionTitle>My <strong>Skills</strong></SectionTitle>
            <Tab Tabs={tabs} Index={indexTab} setTab={setIndexTab}/>
            <frameSkillsStyle>

            </frameSkillsStyle>
        </SkillsStyle>
    )
}

export default SkillsSection