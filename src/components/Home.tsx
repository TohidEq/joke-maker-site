import React from 'react'
import useRandomJokes from '../Hooks/useRandomJokes';


type Props = {}

export default function Home({}: Props) {


    const firstNameRef = React.useRef<HTMLInputElement>(null)
  const lastNameRef = React.useRef<HTMLInputElement>(null);

  const [firstName,setFirstName] = React.useState("Tohid")
  const [lastName,setLastName] = React.useState("Eghdami")
  
  const jokeText = useRandomJokes({firstName,lastName});


  const clickHandle = (e:any)=>{
    e.preventDefault(); // stop refresh page //
    setFirstName(firstNameRef.current?.value||"Tohid")
    setLastName(lastNameRef.current?.value||" ")
    

  }

  return (
    <div className="App ">
            <h1>Joke Maker</h1>

            <div className="joke">
              {jokeText}
            </div>

            <form className='form'>
              <div className="inputs">
                <input ref={firstNameRef} placeholder='First Name' />
                <input ref={lastNameRef} placeholder='Last Name' />
              </div>
              <button onClick={clickHandle}>Generate Joke</button>
            </form>
          </div>
  )
}