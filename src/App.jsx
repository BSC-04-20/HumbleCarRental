import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import { APIProvider } from '@vis.gl/react-google-maps'

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

function App() {

  return (
    <>
      <APIProvider apiKey={apiKey}>
        <RouterProvider router={routes}/>
      </APIProvider>
    </>
  )
}

export default App
