'use client'

import { useContext } from 'react'
import { LanguageContext } from './language-context'
import { Info } from 'lucide-react'

export default function Home() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' 
          ? 'Welcome to Black Ops 6 Documentation'
          : 'Willkommen zur Black Ops 6 Dokumentation'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? "Explore comprehensive guides, tips, and tricks for Black Ops 6. Whether you're diving into the Zombies mode, competing in Multiplayer, or experiencing the Campaign, we've got you covered."
          : 'Entdecken Sie umfassende Anleitungen, Tipps und Tricks für Black Ops 6. Ob Sie in den Zombies-Modus eintauchen, im Mehrspieler-Modus antreten oder die Kampagne erleben, wir haben alles für Sie abgedeckt.'}
      </p>
      <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Getting Started' : 'Erste Schritte'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Choose a section from the sidebar to begin exploring the vast world of Black Ops 6. Uncover hidden Easter eggs, master new weapons, and dominate in multiplayer matches.'
          : 'Wählen Sie einen Abschnitt aus der Seitenleiste, um die riesige Welt von Black Ops 6 zu erkunden. Entdecken Sie versteckte Ostereier, meistern Sie neue Waffen und dominieren Sie in Mehrspieler-Matches.'}
      </p>

      <p className="p-4 bg-yellow-200 text-black rounded-lg flex items-start space-x-3 mt-6">
        <Info className="text-yellow-700 mt-1" size={20} />
        <span className="leading-7">
          {language === 'EN'
            ? 'This website is very much Work in Progress. If there is any wrong information or missing details, feel free to let me know. Discord: maikeru.dev'
            : 'Diese Website ist sehr unvollständig. Wenn es irgendwelche falschen Informationen oder fehlende Details gibt, schreib mir gern. Discord: maikeru.dev'}
        </span>
      </p>
    </div>
  )
}