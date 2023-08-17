import { createContext, useContext, useState } from 'react';

type context = any | null;

export const CategoriesContext = createContext<context>(null);

const [categoryIds, setCategoryIds] = useState<number[]>([])

const CategoriesProvider = ({children}: any) => {
  return (
    <CategoriesContext.Provider value={[categoryIds, setCategoryIds]}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategoriesContext = () => useContext(CategoriesContext)