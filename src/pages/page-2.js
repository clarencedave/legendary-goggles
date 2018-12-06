import React from 'react'
//import { Link } from 'gatsby'
import img from '../images/nature.jpeg'
import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    
    
    <a class ="image" href={img}>
    <img src={img} alt="Forest"/>
    </a>
    
   
 
  </Layout>
  
)

export default SecondPage
