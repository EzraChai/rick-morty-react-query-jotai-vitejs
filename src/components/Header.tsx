import {IoMoonSharp,IoSunny} from "react-icons/io5"
import { useAtom } from 'jotai';
import { nightModeToggleAtom } from "./jotai";


export const Header = () => {

  const [nightMode,toggleNightMode] = useAtom(nightModeToggleAtom)

    return (
        <div className="flex justify-between p-2 px-4 bg-white dark:bg-black w-full mb-10">
            <h1 className="text-xl font-semibold dark:text-white">Rick & Morty</h1>
            <button onClick={toggleNightMode}>{nightMode?<IoSunny className="w-5 h-5 text-red-400"/>:<IoMoonSharp className="w-5 h-5 text-yellow-400"/>}</button>
         </div>
    )
}