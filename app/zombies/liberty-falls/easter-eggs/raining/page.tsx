'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function FallingZombiesEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="raining-zombies-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Raining Zombies Easter Egg Guide' : 'Zombieregen Easter Egg Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Trigger this unique Easter Egg to make zombies rain down from the sky, each dropping a random reward. Here’s how to make it happen!'
          : 'Aktiviere dieses einzigartige Easter Egg, um Zombies vom Himmel regnen zu lassen – jeder lässt eine zufällige Belohnung fallen. So funktioniert es!'}
      </p>

      {/* Step 1 */}
      <h2 id="step-1-church-spiked-head" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Locate the Church Spiked Head' : 'Schritt 1: Kopf auf der Kirchturmspitze finden'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Head to the church and look up at the spikes on top. One spike has a zombie head mounted on it—this is your target.'
          : 'Gehe zur Kirche und schaue auf die Spitzen oben. Eine Spitze hat einen Zombie-Kopf montiert – das ist dein Ziel.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Church Spiked Head Placeholder" className="my-6" />

      {/* Step 2 */}
      <h2 id="step-2-hit-with-grenade" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Hit the Head with a Grenade' : 'Schritt 2: Triff den Kopf mit einer Granate'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Cook a grenade and aim carefully. Throw it to hit the zombie head. Once you make contact, zombies will begin to fall from the sky.'
          : 'Bereite eine Granate vor und ziele sorgfältig. Wirf sie so, dass sie den Zombie-Kopf trifft. Nach dem Treffer beginnen Zombies vom Himmel zu fallen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Grenade Hit Placeholder" className="my-6" />

      {/* Step 3 */}
      <h2 id="step-3-collect-rewards" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Collect Rewards from Falling Zombies' : 'Schritt 3: Belohnungen von fallenden Zombies sammeln'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Each falling zombie drops a random reward such as points, armor plates, or killstreaks. Beware, if a zombie lands on you, it will reduce your health.'
          : 'Jeder fallende Zombie lässt eine zufällige Belohnung wie Punkte, Rüstungsplatten oder Killstreaks fallen. Vorsicht, wenn ein Zombie auf dich landet, verliert dein Charakter Gesundheit.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Collect Rewards Placeholder" className="my-6" />
    </div>
  )
}
