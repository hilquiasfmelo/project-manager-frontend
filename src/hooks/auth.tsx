import { useContext } from 'react';
import { AuthContext, IAuthContextState } from '../context/auth';

export function useAuth(): IAuthContextState {
  const context = useContext(AuthContext);

  return context;
}
