'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'
import { Info } from 'lucide-react'

export default function PoolTableEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="pool-table-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Pool Table Easter Egg Guide' : 'Billardtisch-Easter-Egg-Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Earn a quick <span className="text-blue-500 font-bold">100 Essence</span> in <span className="text-blue-500 font-bold">Liberty Falls</span> by completing the Pool Table Easter Egg in Liberty Lanes. This is a simple Easter Egg that gives a small reward but adds some fun to your game.
          </>
        ) : (
          <>
            Verdiene schnell <span className="text-blue-500 font-bold">100 Essenz</span> in <span className="text-blue-500 font-bold">Liberty Falls</span>, indem du das Billardtisch-Easter-Egg in Liberty Lanes abschließt. Es ist ein einfaches Easter Egg mit einer kleinen Belohnung, das deinem Spiel jedoch etwas Spaß hinzufügt.
          </>
        )}
      </p>

      {/* Step 1 */}
      <h2 id="step-1-melee-macchiato" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Get the Melee Macchiato Perk' : 'Schritt 1: Hole dir den Melee Macchiato-Perk'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            To start this Easter Egg, you’ll need the <span className="text-blue-500 font-bold">Melee Macchiato Perk</span>, which increases melee damage. The perk can be found at the Perk-a-Cola machine on the <span className="text-blue-500 font-bold">southwest side of the map, near the church (Coordinates: C6)</span>.
          </>
        ) : (
          <>
            Um dieses Easter Egg zu starten, benötigst du den <span className="text-blue-500 font-bold">Melee Macchiato-Perk</span>, der den Nahkampfschaden erhöht. Der Perk ist beim Perk-a-Cola-Automaten im <span className="text-blue-500 font-bold">Südwesten der Karte in der Nähe der Kirche (Koordinaten: C6)</span> zu finden.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Melee Macchiato Perk Machine Placeholder" className="my-6" />

      {/* Step 2 */}
      <h2 id="step-2-pool-table" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Head to the Pool Table in Liberty Lanes' : 'Schritt 2: Gehe zum Billardtisch in Liberty Lanes'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Once you have the Melee Macchiato Perk, head to <span className="text-blue-500 font-bold">Liberty Lanes</span>, the bowling alley located at the <span className="text-blue-500 font-bold">southern end of Liberty Falls (Coordinates: F6)</span>. Find the pool table in the back of the building.
          </>
        ) : (
          <>
            Sobald du den Melee Macchiato-Perk hast, gehe zu <span className="text-blue-500 font-bold">Liberty Lanes</span>, der Bowlingbahn am <span className="text-blue-500 font-bold">südlichen Ende von Liberty Falls (Koordinaten: F6)</span>. Finde den Billardtisch im hinteren Bereich des Gebäudes.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Liberty Lanes Pool Table Placeholder" className="my-6" />

      {/* Step 3 */}
      <h2 id="step-3-strike-balls" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Strike the Pool Balls' : 'Schritt 3: Stoße die Billardkugeln an'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Using a melee attack (<span className="text-blue-500 font-bold">R3/RS/V</span>) while holding a weapon, strike the pool balls on the table. The balls will roll into the pockets, completing the Easter Egg and awarding <span className="text-blue-500 font-bold">100 Essence</span>.
          </>
        ) : (
          <>
            Verwende einen Nahkampfangriff (<span className="text-blue-500 font-bold">R3/RS/V</span>), während du eine Waffe hältst, und stoße die Billardkugeln auf dem Tisch an. Die Kugeln rollen in die Taschen und schließen das Easter Egg ab, was dir <span className="text-blue-500 font-bold">100 Essenz</span> einbringt.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Strike Pool Balls Placeholder" className="my-6" />

      <p className="p-4 bg-yellow-200 text-black rounded-lg flex items-start space-x-3 mt-6">
        <Info className="text-yellow-700 mt-1" size={20} />
        <span className="leading-7">
        {language === 'EN' ? (
          <>
            Ensure you arenot holding a knife when striking the balls, as this won’t work with the knife equipped. Use your regular melee attack with any other weapon.
          </>
        ) : (
          <>
            Stelle sicher, dass du <span className="text-blue-500 font-bold">kein Messer</span> hältst, wenn du die Kugeln triffst, da es mit einem Messer nicht funktioniert. Verwende deinen regulären Nahkampfangriff mit einer anderen Waffe.
          </>
        )}
        </span>
      </p>
 
    </div>
  )
}
