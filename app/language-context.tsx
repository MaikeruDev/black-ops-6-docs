'use client'

import React, { createContext, useState, ReactNode } from 'react'

type Language = 'EN' | 'GER'

interface LanguageContextType {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
})

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}