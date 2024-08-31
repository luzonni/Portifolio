import styled from "styled-components"
import AboutMeSection from "../../components/AboutMeSection"
import HobbySection from "../../components/HobbySection"
import Hobbies from "../../assets/base/Hobbies.json"

const AboutStyle = styled.main`
    
`

const AboutMe = () => {
    return (
        <AboutStyle>
            <AboutMeSection/>
            <HobbySection Hobbies={Hobbies}/>
        </AboutStyle>
    )
}

export default AboutMe