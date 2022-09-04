import React, { useEffect } from 'react'

type Props = {
    firstName:string,
    lastName:string
}

export default function useRandomJokes({firstName,lastName}: Props) {
    const [joke,setJoke] = React.useState('');

    useEffect(()=>{
        const fetchJoke =async () => 
            await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
                .then((res)=> res.json())
                .then((data)=>{
                    setJoke(data.value.joke)
                });
        
        fetchJoke()
        
    },[firstName,lastName]);

    return joke
}