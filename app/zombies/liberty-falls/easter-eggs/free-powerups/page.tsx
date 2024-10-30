'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function FreePowerUpsEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="free-power-ups-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Free Power-Ups Easter Egg Guide' : 'Kostenlose Power-Ups Easter-Egg-Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Earn free power-ups by finding and shooting specific items in Liberty Falls. This Easter Egg provides quick boosts like Max Ammo, Insta-Kill, and Nuke to help you survive longer in the game.'
          : 'Verdiene kostenlose Power-Ups, indem du bestimmte Gegenstände in Liberty Falls findest und abschießt. Dieses Easter Egg bietet schnelle Boosts wie Max Ammo, Insta-Kill und Nuke, um dir zu helfen, länger im Spiel zu überleben.'}
      </p>

      {/* Max Ammo */}
      <h2 id="max-ammo" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Max Ammo' : 'Maximale Munition'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Head to the bridge near the spawn area and look for a small canister on the edge. Shoot it to trigger a Max Ammo power-up, which will appear nearby.'
          : 'Gehe zur Brücke in der Nähe des Spawn-Bereichs und suche nach einem kleinen Kanister am Rand. Schieße darauf, um ein Max Ammo Power-Up auszulösen, das in der Nähe erscheint.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Max Ammo Location Placeholder" className="my-6" />

      {/* Insta-Kill */}
      <h2 id="insta-kill" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Insta-Kill' : 'Insta-Kill'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Find the skull icon on the roof of the church, close to the Pack-a-Punch machine. Shoot the skull, and an Insta-Kill power-up will spawn for immediate use.'
          : 'Finde das Totenkopf-Symbol auf dem Dach der Kirche, in der Nähe der Pack-a-Punch-Maschine. Schieße auf den Totenkopf, und ein Insta-Kill Power-Up wird zum sofortigen Gebrauch erscheinen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Insta-Kill Location Placeholder" className="my-6" />

      {/* Nuke */}
      <h2 id="nuke" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Nuke' : 'Atombombe'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'In the Alamo Bank, locate the Nuke icon above the chandelier. Shoot it to drop a Nuke power-up, instantly clearing out all zombies in the vicinity.'
          : 'Im Alamo Bank, suche das Atombomben-Symbol über dem Kronleuchter. Schieße darauf, um ein Nuke Power-Up auszulösen, das sofort alle Zombies in der Nähe beseitigt.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Nuke Location Placeholder" className="my-6" />
    </div>
  )
}
