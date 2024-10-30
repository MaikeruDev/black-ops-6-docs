'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function PerksAndPowerups() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="perks-powerups" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Perks & Power-ups' : 'Vorteile & Power-Ups'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' 
          ? 'Get familiar with all the perks and power-ups you’ll encounter in Black Ops 6 Zombies mode. Each one can give you the edge to survive longer and take on tougher waves of undead.' 
          : 'Machen Sie sich mit allen Vorteilen und Power-Ups vertraut, die Sie im Black Ops 6 Zombies-Modus antreffen. Jeder kann Ihnen helfen, länger zu überleben und sich gegen stärkere Gegnerwellen zu behaupten.'}
      </p>

      {/* Jugger-Nog */}
      <h2 id="jugger-nog" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Jugger-Nog' : 'Jugger-Nog'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Boosts your health, letting you take extra hits. Perfect for when the hordes start closing in.'
          : 'Erhöht Ihre Gesundheit, sodass Sie mehr Treffer einstecken können. Perfekt, wenn die Horden näher kommen.'}
      </p>

      {/* Quick Revive */}
      <h2 id="quick-revive" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Quick Revive' : 'Schnelle Wiederbelebung'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Faster revives for teammates or a self-revive in solo mode. Clutch for staying in the game when things get intense.'
          : 'Schnellere Wiederbelebung für Teamkollegen oder eine Selbstwiederbelebung im Solo-Modus. Unverzichtbar, wenn es brenzlig wird.'}
      </p>

      {/* Speed Cola */}
      <h2 id="speed-cola" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Speed Cola' : 'Speed Cola'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Reload faster, which is crucial when the zombies won’t stop coming. Saves valuable time in the middle of heavy firefights.'
          : 'Lädt schneller nach, was entscheidend ist, wenn die Zombies nicht aufhören zu kommen. Spart wertvolle Zeit inmitten heftiger Kämpfe.'}
      </p>

      {/* Add additional perks and power-ups in a similar format */}

    </div>
  )
}
