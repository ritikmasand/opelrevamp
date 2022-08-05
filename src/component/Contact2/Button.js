import styled from 'styled-components'

const StyledButton = styled.button`
    background: orangered;
    border: 0; 
    color: #fff; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: orangered;
        color: #fff; 
        outline: 0; 
        transition: background-color 2s ease-out; 
    }
    
`; 

export default StyledButton