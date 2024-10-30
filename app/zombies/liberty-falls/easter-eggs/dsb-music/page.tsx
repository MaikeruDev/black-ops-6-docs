'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function DestroySomethingBeautifulEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="destroy-something-beautiful-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? '"Destroy Something Beautiful" Music Easter Egg' : '"Destroy Something Beautiful" Musik-Easter-Egg'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Trigger a secret song in Liberty Falls by finding and destroying three hidden “Mister Peeks” headphones around the map. Completing this Easter Egg unlocks “Destroy Something Beautiful” by Kevin Sherwood.'
          : 'Aktiviere einen geheimen Song in Liberty Falls, indem du drei versteckte "Mister Peeks"-Kopfhörer auf der Karte findest und zerstörst. Durch das Abschließen dieses Easter Eggs wird "Destroy Something Beautiful" von Kevin Sherwood freigeschaltet.'}
      </p>

      {/* Step 1 */}
      <h2 id="step-1-motor-lodge-headphone" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Find the First Headphone in Motor Lodge Alley' : 'Schritt 1: Finde den ersten Kopfhörer in der Motor Lodge Alley'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Go to Motor Lodge Alley, near the motel entrance. Look for the headphones on a stack of crates. Destroy them with a melee attack to activate the first part of the Easter Egg.'
          : 'Gehe zur Motor Lodge Alley in der Nähe des Motels. Suche die Kopfhörer auf einem Stapel Kisten. Zerstöre sie mit einem Nahkampfangriff, um den ersten Teil des Easter Eggs zu aktivieren.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Motor Lodge Alley Headphones Placeholder" className="my-6" />

      {/* Step 2 */}
      <h2 id="step-2-dark-aether-headphone" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Locate the Headphones in the Dark Aether' : 'Schritt 2: Kopfhörer im Dunklen Äther finden'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Enter the Dark Aether area via the portal near the graveyard. Inside, look on the right side for a headphone set on a ledge. Destroy these headphones to proceed to the final part of the Easter Egg.'
          : 'Betritt den Dunklen Äther über das Portal in der Nähe des Friedhofs. Drinnen suche auf der rechten Seite nach einem Kopfhörer-Set auf einem Sims. Zerstöre diese Kopfhörer, um den letzten Teil des Easter Eggs zu erreichen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Dark Aether Headphones Placeholder" className="my-6" />

      {/* Step 3 */}
      <h2 id="step-3-washington-ave-headphone" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Find the Headphones on Washington Ave' : 'Schritt 3: Finde die Kopfhörer auf der Washington Avenue'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Head to Washington Ave and look for a pile of rubble near the corner where the headphones rest. Destroying this last set will trigger the song “Destroy Something Beautiful,” adding a unique ambiance to your game.'
          : 'Gehe zur Washington Avenue und suche nach einem Trümmerhaufen in der Nähe der Ecke, auf dem die Kopfhörer liegen. Das Zerstören dieses letzten Sets wird den Song "Destroy Something Beautiful" aktivieren und deinem Spiel eine besondere Atmosphäre verleihen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Washington Ave Headphones Placeholder" className="my-6" />
    </div>
  )
}
