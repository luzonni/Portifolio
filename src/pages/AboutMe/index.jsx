import styled from "styled-components"
import AboutMeSection from "../../components/AboutMeSection"
import HobbySection from "../../components/HobbySection"
import Hobbies from "../../assets/base/Hobbies.json"
import StepsSection from "../../components/StepsSection"
import Steps from "../../assets/base/Steps.json"

const AboutStyle = styled.main`
    
`

const AboutMe = () => {
    return (
        <AboutStyle>
            <AboutMeSection/>
            <StepsSection Steps={Steps}/>
            <HobbySection Hobbies={Hobbies}/>
        </AboutStyle>
    )
}

export default AboutMe