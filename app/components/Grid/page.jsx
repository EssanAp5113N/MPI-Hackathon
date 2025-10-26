import styled from "styled-components";

const StyledFGrid = styled.div`
    display: grid;
    width: ${props => props.width};
    height: 100%;
    justify-content: ${props => props.$justify || 'stretch'};
    grid-template-columns: 90px 90px 90px;
    grid-template-rows: 45px 45px 45px 45px;
    gap: ${props => props.$gap || '0px'}
    
`

const Grid = (props) => {
    return <StyledFGrid {...props}/>
}

export default Grid