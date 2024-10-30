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
        {language === 'EN' ? (
          <>
            Get familiar with all the perks and power-ups you’ll encounter in <span className="text-blue-500 font-bold">Black Ops 6 Zombies</span> mode. Each one can give you the edge to survive longer and take on tougher waves of undead.
          </>
        ) : (
          <>
            Machen Sie sich mit allen Vorteilen und Power-Ups vertraut, die Sie im <span className="text-blue-500 font-bold">Black Ops 6 Zombies-Modus</span> antreffen. Jeder kann Ihnen helfen, länger zu überleben und sich gegen stärkere Gegnerwellen zu behaupten.
          </>
        )}
      </p>

      {/* Jugger-Nog */}
      <h2 id="jugger-nog" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Jugger-Nog' : 'Jugger-Nog'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Boosts your <span className="text-blue-500 font-bold">health</span>, letting you take extra hits. Perfect for when the hordes start closing in.
          </>
        ) : (
          <>
            Erhöht Ihre <span className="text-blue-500 font-bold">Gesundheit</span>, sodass Sie mehr Treffer einstecken können. Perfekt, wenn die Horden näher kommen.
          </>
        )}
      </p>

      {/* Quick Revive */}
      <h2 id="quick-revive" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Quick Revive' : 'Schnelle Wiederbelebung'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Faster revives for teammates or a self-revive in <span className="text-blue-500 font-bold">solo mode</span>. Clutch for staying in the game when things get intense.
          </>
        ) : (
          <>
            Schnellere Wiederbelebung für Teamkollegen oder eine Selbstwiederbelebung im <span className="text-blue-500 font-bold">Solo-Modus</span>. Unverzichtbar, wenn es brenzlig wird.
          </>
        )}
      </p>

      {/* Speed Cola */}
      <h2 id="speed-cola" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Speed Cola' : 'Speed Cola'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            <span className="text-blue-500 font-bold">Reload</span> faster, which is crucial when the zombies won’t stop coming. Saves valuable time in the middle of heavy firefights.
          </>
        ) : (
          <>
            Lädt schneller nach, was entscheidend ist, wenn die Zombies nicht aufhören zu kommen. Spart wertvolle Zeit inmitten heftiger Kämpfe.
          </>
        )}
      </p>

      {/* Stamin-Up */}
      <h2 id="stamin-up" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Stamin-Up' : 'Stamin-Up'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Boosts your <span className="text-blue-500 font-bold">movement speed</span>, letting you dodge zombies more easily.
          </>
        ) : (
          <>
            Erhöht deine <span className="text-blue-500 font-bold">Bewegungsgeschwindigkeit</span>, sodass du den Zombies besser ausweichen kannst.
          </>
        )}
      </p>

      {/* PhD Flopper */}
      <h2 id="phd-flopper" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'PhD Flopper' : 'PhD Flopper'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Grants <span className="text-blue-500 font-bold">immunity</span> to self-inflicted damage. Dive-to-prone causes explosions that get stronger with height.
          </>
        ) : (
          <>
            Verleiht <span className="text-blue-500 font-bold">Immunität</span> gegen selbst zugefügten Schaden. Ein Sturz auf den Bauch verursacht Explosionen, die mit der Höhe stärker werden.
          </>
        )}
      </p>

      {/* Deadshot Daiquiri */}
      <h2 id="deadshot-daiquiri" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Deadshot Daiquiri' : 'Deadshot Daiquiri'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Increases <span className="text-blue-500 font-bold">critical damage</span> and auto-aims to critical areas.
          </>
        ) : (
          <>
            Erhöht den <span className="text-blue-500 font-bold">Krit-Schaden</span> und zielt automatisch auf kritische Bereiche.
          </>
        )}
      </p>

      {/* Elemental Pop */}
      <h2 id="elemental-pop" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Elemental Pop' : 'Elemental Pop'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Adds random <span className="text-blue-500 font-bold">elemental effects</span> to bullets, such as fire or electric shock.
          </>
        ) : (
          <>
            Fügt Kugeln zufällige <span className="text-blue-500 font-bold">elementare Effekte</span> hinzu, wie Feuer- oder Elektroschock.
          </>
        )}
      </p>

      {/* Melee Macchiato */}
      <h2 id="melee-macchiato" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Melee Macchiato' : 'Melee Macchiato'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Transforms melee attacks into <span className="text-blue-500 font-bold">power punches</span> that send zombies flying.
          </>
        ) : (
          <>
            Verwandelt Nahkampfangriffe in <span className="text-blue-500 font-bold">Power-Schläge</span>, die Zombies wegschleudern.
          </>
        )}
      </p>
    </div>
  )
}
