import React from 'react'
import ReactDOM from 'react-dom'
import './home.scss';
//React components
import Layout from './layout';
import SignUpForm from './signUpForm'



const Home = props => (

    <SignUpForm>
    </SignUpForm>

)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
