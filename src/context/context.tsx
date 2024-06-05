import { useState, createContext } from 'react'

export const Context = createContext(null)

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lan, setLan] = useState<string>('es')

  return <Context.Provider value={{ lan, setLan }}>{children}</Context.Provider>
}
