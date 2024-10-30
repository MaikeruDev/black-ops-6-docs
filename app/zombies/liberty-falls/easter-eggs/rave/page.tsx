'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function ZombieRaveEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="zombie-rave-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Zombie Rave Easter Egg Guide' : 'Zombie-Rave-Easter-Egg-Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            This Easter Egg is purely for fun! Activating it won’t grant you any items or advantages, but it does create a <span className="text-blue-500 font-bold">hilarious scene</span> where zombies throw a dance party.
          </>
        ) : (
          <>
            Dieses Easter Egg ist nur zum Spaß! Durch das Aktivieren erhältst du keine Gegenstände oder Vorteile, aber es erschafft eine <span className="text-blue-500 font-bold">lustige Szene</span>, in der Zombies eine Tanzparty feiern.
          </>
        )}
      </p>

      {/* Step 1 */}
      <h2 id="step-1-riverside-binoculars" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Head to the Riverside Binoculars' : 'Schritt 1: Gehe zu den Ferngläsern am Flussufer'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Head to the <span className="text-blue-500 font-bold">Riverside area</span> in the northeast part of the map (around H3/H4). There, you’ll find two sets of binoculars set up near each other, each facing a nearby hillside.
          </>
        ) : (
          <>
            Gehe zum <span className="text-blue-500 font-bold">Flussufer</span> im nordöstlichen Teil der Karte (um H3/H4). Dort findest du zwei Ferngläser nebeneinander, die auf einen nahegelegenen Hügel ausgerichtet sind.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Riverside Binoculars Placeholder" className="my-6" />

      {/* Step 2 */}
      <h2 id="step-2-interact-binoculars" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Interact with Each Binocular' : 'Schritt 2: Mit jedem Fernglas interagieren'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Use each set of <span className="text-blue-500 font-bold">binoculars</span> to focus on a dancing zombie on the hillside. Each view costs <span className="text-blue-500 font-bold">50 Essence</span>. When both are aligned on the dancing zombie, the rave will start!
          </>
        ) : (
          <>
            Benutze jedes <span className="text-blue-500 font-bold">Fernglas</span>, um auf einen tanzenden Zombie auf dem Hügel zu fokussieren. Jede Ansicht kostet <span className="text-blue-500 font-bold">50 Essenz</span>. Wenn beide auf den tanzenden Zombie gerichtet sind, beginnt die Party!
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Align Binoculars Placeholder" className="my-6" />

      {/* Step 3 */}
      <h2 id="step-3-enjoy-rave" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Enjoy the Zombie Rave' : 'Schritt 3: Genieße den Zombie-Rave'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Once activated, nearby zombies will be drawn to a <span className="text-blue-500 font-bold">“party” zone</span> and start dancing on top of a nearby bus, giving you a quick break or a hilarious scene.
          </>
        ) : (
          <>
            Nach der Aktivierung werden nahegelegene Zombies in eine <span className="text-blue-500 font-bold">„Party“-Zone</span> gezogen und beginnen, auf einem nahegelegenen Bus zu tanzen. Das gibt dir eine kurze Pause oder eine lustige Szene.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Zombie Rave Scene Placeholder" className="my-6" />

    </div>
  )
}
