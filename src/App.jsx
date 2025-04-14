import { Toaster } from "react-hot-toast";
import Rutas from "./routers/Rutas"

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 text-black dark:bg-gray-800 dark:text-white">  
          
          <Toaster
            position="bottom-right"
          />
          <Rutas/>
      </div>
    </>
  )
}

export default App
