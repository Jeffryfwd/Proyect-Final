import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Routing from './Routes/Routing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
    <Routing/>
    <Footer/>
     </div>
    </>
  )
}

export default App
