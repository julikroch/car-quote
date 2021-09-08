import styled from "@emotion/styled"
import PropTypes from 'prop-types'

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const CustomSpan = styled.span`
    text-transform: capitalize;
`

const Resume = ({ data }) => {

    const { brand, year, plan } = data

    if (brand === '' || plan === '' || year === '') return null

    return (
        <ResumeContainer>
            <h2>Quote resume</h2>
            <ul style={{ padding: 0 }}>
                <li>Brand: <CustomSpan>{brand}</CustomSpan></li>
                <li>Year: <CustomSpan>{year}</CustomSpan></li>
                <li>Plan: <CustomSpan>{plan}</CustomSpan></li>
            </ul>
        </ResumeContainer>
    )
}

Resume.propTypes = {
    data: PropTypes.object.isRequired
}

export default Resume