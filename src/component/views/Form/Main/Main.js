import React, { Component } from 'react'
import Container from '../../../Contact2/Container'
//import all child components
// import Container from '../../../component/Contact2/Container'
// import Title from '../../../component/Contact2/Title/'
// import Container from '../../../Contact2/Container/'
 import CompanyInfo from '../CompanyInfo'
 import ContactForm from '../ContactForm'



class Main extends Component {
    render () {
        return (
            <Container>
                <Title text="Contact SoDo" />
                <Container wrapper>
                    <CompanyInfo/>
                        
                    <ContactForm />
                </Container>
            </Container>
        )
    }
}

export default Main