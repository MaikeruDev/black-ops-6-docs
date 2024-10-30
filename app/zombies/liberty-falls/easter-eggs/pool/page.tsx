'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function PoolTableEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="pool-table-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Pool Table Easter Egg Guide' : 'Billardtisch-Easter-Egg-Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Earn a quick 100 Essence in Liberty Falls by completing the Pool Table Easter Egg in Liberty Lanes. This is a simple Easter Egg that gives a small reward but adds some fun to your game.'
          : 'Verdiene schnell 100 Essenz in Liberty Falls, indem du das Billardtisch-Easter-Egg in Liberty Lanes abschließt. Es ist ein einfaches Easter Egg mit einer kleinen Belohnung, das deinem Spiel jedoch etwas Spaß hinzufügt.'}
      </p>

      {/* Step 1 */}
      <h2 id="step-1-melee-macchiato" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Get the Melee Macchiato Perk' : 'Schritt 1: Hole dir den Melee Macchiato-Perk'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'To start this Easter Egg, you’ll need the Melee Macchiato Perk, which increases melee damage. The perk can be found at the Perk-a-Cola machine on the southwest side of the map, near the church (Coordinates: C6).'
          : 'Um dieses Easter Egg zu starten, benötigst du den Melee Macchiato-Perk, der den Nahkampfschaden erhöht. Der Perk ist beim Perk-a-Cola-Automaten im Südwesten der Karte in der Nähe der Kirche zu finden (Koordinaten: C6).'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Melee Macchiato Perk Machine Placeholder" className="my-6" />

      {/* Step 2 */}
      <h2 id="step-2-pool-table" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Head to the Pool Table in Liberty Lanes' : 'Schritt 2: Gehe zum Billardtisch in Liberty Lanes'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Once you have the Melee Macchiato Perk, head to Liberty Lanes, the bowling alley located at the southern end of Liberty Falls (Coordinates: F6). Find the pool table in the back of the building.'
          : 'Sobald du den Melee Macchiato-Perk hast, gehe zu Liberty Lanes, der Bowlingbahn am südlichen Ende von Liberty Falls (Koordinaten: F6). Finde den Billardtisch im hinteren Bereich des Gebäudes.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Liberty Lanes Pool Table Placeholder" className="my-6" />

      {/* Step 3 */}
      <h2 id="step-3-strike-balls" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Strike the Pool Balls' : 'Schritt 3: Stoße die Billardkugeln an'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Using a melee attack (R3/RS/V) while holding a weapon, strike the pool balls on the table. The balls will roll into the pockets, completing the Easter Egg and awarding 100 Essence.'
          : 'Verwende einen Nahkampfangriff (R3/RS/V), während du eine Waffe hältst, und stoße die Billardkugeln auf dem Tisch an. Die Kugeln rollen in die Taschen und schließen das Easter Egg ab, was dir 100 Essenz einbringt.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Strike Pool Balls Placeholder" className="my-6" />

      {/* Note */}
      <h3 id="note" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Note' : 'Hinweis'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Ensure you are not holding a knife when striking the balls, as this won’t work with the knife equipped. Use your regular melee attack with any other weapon.'
          : 'Stelle sicher, dass du kein Messer hältst, wenn du die Kugeln triffst, da es mit einem Messer nicht funktioniert. Verwende deinen regulären Nahkampfangriff mit einer anderen Waffe.'}
      </p>
    </div>
  )
}
