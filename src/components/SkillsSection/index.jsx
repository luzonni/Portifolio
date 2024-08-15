import styled from "styled-components"
import { ColorOne, White } from "../../assets/Colors"
import SkillsItem from "./SkillsItem"
import SectionTitle from "../SectionTitle"

const SkillsStyle = styled.section`
    color: ${White};
    width: 80%;
    margin: 4rem auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const SkillsList = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1080px) {
        width: 20rem;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 1rem 0;
        gap: 3rem;
    }
`

const SkillsSection = ({Skills}) => {
    return (
        <SkillsStyle>
            <SectionTitle Text="My " Strong="Skills"/>
            <SkillsList>
                {Skills.map( skill => {
                    return (<SkillsItem name={skill.Name} percent={skill.Percent}/>)
                })}
            </SkillsList>
        </SkillsStyle>
    )
}

export default SkillsSection