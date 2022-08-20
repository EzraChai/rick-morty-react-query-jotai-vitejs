import { Characters } from './components/Characters';
import {QueryClientProvider,QueryClient} from "react-query";
import { Header } from './components/Header';
import { useAtom } from 'jotai';
import { nightModeToggleAtom } from './components/jotai';

const queryClient = new QueryClient()

function App() {
  const [nightMode] = useAtom(nightModeToggleAtom)
  return (
    <div className={`App ${nightMode?"dark":""}`}>
      <QueryClientProvider client={queryClient}>
        <div id="main">
         <Header/>
          <div className="max-w-[110rem] m-auto pb-10">
            <Characters/>
          </div>
      </div>
    </QueryClientProvider>
    </div>
  )
}

export default App
