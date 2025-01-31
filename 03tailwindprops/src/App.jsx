import { useState } from 'react'
import './App.css'
import Card from './components/Card'

let MyObj = {
  name: 'Bryan',
  age: '25',
  address: {
    city: 'Manizales',
    country: 'Colombia'
  }
}
  
let newArr = [1, 2, 3, 4, 5, 6]

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounder-md' >Vite with Tailwind</h1>
      <Card username="Bryan" post="Electronic Engg" myArr={newArr} image="https://scontent.fmzl1-1.fna.fbcdn.net/v/t39.30808-6/310111420_8063384467067162_721403413559200493_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8VWm0NBpULAd8asHPStLvpn5WsHb_U9Smflawdv9T1L6FSC7WIAYAcOUtLPDa02Okkbt8LtSAkWaeX7Dvfq7W&_nc_ohc=RYPFGKZZF1UQ7kNvgHV1iLQ&_nc_zt=23&_nc_ht=scontent.fmzl1-1.fna&_nc_gid=A-h_ZwnU2JHZDH9diPgYPrP&oh=00_AYBR3cXM0nb60EavmrOUPtu71k6_HaSnF_vvFXw6VZ4tGg&oe=6763ECDE"/>
      <Card username="Json" post="Staff Engg"/>
      <Card/>
    </>
  )
}

export default App
