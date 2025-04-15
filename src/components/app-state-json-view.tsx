import { useContext } from 'react';
import { AppContext } from '../page/state-provider';

export const AppStateJsonView = () => {
  const { state } = useContext(AppContext);

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  )
}
