import React from 'react';


function App() {
  return (
    <div className="App ">
      <h1>Joke Maker</h1>

      <div className="joke">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae ab sunt, atque tenetur velit enim tempora autem in, porro, eos praesentium! Voluptatum odit impedit eveniet similique aliquid sit. Eaque?
      </div>

      <form className='form'>
        <div className="inputs">
          <input placeholder='First Name' />
          <input placeholder='Last Name' />
        </div>
        <button>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
