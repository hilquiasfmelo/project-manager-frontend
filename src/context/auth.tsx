import React, { createContext, useCallback, useState } from "react";

import { ICredentialsDev } from "../interfaces/ICredentialsDev";

import { api } from "../services/api";

/**
 * Interface que recebe os métodos e variáveis
 * que serão disponibilizados globalmente.
 */
export interface IAuthContextState {
  user: IUser;
  token: string;
  signInDev(credentials: ICredentialsDev): Promise<void>;
  signOut(): void;
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

// Criação do Contexto de Autenticação que se disponibilizará para toda a aplicação
export const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

/**
 * Função que receberá o contexto e se disponibilizará para toda a aplicação
 * dentro do arquivo principal App.tsx
 */
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

  // Função que recebe as credenciais do user para que ele se logue na aplicação
  const signInDev = useCallback(async (credentials: ICredentialsDev) => {
    const response = await api.post('/session', credentials);

    const { user, token } = response.data;

    localStorage.setItem('@ProjectManagerUser', JSON.stringify(user));
    localStorage.setItem('@ProjectManagerToken', token);

    setData({
      user,
      token,
    })
  }, []);

  // Função que deslogará o user da aplicação
  const signOut = useCallback(() => {
    localStorage.removeItem('@ProjectManagerUser');
    localStorage.removeItem('@ProjectManagerToken');

    setData({} as IAuthStateResponse)
  }, []);

  return (
    <AuthContext.Provider value={{ signInDev, signOut, user: data.user, token: data.token }}>
      {children}
    </AuthContext.Provider>
  )
}
