'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function BowlingEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="bowling-alley-easter-egg-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
  {language === 'EN' ? 'Bowling Alley Easter Egg Guide' : 'Bowlingbahn Easter Egg Anleitung'}
</h1>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      Complete the <span className="text-blue-500 font-bold">Bowling Alley Easter Egg</span> in <span className="text-blue-500 font-bold">Black Ops 6 Zombies</span> to unlock a mini-game where zombies become your bowling pins. Here’s how to find all <span className="text-blue-500 font-bold">bowling shoe locations</span> and play the mini-game for the <span className="text-blue-500 font-bold">Deadwood Trophy</span>.
    </>
  ) : (
    <>
      Vervollständige das <span className="text-blue-500 font-bold">Bowlingbahn Easter Egg</span> im <span className="text-blue-500 font-bold">Black Ops 6 Zombies</span>-Modus, um ein Minispiel freizuschalten, bei dem Zombies deine Bowlingkegel sind. Hier ist, wie du alle <span className="text-blue-500 font-bold">Bowling-Schuh-Standorte</span> findest und das Minispiel für die <span className="text-blue-500 font-bold">Deadwood-Trophäe</span> spielst.
    </>
  )}
</p>

{/* Step 1 */}
<h2 id="step-1-locate-and-shoot-all-bowling-shoes" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
  {language === 'EN' ? 'Step 1: Locate and Shoot All Bowling Shoes' : 'Schritt 1: Alle Bowlingschuhe finden und abschießen'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      Shoot five pairs of <span className="text-blue-500 font-bold">bowling shoes</span> hidden across <span className="text-blue-500 font-bold">Liberty Falls</span> to unlock the bowling mini-game.
    </>
  ) : (
    <>
      Schieße auf fünf Paar <span className="text-blue-500 font-bold">Bowling-Schuhe</span>, die über <span className="text-blue-500 font-bold">Liberty Falls</span> verteilt sind, um das Bowling-Minispiel freizuschalten.
    </>
  )}
</p>

{/* Shoe Locations */}
{/* Location 1 */}
<h3 id="shoe-location-1-gas-station" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  {language === 'EN' ? 'Shoe Location 1: Gas Station' : 'Schuhstandort 1: Tankstelle'}
</h3>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      At the <span className="text-blue-500 font-bold">gas station</span> near the motel, look through the broken door to see shoes on the counter.
    </>
  ) : (
    <>
      Bei der <span className="text-blue-500 font-bold">Tankstelle</span> in der Nähe des Motels. Sieh durch die zerbrochene Tür, um Schuhe auf der Theke zu sehen.
    </>
  )}
</p>
<img src="https://placehold.co/600x400/EEE/31343C" alt="Gas Station Shoes Placeholder" className="my-6" />

{/* Location 2 */}
<h3 id="shoe-location-2-hardware-store" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  {language === 'EN' ? 'Shoe Location 2: Frank’s Hardware Store' : 'Schuhstandort 2: Frank’s Hardware Laden'}
</h3>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      Inside <span className="text-blue-500 font-bold">Frank’s Hardware Store</span>, near the Radio House. The shoes are on a broken shelf on the right.
    </>
  ) : (
    <>
      Im <span className="text-blue-500 font-bold">Frank’s Hardware Laden</span>, in der Nähe des Radiohauses. Die Schuhe befinden sich auf einem kaputten Regal auf der rechten Seite.
    </>
  )}
</p>
<img src="https://placehold.co/600x400/EEE/31343C" alt="Hardware Store Shoes Placeholder" className="my-6" />


      {/* Location 3 */}
<h3 id="shoe-location-3-residential-house" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  {language === 'EN' ? 'Shoe Location 3: Residential House' : 'Schuhstandort 3: Wohnhaus'}
</h3>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      Go south from <span className="text-blue-500 font-bold">Frank’s Hardware</span> and take the first right.
      Head up the stairs to find shoes under a chair inside the house.
    </>
  ) : (
    <>
      Gehe südlich von <span className="text-blue-500 font-bold">Frank’s Hardware</span> und nimm die erste rechts.
      Gehe die Treppe hinauf, um Schuhe unter einem Stuhl im Haus zu finden.
    </>
  )}
</p>
<img src="https://placehold.co/600x400/EEE/31343C" alt="Residential House Shoes Placeholder" className="my-6" />

{/* Location 4 */}
<h3 id="shoe-location-4-graveyard" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  {language === 'EN' ? 'Shoe Location 4: Graveyard' : 'Schuhstandort 4: Friedhof'}
</h3>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      In the <span className="text-blue-500 font-bold">cemetery</span>, go past the gravestones to the wall with a broken fence. The shoes are hanging on a tree.
    </>
  ) : (
    <>
      Auf dem <span className="text-blue-500 font-bold">Friedhof</span>, gehe an den Grabsteinen vorbei zur Mauer mit einem kaputten Zaun. Die Schuhe hängen an einem Baum.
    </>
  )}
</p>
<img src="https://placehold.co/600x400/EEE/31343C" alt="Graveyard Shoes Placeholder" className="my-6" />

{/* Location 5 */}
<h3 id="shoe-location-5-burial-services" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  {language === 'EN' ? 'Shoe Location 5: Benson Burial Services' : 'Schuhstandort 5: Benson Beerdigungsservice'}
</h3>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      Directly opposite <span className="text-blue-500 font-bold">Liberty Lanes</span>, peek inside <span className="text-blue-500 font-bold">Benson Burial Services</span> and look for the shoes on the counter.
    </>
  ) : (
    <>
      Direkt gegenüber von <span className="text-blue-500 font-bold">Liberty Lanes</span>, schau in <span className="text-blue-500 font-bold">Benson Burial Services</span> und suche die Schuhe auf der Theke.
    </>
  )}
</p>
<img src="https://placehold.co/600x400/EEE/31343C" alt="Benson Burial Services Shoes Placeholder" className="my-6" />

{/* Step 2 */}
<h2 id="step-2-play-mini-game" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
  {language === 'EN' ? 'Step 2: Play the Bowling Mini-Game' : 'Schritt 2: Bowling Minispiel spielen'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      After finding all shoes, you’ll be transported to a <span className="text-blue-500 font-bold">mini-game</span> where zombies act as bowling pins. Aim to score at least <span className="text-blue-500 font-bold">300 points</span> in two minutes by hitting as many zombies as possible.
    </>
  ) : (
    <>
      Nachdem du alle Schuhe gefunden hast, wirst du in ein <span className="text-blue-500 font-bold">Minispiel</span> versetzt, in dem Zombies als Bowlingkegel fungieren. Versuche, in zwei Minuten mindestens <span className="text-blue-500 font-bold">300 Punkte</span> zu erzielen, indem du so viele Zombies wie möglich triffst.
    </>
  )}
</p>
<img src="https://placehold.co/600x400/EEE/31343C" alt="Bowling Mini-Game Placeholder" className="my-6" />

{/* Restart Option */}
<h3 id="restart-mini-game" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  {language === 'EN' ? 'Restart the Mini-Game' : 'Minispiel neu starten'}
</h3>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      If you want to try the mini-game again, shoot the hidden pair of shoes in the <span className="text-blue-500 font-bold">Liberty Lanes bathroom</span> to restart and improve your score.
    </>
  ) : (
    <>
      Wenn du das Minispiel erneut versuchen möchtest, schieße auf das versteckte Paar Schuhe im <span className="text-blue-500 font-bold">Liberty Lanes-Badezimmer</span>, um es neu zu starten und deine Punktzahl zu verbessern.
    </>
  )}
</p>
<img src="https://placehold.co/600x400/EEE/31343C" alt="Mini-Game Restart Placeholder" className="my-6" />

    </div>
  )
}
