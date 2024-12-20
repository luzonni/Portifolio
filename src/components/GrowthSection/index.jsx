import styled from "styled-components"
import SectionTitle from "../SectionTitle"
import GrowthCard from "./GrowthCard"

const GrowthSectionStyle = styled.section`
    width: 80%;
    margin: 4rem auto 0 auto;
    @media screen and (max-width: 1080px) {
        width: 90%;
    }
`

const ListGrowthsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3rem 4rem;
    gap: 4rem;
    align-items: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: 1080px) {
        width: 100%;
        box-sizing: border-box;
        padding: 3rem 0rem;
    }
`

const GrowthSection = ({Growths}) => {
    return (
        <GrowthSectionStyle>
            <SectionTitle>My <strong>Growth</strong></SectionTitle>
            <ListGrowthsStyle>
                {Growths.map((growth, index) => {
                    return (
                        <GrowthCard 
                            key={index}
                            Name={growth.Name}
                            Period={growth.Period}
                            Texts={growth.Texts}
                            Institution={growth.Institution}
                            CertificateURL={growth.CertificateURL}
                        />
                    )
                })}
            </ListGrowthsStyle>
        </GrowthSectionStyle>
    )
}

export default GrowthSection