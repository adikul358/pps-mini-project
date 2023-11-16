import { Link, Outlet } from "react-router-dom"
import { CookiesProvider } from 'react-cookie';
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <div className="top-0 sticky py-3 backdrop-blur bg-white/40 border-b-2 border-slate-200 ">
        <div className="w-full max-w-5xl mx-auto flex flex-rol items-center justify-between">
          <Link to={`/`}><span className="text-2xl font-semibold cursor-pointer hover:text-slate-600">Nexus Banking</span></Link>
          <Link to={`/about`}><span className="text-lg font-light hover:text-blue-600 cursor-pointer">About</span></Link>
        </div>
      </div>

      <CookiesProvider>
        <Outlet />
      </CookiesProvider>

    </div>
  );
}

export default App;
