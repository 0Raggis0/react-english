import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive')

  //* Se puede hacer de la siguiente forma:
  //unction changeColor(color) {
  //  setColor(color)
  //}
  //* O simplemente colocar en el onCLick el "setColor"

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justifycenter gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'yellow'}} onClick={() => setColor('yellow')}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}>blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'red'}} onClick={() => setColor('red')}>red</button>
        </div>
      </div>
    </div>
  )
}

export default App
