import React, { createContext, useCallback, useState } from "react";

/**
 * Interface que recebe os métodos e variáveis
 * que serão disponibilizados globalmente.
 */
interface IAuthContextState {
  user: IUser;
  signInDev(): Promise<void>;
}

// Interface que recebera os atributos do user
interface IUser {
  id: string;
  name: string;
  email: string;
  active: string;
  created_at: Date | string;
  updated_at: Date | string;
}

// Interface que recebe a resposta da requisição
interface IAuthStateResponse {
  user: IUser;
  token: string;
}

// Criação do Contexto de Autenticação
const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

// Função que receberá o contexto
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthStateResponse>(() => {
    // Guarda as variáveis no LocalStorage do Navegador
    const user = localStorage.getItem('@ProjectManagerUser');
    const token = localStorage.getItem('@ProjectManagerToken');

    // Verifica se existe as variávies e converte o user de String para JSON
    if (user && token) {
      return { user: JSON.parse(user), token }
    }

    // Encontrando nada, retorna um objeto vazio do tipo IAuthStateResponse
    return {} as IAuthStateResponse;
  });

  const signInDev = useCallback(async () => { }, []);

  return (
    <AuthContext.Provider value={{ signInDev, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}
