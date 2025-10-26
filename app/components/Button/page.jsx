import styled, {css} from "styled-components";



const StyledButton = styled.button`
    background: ${props => props.$background || 'none'};
    border: ${props => props.$border || 'none'};
    cursor: pointer;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.$bradius || '0px'};
    padding: ${props => props.$padding || '0'};

${props => props.$secondary && css`
    background:  ${props => props.$background};

    &:hover {
        background: ${props => props.$backgroundchange};
    }
    `
}

`

const Button = ({...props}) => {
    return <StyledButton  {...props}/> 
}


export default Button