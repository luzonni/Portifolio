import styled from "styled-components"
import { ColorHole, ColorOne, White } from "../../../assets/Colors"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';


const SkillsItemStyle = styled.div`
    width: 8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .SkillsCircle {
        width: 8rem;
        color: ${ColorOne};
    }
`

const SkillsItem = ({ name, percent }) => {
    return (
        <SkillsItemStyle>
            <CircularProgressbar
                className="SkillsCircle"
                value={percent}
                text={`${percent}%`}
                styles={buildStyles(
                    {
                        pathColor: ColorOne,
                        textColor: White,
                        trailColor: ColorHole,
                    }
                )}
            />
            <h1>{name}</h1>
        </SkillsItemStyle>
    )
}

export default SkillsItem