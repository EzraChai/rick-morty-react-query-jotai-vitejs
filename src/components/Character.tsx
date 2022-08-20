const characterStatus = (status:string) => {
    status = status.toLowerCase()
    if (status === "alive"){
        return <div className="bg-green-600 w-2 h-2 rounded-full"></div>
    }
    if (status === "dead"){
        return <div className="bg-red-600 w-2 h-2 rounded-full"></div>
    }
    return <div className="bg-gray-600 w-2 h-2 rounded-full"></div>
}

export const Character = ({character}) => {
    return (
        <div className="flex overflow-hidden rounded-lg bg-white dark:bg-zinc-700 dark:text-white">
            <div className="max-w-[14rem]">
                <img src={character.image} alt={character.name + "'s image"} />
            </div>
            <div className="py-2 px-4">
                <div className="text-2xl font-bold">{character.name}</div>
                <div className="text-[0.9rem] flex items-center gap-1">
                    {characterStatus(character.status)}
                    {character.status} - {character.species}
                </div>
                <div className="mt-4">
                    <div className="text-sm text-gray-400">Last known location:</div>
                    <div className="">{character.location.name}</div>
                </div>
                <div className="mt-4">
                    <div className="text-sm text-gray-400">First seen in:</div>
                    <div className="">{character.origin.name}</div>
                </div>
            </div>
            
        </div>
    )
}