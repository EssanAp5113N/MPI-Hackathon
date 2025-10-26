import styled from "styled-components";


const StyledImg = styled.div`
    display: flex;
    justify-content: ${props => props.$justify || 'stretch'};
    width: ${props => props.width || '50px'};
    height: ${props => props.height || '50px'};
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.$img});
    border-radius: ${props => props.$bradius || '0px'};
    background-color: ${props => props.$bcolor}
`

const Img = (props) => {
    return <StyledImg {...props}/>
}

export default Img