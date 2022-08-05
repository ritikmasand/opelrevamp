import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

//import components
import Form from '../Contact2/Form'
import Label from '../Contact2/Label'
import StyledButton from '../Contact2/Button'
import Input from '../Contact2/Input'
import Textarea from '../Contact2/Textarea'

const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;



const ContactForm = () => (
    <div>
        <h3>Email Us</h3>
        <Form>
            <WrapperGrid>
                <Label>Name</Label>
                <Input type="text" name="name" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Last Name</Label>
                <Input type="text" name="company" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Email Address</Label>
                <Input type="email" name="email" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Phone Number</Label>
                <Input type="number" name="phone" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>State/UT</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid>
                <Label>Country</Label>
                <Input type="text" name="phone" />
            </WrapperGrid>
            <WrapperGrid full>
            <p>
            <Label> Are you representing an individual or a company?
            </Label>
            </p>
            </WrapperGrid>
            <WrapperGrid>
            <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  <label class="form-check-label" for="exampleRadios1">
    Indiviual
  </label>
</div>
</WrapperGrid>
<WrapperGrid>

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
    Company
  </label>
</div>

</WrapperGrid>
<WrapperGrid full>
            <p>I am intrseted in?</p>
            </WrapperGrid>
            <WrapperGrid>
            <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
  <label class="form-check-label" for="exampleRadios1">
  Software development 
  </label>
</div>
</WrapperGrid>
<WrapperGrid>

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
  Hydroponics
  </label>
</div>
</WrapperGrid>
<WrapperGrid>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
  <label class="form-check-label" for="exampleRadios3">
  Talent development
  </label>
</div>
</WrapperGrid>
{/* <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div> */}
            <WrapperGrid full>
                <Label>Message</Label>
                <Textarea name="message" rows="5"></Textarea>
            </WrapperGrid>
            <WrapperGrid full>
                <StyledButton>Submit</StyledButton>
            </WrapperGrid>
           
        </Form>
    </div>
)

export default ContactForm