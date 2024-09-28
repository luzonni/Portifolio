import PresentationSection from "../../components/PresentationSection"
import ProjectSection from "../../components/ProjectSection"
import SkillsSection from "../../components/SkillsSection"
import Skills from "../../assets/base/Skills.json"
import Projects from "../../assets/base/Projects.json"
import Growths from "../../assets/base/Growths.json"
import GrowthSection from "../../components/GrowthSection"


const Home = () => {
    return (
        //Hi!
        <>
            <PresentationSection />
            <SkillsSection Skills={Skills} />
            <ProjectSection Projects={Projects} />
            <GrowthSection Growths={Growths} />
        </>
    )
}

export default Home