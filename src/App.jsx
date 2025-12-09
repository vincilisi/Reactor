import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import {UserContextProvider} from './context/UserContext.jsx';
import { Suspense } from 'react';

function App() {
  return (
    <>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900"><span className="loading loading-spinner loading-lg text-primary"></span></div>}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>  
    </Suspense>
    </>
  )
}

export default App;