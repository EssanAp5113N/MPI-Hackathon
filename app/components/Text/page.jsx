import styled from "styled-components";

const StyledText = styled.p`
    color: ${props => props.color || 'rgb(172,172,172)'};
    padding: ${props => props.$padding || '0'};
    margin: ${props => props.margin || '0'};
    font-size: ${props => props.size || '14px'};
    cursor: pointer;
`

const Text = (props) => {
    return <StyledText {...props}/>
}

export default Text