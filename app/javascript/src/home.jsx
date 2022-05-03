import React from 'react'
import ReactDOM from 'react-dom'
import './home.scss';
//React components
import Layout from './layout';
import SignUpForm from './signUpForm'


const Home = props => (
  <Layout>
    <h1>Home page react is working</h1>
    <SignUpForm>
    </SignUpForm>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
