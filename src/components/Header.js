import styled from '@emotion/styled'

const HeaderContainer = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: white;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    color: white;
`;

const Header = ({title}) => {
    return ( 
        <HeaderContainer>
            <HeaderText>{title}</HeaderText>
        </HeaderContainer>
    );
}
 
export default Header;