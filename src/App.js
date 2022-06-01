import React from 'react'
import { Container } from 'react-bootstrap'
import Page from './Page'
import Reg from './Reg'

export default function App() {
  return (
    <Container fluid className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
    <div className='w-100' style={{maxWidth:'400px'}}>
        <Page/>
    </div>
    </Container>
  )
}
