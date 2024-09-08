import { App } from './app'
import { CharacterView } from './character-view';
import { StateProvider } from './state-provider'
import { createHashRouter, RouterProvider, useParams } from "react-router-dom";

export const AppRoot = () => {

  const CharacterRoute = () => (
    <CharacterView {...useParams()} />
  )

  const router = createHashRouter([{
    path: '*',
    element: <App />
  },
  {
    path: '/characters/:id',
    element: <CharacterRoute />
  }]);

  return (
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  )
}