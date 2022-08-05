import React from 'react'
import styled from 'styled-components'


const WrapperCompanyInfo=styled.div`
    background: orangered;
`; 

const CompanyName = styled.h3`
    margin: 0 0 1rem 0;
    text-align: center;
    color: #fff; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`;

const WrapperList = styled.ul`
    list-style: none;
    margin:0 0 1rem 0;
    padding:0;
    text-align: center;
    @media (min-width: 700px) {
        text-align: left; 
    }
`;


const CompanyInfo = () => (
    <WrapperCompanyInfo>
        <CompanyName>SoDo</CompanyName>
        <WrapperList>
            <li>1. Address</li>
            <li> Delhi NCR, India, Delhi, India</li>
            
            <li>2. Phone Number</li>
            <li> +91 97177 17297</li>

            <li>3. Email</li>
            <li> Company.India@SoDo.co.za</li>
        </WrapperList>
        
    </WrapperCompanyInfo>
)

export default CompanyInfo