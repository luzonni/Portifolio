import PresentationSection from "../../components/PresentationSection"
import ProjectSection from "../../components/ProjectSection"
import SkillsSection from "../../components/SkillsSection"
import Skills from "./Skills.json"
import Projects from "./Projects.json"
import Growths from "./Growths.json"
import GrowthSection from "../../components/GrowthSection"


const Home = () => {
    return (
        <>
            <PresentationSection />
            <SkillsSection Skills={Skills} />
            <ProjectSection Projects={Projects}/>
            <GrowthSection Growths={Growths}/>
        </>
    )
}

export default Home