import styled from "@emotion/styled"
import PropTypes from 'prop-types'

const Message = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const Quote = styled.p`
    color: #00838F;
    padding: 1rem ;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;

`

const Result = ({ quote }) => (
    quote === 0 ? <Message>Select brand, year and plan</Message> : <Quote>Total: $ {quote}</Quote>
)

Result.propTypes = {
    quote: PropTypes.number.isRequired
}

export default Result
