import { useQuery } from "react-query";
import { Character } from "./Character";
import { useState } from 'react';

export const Characters = () => {

    const [page,setPage] = useState(1);
    

    const fetchCharacters = async ({queryKey}) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        return response.json();
    }

    const {data,status,isPreviousData} = useQuery(["characters",page],fetchCharacters,{
        keepPreviousData: true,
    });

    console.log(isPreviousData)

    if (status === "loading"){
        return (<div>Loading...</div>)
    }
    if (status === "error"){
        return(<div>Error</div>)
    }

    return (
        <div className="grid grid-cols-3 gap-7">
        {data.results.map((character:any) => (
            <Character key={character.id} character={character}/>
        ))}
        <div className="flex items-center justify-around dark:text-white">
            {page!== 1 &&<button onClick={() => setPage((page) => page -1)} disabled={page===1 || isPreviousData} className="bg-white hover:bg-zinc-300 dark:bg-black dark:hover:bg-zinc-800 p-2 w-40 h-32 rounded-lg text-xl font-bold transition">Previous</button>}
            {page!== data.info.pages&&<button onClick={() => setPage((page) => page +1)} disabled={page===data.info.pages || isPreviousData} className="bg-white hover:bg-zinc-300 dark:bg-black dark:hover:bg-zinc-800 p-2 w-40 h-32 rounded-lg text-xl font-bold transition">Next</button>}
        </div>
        </div>
    )
}