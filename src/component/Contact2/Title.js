import React from 'react'
import styled from 'styled-components'

const Title = ({ className, text }) => (
    <h1 className={className}>{ text }</h1>
)

const StyledTitle = styled(Title)`
    color: orangered;
    font: 70px; 
    text-align: center; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`; 

export default StyledTitle