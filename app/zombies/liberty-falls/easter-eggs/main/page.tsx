'use client'
import Image from 'next/image'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'
import { Info } from 'lucide-react'

export default function LibertyFallsEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>

      {/* Introduction */}

      <h1 id="header" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Liberty Falls Main Easter Egg Guide' : 'Liberty Falls Haupt-Easter-Egg-Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Follow this step-by-step guide to complete the Liberty Falls main Easter egg in Black Ops 6 Zombies.'
          : 'Befolge diese Schritt-für-Schritt-Anleitung, um das Haupt-Easter-Egg in Liberty Falls im Black Ops 6 Zombies-Modus abzuschließen.'}
      </p>

      <h2 id='rewards' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
  {language === 'EN' ? 'Rewards for Completing the Easter Egg' : 'Belohnungen für das Abschließen des Easter Eggs'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      By successfully completing the <span className="text-blue-500 font-bold">Liberty Falls Easter Egg</span>, players will unlock the following exclusive rewards:
    </>
  ) : (
    <>
      Durch das erfolgreiche Abschließen des <span className="text-blue-500 font-bold">Liberty Falls Easter Eggs</span> schalten Spieler die folgenden exklusiven Belohnungen frei:
    </>
  )}
</p>

<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
  {language === 'EN' ? 'Bye-Bye, Dark Aether Achievement' : 'Bye-Bye, Dark Aether-Erfolg'}
</h3>
<p className="leading-7 [&:not(:first-child)]:mt-6">
  {language === 'EN' ? (
    <>
      Earn the <span className="text-blue-500 font-bold">Bye-Bye, Dark Aether achievement</span> as a trophy for completing the main Easter Egg. This adds to your gamer profile, marking your mastery of Liberty Falls.
    </>
  ) : (
    <>
      Erhalte den <span className="text-blue-500 font-bold">Bye-Bye, Dark Aether-Erfolg</span> als Trophäe für das Abschließen des Haupt-Easter-Eggs. Dies wird deinem Spielerprofil hinzugefügt und zeigt deine Beherrschung von Liberty Falls.
    </>
  )}
</p>

      {/* Step 1 */}

      <h2 id="unlock-chirch" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Open the Church and Activate the Machine' : 'Schritt 1: Kirche öffnen und Maschine aktivieren'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? (
            <>
              To access the <strong>Hilltop Church</strong>, you need to unlock several areas by spending points.
              This is <strong>crucial for the storyline</strong> and gives access to the <span className="text-blue-500 font-bold">Pack-a-Punch machine</span>, essential for later challenges.
            </>
          ) : (
            <>
              Um Zugang zur <strong>Kirche auf dem Hügel</strong> zu erhalten, musst du mehrere Bereiche durch den Einsatz von Punkten freischalten.
              Dies ist <strong>entscheidend für die Storyline</strong> und ermöglicht den Zugriff auf die <span className="text-blue-500 font-bold">Pack-a-Punch-Maschine</span>, die für spätere Herausforderungen wichtig ist.
            </>
          )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Clear the Initial Rounds' : '1. Anfangsrunden bestehen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? (
            <>
              Start by clearing the first few rounds at the spawn location to gather points. Focus on <strong>conserving ammo</strong> and maximizing points by <strong>melee attacks</strong> whenever possible.
            </>
          ) : (
            <>
              Beginne damit, die ersten Runden am Spawn-Standort zu bestehen, um Punkte zu sammeln. Achte darauf, <strong>Munition zu sparen</strong> und Punkte durch <strong>Nahkampf-Angriffe</strong> zu maximieren, wann immer möglich.
            </>
          )}
      </p>


      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Unlock the Path to the Church' : '2. Zugang zur Kirche freischalten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Head towards Olly’s shop by unlocking the <strong>barrier between the ice cream parlor and the Fast-Forward store</strong>.
            This first barrier costs <span className="text-blue-500 font-bold">around 1,500 points</span>.
          </>
        ) : (
          <>
            Begebe dich zu Olly’s Laden, indem du die <strong>Barriere zwischen der Eisdiele und dem Fast-Forward-Laden</strong> freischaltest.
            Diese erste Barriere kostet <span className="text-blue-500 font-bold">etwa 1.500 Punkte</span>.
          </>
        )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Access the Cemetery' : '3. Zugang zum Friedhof'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Proceed up the stairs near Olly’s and <strong>unlock the gate</strong> that leads to the cemetery.
            This requires <span className="text-blue-500 font-bold">around 2,000 points</span> and brings you closer to the church.
          </>
        ) : (
          <>
            Gehe die Treppe bei Olly’s hoch und <strong>schalte das Tor frei</strong>, das zum Friedhof führt.
            Dies erfordert <span className="text-blue-500 font-bold">etwa 2.000 Punkte</span> und bringt dich näher zur Kirche.
          </>
        )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '4. Enter the Church' : '4. Die Kirche betreten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Finally, unlock the <strong>main entrance of the church</strong> for <span className="text-blue-500 font-bold">2,250 points</span>.
            Inside, <strong>interact with the machine on the right side</strong> to trigger storyline dialogue and initiate the next steps in the quest.
          </>
        ) : (
          <>
            Schließlich schalte den <strong>Haupteingang der Kirche</strong> für <span className="text-blue-500 font-bold">2.250 Punkte</span> frei.
            Drinnen <strong>aktiviere die Maschine auf der rechten Seite</strong>, um die Storyline zu starten und die nächsten Schritte der Quest zu beginnen.
          </>
        )}
      </p>

      <Image src="/church.png" alt="Image of the Church" width={600} height={400} />

      {/* Step 2 */}

      <h2 id='craft-jet-gun' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Craft the Jet Gun' : 'Schritt 2: Jetgun herstellen'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            To progress further in the Easter Egg quest, you’ll need to craft the
            <span className="text-blue-500 font-bold"> Jet Gun</span>, a unique Wonder Weapon with the power to vacuum up important quest items and defend against waves of zombies.
          </>
        ) : (
          <>
            Um im Easter Egg weiter voranzukommen, musst du die
            <span className="text-blue-500 font-bold"> Jetgun</span> herstellen, eine einzigartige Wunderwaffe mit der Fähigkeit, wichtige Quest-Gegenstände aufzusaugen und dich gegen Zombie-Wellen zu verteidigen.
          </>
        )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Collect the Water Pressure Valve' : '1. Wasserdruckventil sammeln'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Head to <span className="text-blue-500 font-bold">Washington Avenue near E4</span> and look outside <span className="text-blue-500 font-bold">Lilly’s Flowerpot store</span> for a hose and water valve.
            Collect the valve and take it to <span className="text-blue-500 font-bold">Liberty Lanes (E7)</span>. Attach it to the water gauge and build up pressure by turning the valve.
            <em className="text-blue-500"> Keep an eye out for zombies</em> as they’ll interrupt the process.
          </>
        ) : (
          <>
            Gehe zur <span className="text-blue-500 font-bold">Washington Avenue in der Nähe von E4</span> und suche außerhalb von <span className="text-blue-500 font-bold">Lilly’s Blumenladen</span> nach einem Schlauch und einem Wasserventil.
            Sammle das Ventil und bringe es zur <span className="text-blue-500 font-bold">Liberty Lanes Bowlingbahn (E7)</span>. Befestige es am Wassermesser und erhöhe den Druck, indem du das Ventil drehst.
            <em className="text-blue-500"> Achte auf Zombies</em>, die den Prozess unterbrechen können.
          </>
        )}
      </p>

      <Image src="/water_valve_store.png" alt="Image of the location of the water pressure valve" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Retrieve the Handbrake' : '2. Handbremse besorgen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Go to the <span className="text-blue-500 font-bold">cemetery (B4)</span> where a special zombie known as the Groundskeeper will spawn.
            Eliminate him to obtain the <span className="text-blue-500 font-bold">key to the toolshed</span>. Head to the shed at <span className="text-blue-500 font-bold">D4</span>, unlock it, and collect the Handbrake from inside.
          </>
        ) : (
          <>
            Gehe zum <span className="text-blue-500 font-bold">Friedhof (B4)</span>, wo ein spezieller Zombie namens Friedhofswärter erscheinen wird.
            Besiege ihn, um den <span className="text-blue-500 font-bold">Schlüssel für den Werkzeugschuppen</span> zu erhalten. Gehe zum Schuppen bei <span className="text-blue-500 font-bold">D4</span>, schließe ihn auf und hole die Handbremse von innen.
          </>
        )}
      </p>

      <Image src="/shed.png" alt="Image of the location of the handbrake" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Find Electrical Wires' : '3. Stromkabel finden'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Head to the <span className="text-blue-500 font-bold">Radio House (H3)</span>. Use a <span className="text-blue-500 font-bold">Mangler Cannon</span> to break open the gated entrance.
            Inside, search the trash piles to locate the electrical wires needed for the Jet Gun.
          </>
        ) : (
          <>
            Gehe zum <span className="text-blue-500 font-bold">Radiohaus (H3)</span>. Verwende eine <span className="text-blue-500 font-bold">Mangler-Kanone</span>, um den Gittereingang zu öffnen.
            Drinnen durchsuche die Müllhaufen, um die Stromkabel zu finden, die für die Jetgun benötigt werden.
          </>
        )}
      </p>

      <Image src="/electrical_wires.jpg" alt="Image of the location of the electrical wires" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '4. Assemble the Jet Gun' : '4. Jetgun zusammenbauen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            With all parts collected, head to the <span className="text-blue-500 font-bold">Motel on the second floor</span>, where you’ll find a dedicated <span className="text-blue-500 font-bold">crafting table</span> for the Jet Gun.
            Assemble the weapon here. The Jet Gun will allow you to progress further in the Easter Egg by vacuuming key items and clearing paths.
          </>
        ) : (
          <>
            Mit allen gesammelten Teilen gehe zum <span className="text-blue-500 font-bold">Motel in den zweiten Stock</span>, wo du einen speziellen <span className="text-blue-500 font-bold">Arbeitstisch</span> für die Jetgun findest.
            Baue die Waffe hier zusammen. Die Jetgun ermöglicht es dir, im Easter Egg weiter voranzukommen, indem sie wichtige Gegenstände aufsaugt und Wege freiräumt.
          </>
        )}
      </p>

      {/* Step 3 */}

      <h2 id='collect-ltg' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Collect LTG Device Parts' : 'Schritt 3: LTG-Geräteteile sammeln'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            The <span className="text-blue-500 font-bold">LTG Device</span> requires three unique parts scattered across Liberty Falls. You’ll need the
            <span className="text-blue-500 font-bold"> Jet Gun</span>’s vacuum feature to collect each one, as they’re located in hard-to-reach spots.
          </>
        ) : (
          <>
            Das <span className="text-blue-500 font-bold">LTG-Gerät</span> erfordert drei einzigartige Teile, die über Liberty Falls verstreut sind. Du benötigst die
            <span className="text-blue-500 font-bold"> Jetgun</span> Vakuumfunktion, um jedes Teil zu sammeln, da sie an schwer zugänglichen Stellen platziert sind.
          </>
        )}
      </p>


      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Church Part' : '1. Kirchenteil'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Head to the church and use the <strong>Jet Gun</strong> to vacuum up a part located above the balcony.
            It looks like a floating hat or helmet. Position yourself at the base of the balcony and aim the Jet Gun upward to reach it.
          </>
        ) : (
          <>
            Gehe zur Kirche und benutze die <strong>Jetgun</strong>, um ein Teil über dem Balkon aufzusaugen.
            Es sieht aus wie ein schwebender Hut oder Helm. Positioniere dich am Fuß des Balkons und richte die Jetgun nach oben, um es zu erreichen.
          </>
        )}
      </p>
      
      <Image src="/church_hat.jpg" alt="Image of the location of the floating churt part" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Comic Store Part' : '2. Comic-Store-Teil'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Inside Ollie’s Comics, look up toward the ceiling, where you’ll find a part floating in a hole.
            Use the <strong>Jet Gun</strong> to vacuum it up from below. This is easiest to reach by positioning yourself directly under the ceiling opening in the store.
          </>
        ) : (
          <>
            Im Ollie’s Comics schaue zur Decke, wo du ein Teil in einem Loch schweben siehst.
            Verwende die <strong>Jetgun</strong>, um es von unten aufzusaugen. Am einfachsten erreichst du es, indem du dich direkt unter der Öffnung in der Decke positionierst.
          </>
        )}
      </p>
      
      <Image src="/comic_store_part.png" alt="Image of the location of the floating comic store part" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Barbershop Part' : '3. Friseursalon-Teil'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Near the Barbershop, located by the Speed Cola machine, you’ll find the last LTG part in a second-floor window.
            Jump onto the truck parked outside the shop to position yourself under the window, then use the <strong>Jet Gun</strong> to vacuum up the part from this angle.
          </>
        ) : (
          <>
            In der Nähe des Friseursalons, der sich bei der Speed Cola befindet, findest du das letzte LTG-Teil in einem Fenster im zweiten Stock.
            Springe auf den Lastwagen, der vor dem Laden geparkt ist, um dich unter dem Fenster zu positionieren, und benutze dann die <strong>Jetgun</strong>, um das Teil aus dieser Position aufzusaugen.
          </>
        )}
      </p>
      
      <Image src="/barber-shop.png" alt="Image of the location of the barbershop part" width={600} height={400} />

      {/* Step 4 */}

      <h2 id='assemble-ltg' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 4: Assemble the LTG Device on the Bank Rooftop' : 'Schritt 4: LTG-Gerät auf dem Bankdach zusammensetzen'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            After collecting all three <span className="text-blue-500 font-bold">LTG parts</span>, head to the
            <span className="text-blue-500 font-bold"> bank rooftop</span> to assemble the device. The
            <span className="text-blue-500 font-bold"> LTG</span> is essential for capturing <span className="text-blue-500 font-bold">High-Value Targets (HVTs)</span> in later stages.
          </>
        ) : (
          <>
            Nachdem du alle drei <span className="text-blue-500 font-bold">LTG-Teile</span> gesammelt hast, gehe zum
            <span className="text-blue-500 font-bold"> Bankdach</span>, um das Gerät zusammenzusetzen. Das
            <span className="text-blue-500 font-bold"> LTG</span> ist entscheidend für das Einfangen von <span className="text-blue-500 font-bold">Zielen mit hohem Wert</span> in späteren Stufen.
          </>
        )}
      </p>


      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Access the Bank Rooftop' : '1. Bankdach erreichen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            To reach the bank rooftop, use either the <span className="text-blue-500 font-bold">zipline</span> or the
            <span className="text-blue-500 font-bold"> ascender</span> located nearby. Ziplines are marked on the map, and once on the roof, proceed to the specific
            <span className="text-blue-500 font-bold"> crafting bench dedicated to the LTG device</span>.
          </>
        ) : (
          <>
            Um das Bankdach zu erreichen, benutze entweder die <span className="text-blue-500 font-bold">Seilrutsche</span> oder den
            <span className="text-blue-500 font-bold"> Aufzug</span> in der Nähe. Seilrutschen sind auf der Karte markiert, und sobald du auf dem Dach bist, gehe zur
            <span className="text-blue-500 font-bold"> speziellen Werkbank für das LTG-Gerät</span>.
          </>
        )}
      </p>
 
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Assemble the LTG' : '2. LTG zusammensetzen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Once at the crafting bench, combine all three parts to complete the
            <span className="text-blue-500 font-bold"> LTG</span>. This device will be used shortly to capture the essence of
            <span className="text-blue-500 font-bold ml-1">HVTs</span>, a key part of the Easter Egg progression.
          </>
        ) : (
          <>
            Sobald du an der Werkbank bist, kombiniere alle drei Teile, um das
            <span className="text-blue-500 font-bold"> LTG</span> zu vervollständigen. Dieses Gerät wird bald verwendet, um die Essenz von
            <span className="text-blue-500 font-bold ml-1">Zielen mit hohem Wert (HVTs)</span> einzufangen, ein entscheidender Schritt im Easter Egg.
          </>
        )}
      </p>
      
      <Image src="/assemble_ltg.png" alt="Image of the location to assemble the ltg" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Prepare for the Next Step' : '3. Vorbereitung auf den nächsten Schritt'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            With the LTG assembled, you’re now ready to collect <span className="text-blue-500 font-bold">Aether Canisters</span> and use the device for capturing HVT essences.
            The next step will guide you on how to use the LTG effectively.
          </>
        ) : (
          <>
            Mit dem zusammengebauten LTG bist du jetzt bereit, <span className="text-blue-500 font-bold">Äther-Kanister</span> zu sammeln und das Gerät zum Einfangen der Essenz von HVTs zu verwenden.
            Der nächste Schritt zeigt dir, wie du das LTG effektiv einsetzen kannst.
          </>
        )}
      </p>
  
      {/* Step 5 */}

      <h2 id='fill-canister' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 5: Fill the First Aether Canister' : 'Schritt 5: Ersten Äther-Kanister füllen'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            With the <span className="text-blue-500 font-bold">LTG device</span> assembled, it’s time to capture the essence of a
            <span className="text-blue-500 font-bold"> High-Value Target (HVT)</span> using an
            <span className="text-blue-500 font-bold"> Aether Canister</span>. Follow these steps to complete this objective and advance the Easter Egg.
          </>
        ) : (
          <>
            Mit dem zusammengebauten <span className="text-blue-500 font-bold">LTG-Gerät</span> ist es an der Zeit, die Essenz eines
            <span className="text-blue-500 font-bold"> Ziels mit hohem Wert (HVT)</span> mit einem
            <span className="text-blue-500 font-bold"> Äther-Kanister</span> einzufangen. Befolge diese Schritte, um dieses Ziel zu erreichen und das Easter Egg voranzutreiben.
          </>
        )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Collect the Aether Canister' : '1. Äther-Kanister sammeln'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Return to the <span className="text-blue-500 font-bold">church</span> and interact with the machine on the right side to pick up an
            <span className="text-blue-500 font-bold"> Aether Canister</span>. Holding this canister will slow down your movement, so plan accordingly if you’re playing solo.
          </>
        ) : (
          <>
            Gehe zurück zur <span className="text-blue-500 font-bold">Kirche</span> und interagiere mit der Maschine auf der rechten Seite, um einen
            <span className="text-blue-500 font-bold"> Äther-Kanister</span> zu erhalten. Das Tragen dieses Kanisters wird deine Bewegung verlangsamen, also plane dies entsprechend, besonders wenn du solo spielst.
          </>
        )}
      </p>

      <Image src="/aether_canister.png" alt="Image of the location where u can pick up the canister" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Place the Canister at the Gas Station' : '2. Kanister an der Tankstelle platzieren'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Head to the <span className="text-blue-500 font-bold">gas station</span> location on the map. Place the Aether Canister near the trap located under the
            <span className="text-blue-500 font-bold"> purple Aether storm</span>. Position the LTG device nearby and prepare for incoming waves of zombies.
          </>
        ) : (
          <>
            Gehe zur <span className="text-blue-500 font-bold">Tankstelle</span> auf der Karte. Platziere den Äther-Kanister in der Nähe der Falle unter dem
            <span className="text-blue-500 font-bold"> violetten Äthersturm</span>. Positioniere das LTG-Gerät in der Nähe und bereite dich auf ankommende Zombie-Wellen vor.
          </>
        )}
      </p>
      
      <Image src="/canister_gas_station.png" alt="Image of the location to place the first aether canister" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Defend the LTG and Weaken the HVT' : '3. LTG verteidigen und HVT schwächen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            As soon as you place the LTG device, it will activate a <span className="text-blue-500 font-bold">60-second timer</span>, during which zombies will swarm to attack the device.
            Defend it from damage to keep it operational. After the timer, an <span className="text-blue-500 font-bold">HVT</span> (either a Mangler or an Abomination) will spawn.
          </>
        ) : (
          <>
            Sobald du das LTG-Gerät platzierst, wird ein <span className="text-blue-500 font-bold">60-Sekunden-Timer</span> aktiviert, währenddessen Zombies das Gerät angreifen werden.
            Verteidige es vor Schaden, um es betriebsbereit zu halten. Nach dem Timer erscheint ein <span className="text-blue-500 font-bold">HVT</span> (entweder ein Mangler oder eine Abscheulichkeit).
          </>
        )}
      </p>

      <Image src="/ltg_storm_gas_station.png" alt="Image of the location to place the ltg" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '4. Capture the HVT Essence' : '4. HVT-Essenz einfangen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Weaken the <span className="text-blue-500 font-bold">HVT</span> without killing it immediately. When the HVT begins emitting
            <span className="text-blue-500 font-bold"> purple sparks</span>, guide it toward the Aether Canister, then activate the trap to capture its essence. If done correctly, the essence will be stored in the canister.
          </>
        ) : (
          <>
            Schwäche den <span className="text-blue-500 font-bold">HVT</span>, ohne ihn sofort zu töten. Wenn der HVT
            <span className="text-blue-500 font-bold"> violette Funken</span> ausstößt, führe ihn zum Äther-Kanister und aktiviere die Falle, um seine Essenz einzufangen. Wenn alles korrekt gemacht wurde, wird die Essenz im Kanister gespeichert.
          </>
        )}
      </p>
      
      <Image src="/capture_gas_station.png" alt="Image of the location to capture the essence" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '5. Return to the Church with the Filled Canister' : '5. Mit dem gefüllten Kanister zur Kirche zurückkehren'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Once the essence is captured, take the canister back to the <span className="text-blue-500 font-bold">church</span>. This step is
            <span className="text-blue-500 font-bold"> timed</span>, so move quickly to ensure the essence doesn’t dissipate. Place the canister back into the machine to progress to the next phase.
          </>
        ) : (
          <>
            Sobald die Essenz eingefangen ist, bringe den Kanister zurück zur <span className="text-blue-500 font-bold">Kirche</span>. Dieser Schritt ist
            <span className="text-blue-500 font-bold"> zeitlich begrenzt</span>, also bewege dich schnell, um sicherzustellen, dass die Essenz nicht verschwindet. Platziere den Kanister wieder in der Maschine, um zur nächsten Phase zu gelangen.
          </>
        )}
      </p>
      

      {/* Step 6 */}

      <h2 id='sync-devices' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 6: Sync Devices with the Strauss Counter' : 'Schritt 6: Geräte mit dem Strauss-Zähler synchronisieren'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            After returning the filled <span className="text-blue-500 font-bold">Aether Canister</span> to the
            <span className="text-blue-500 font-bold"> church</span>, you’ll receive the <span className="text-blue-500 font-bold">Strauss Counter</span>.
            This device is used to match colors on specific projectors around <span className="text-blue-500 font-bold">Liberty Falls</span>,
            which is necessary to advance the Easter Egg.
          </>
        ) : (
          <>
            Nach Rückgabe des gefüllten <span className="text-blue-500 font-bold">Äther-Kanisters</span> in die
            <span className="text-blue-500 font-bold"> Kirche</span> erhältst du den <span className="text-blue-500 font-bold">Strauss-Zähler</span>.
            Dieses Gerät wird verwendet, um die Farben auf bestimmten Projektoren in <span className="text-blue-500 font-bold">Liberty Falls</span>
            abzugleichen, was notwendig ist, um das Easter Egg voranzutreiben.
          </>
        )}
      </p>

      <p className="p-4 bg-blue-200 text-black rounded-lg flex items-start space-x-3 mt-6">
        <Info className="text-blue-700 mt-1" size={20} />
        <span className="leading-7">
          {language === 'EN'
            ? 'The colors are adjusted as follows: If the counter is green, make the projector red. If it is yellow, make it yellow as well. And if the counter is red, set the projector to green.'
            : ' Die Farben werden wie folgt angepasst: Ist der Zähler Grün, mach den Projektor Rot. Ist er Gelb, mach ihn ebenfalls Gelb. Und ist der Zähler Rot, so stell den Projektor auf Grün.'}
        </span>
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Locate Projector 1: Hillside near Bowling Alley' : '1. Projektor 1 finden: Hang bei der Bowlingbahn'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            The first projector is on the <span className="text-blue-500 font-bold">hillside near the bowling alley</span>.
            Activate the <span className="text-blue-500 font-bold">Strauss Counter</span> here and match the color displayed on the counter with the projector.
            This color may vary between <span className="text-blue-500 font-bold">green</span>, <span className="text-blue-500 font-bold">red</span>, or
            <span className="text-blue-500 font-bold">yellow</span> depending on your specific playthrough.
          </>
        ) : (
          <>
            Der erste Projektor befindet sich am <span className="text-blue-500 font-bold">Hang in der Nähe der Bowlingbahn</span>.
            Aktiviere den <span className="text-blue-500 font-bold">Strauss-Zähler</span> hier und stimme die Farbe des Zählers mit der des Projektors ab.
            Diese Farbe kann zwischen <span className="text-blue-500 font-bold">grün</span>, <span className="text-blue-500 font-bold">rot</span> oder
            <span className="text-blue-500 font-bold">gelb</span> variieren, abhängig vom individuellen Spielverlauf.
          </>
        )}
      </p>
      
      <Image src="/projector1.jpg" alt="Image of the location of a projector" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Locate Projector 2: Backyard near the White House' : '2. Projektor 2 finden: Hinterhof beim Weißen Haus'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            The second projector is located <span className="text-blue-500 font-bold">behind the White House</span>, near the Groundskeeper’s Tool Shed.
            Use the <span className="text-blue-500 font-bold">Strauss Counter</span> to adjust the projector color to match the color shown on the counter.
          </>
        ) : (
          <>
            Der zweite Projektor befindet sich <span className="text-blue-500 font-bold">hinter dem Weißen Haus</span>, in der Nähe des Werkzeugschuppens des Friedhofswärters.
            Verwende den <span className="text-blue-500 font-bold">Strauss-Zähler</span>, um die Projektorfarbe an die auf dem Zähler angezeigte Farbe anzupassen.
          </>
        )}
      </p>

      <Image src="/projector2.jpg" alt="Image of the location of a projector" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Locate Projector 3: Bank Rooftop' : '3. Projektor 3 finden: Bankdach'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            The final projector is located on the <span className="text-blue-500 font-bold">bank rooftop</span>. Once you reach it, use the
            <span className="text-blue-500 font-bold"> Strauss Counter</span> to sync the color with the displayed color on the device.
            Ensure all projectors are synced properly.
          </>
        ) : (
          <>
            Der letzte Projektor befindet sich auf dem <span className="text-blue-500 font-bold">Bankdach</span>. Sobald du ihn erreichst, verwende den
            <span className="text-blue-500 font-bold"> Strauss-Zähler</span>, um die Farbe mit der auf dem Gerät angezeigten Farbe zu synchronisieren.
            Achte darauf, dass alle Projektoren korrekt synchronisiert sind.
          </>
        )}
      </p>
      
      <Image src="/projector3.jpg" alt="Image of the location of a projector" width={600} height={400} />

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '4. Troubleshooting the Sync' : '4. Problembehebung bei der Synchronisation'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            If the projectors fail to sync correctly, try resetting all projectors by turning them to
            <span className="text-blue-500 font-bold"> green</span> and reattempting the color sequence. When synced, a
            <span className="text-blue-500 font-bold"> purple beam</span> will emit, marking the next objective.
          </>
        ) : (
          <>
            Wenn die Projektoren nicht korrekt synchronisiert werden, versuche, alle Projektoren auf
            <span className="text-blue-500 font-bold"> grün</span> zu stellen und die Farbsequenz erneut zu versuchen. Wenn die Synchronisation erfolgreich ist,
            wird ein <span className="text-blue-500 font-bold"> violetter Strahl</span> ausgesendet, der das nächste Ziel markiert.
          </>
        )}
      </p>  

      {/* Step 7 */}

      <h2 id='prepare-fight' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 7: Prepare for the Final Boss Fight' : 'Schritt 7: Vorbereitung auf den Endbosskampf'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            With all devices synced and objectives completed, it’s time to prepare for the final showdown.
            The boss fight will take place inside the <span className="text-blue-500 font-bold">church</span> and features waves of powerful enemies.
          </>
        ) : (
          <>
            Nachdem alle Geräte synchronisiert und die Ziele erreicht sind, ist es Zeit für den finalen Showdown.
            Der Bosskampf findet in der <span className="text-blue-500 font-bold">Kirche</span> statt und beinhaltet Wellen mächtiger Gegner.
          </>
        )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Gear Up with Essential Perks and Weapons' : '1. Mit wichtigen Perks und Waffen ausrüsten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Make sure you have essential perks like <span className="text-blue-500 font-bold">Juggernog</span> and
            <span className="text-blue-500 font-bold"> Quick Revive</span>, as they increase your survivability.
            <span className="text-blue-500 font-bold">Tier 2 Pack-a-Punched</span> weapons are recommended, especially high-damage options like
            <span className="text-blue-500 font-bold"> shotguns</span> or <span className="text-blue-500 font-bold">LMGs</span>.
          </>
        ) : (
          <>
            Stelle sicher, dass du wichtige Perks wie <span className="text-blue-500 font-bold">Juggernog</span> und
            <span className="text-blue-500 font-bold"> Schnellwiederbelebung</span> hast, da sie deine Überlebenschancen erhöhen.
            <span className="text-blue-500 font-bold">Waffen der Stufe 2 von Pack-a-Punch</span> sind empfehlenswert, insbesondere solche mit hohem Schaden
            wie <span className="text-blue-500 font-bold">Schrotflinten</span> oder <span className="text-blue-500 font-bold">LMGs</span>.
          </>
        )}
      </p> 

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Equip Helpful Gadgets' : '2. Nützliche Gadgets ausrüsten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Bring <span className="text-blue-500 font-bold">Decoy Grenades</span> or <span className="text-blue-500 font-bold">Monkey Bombs</span> to distract zombies, giving you breathing room.
            Consider <span className="text-blue-500 font-bold">Napalm ammo mods</span> for added fire damage, as this will help take down boss enemies quickly.
          </>
        ) : (
          <>
            Bringe <span className="text-blue-500 font-bold">Täuschgranaten</span> oder <span className="text-blue-500 font-bold">Affenbomben</span> mit, um Zombies abzulenken und dir Luft zu verschaffen.
            Erwäge den <span className="text-blue-500 font-bold">Napalm-Munition-Mod</span> für zusätzlichen Feuerschaden, da dies hilft, Boss-Gegner schneller zu besiegen.
          </>
        )}
      </p> 

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Initiate the Boss Fight' : '3. Den Bosskampf einleiten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            To start the fight, return to the <span className="text-blue-500 font-bold">church</span> and interact with the machine one final time.
            This will trigger the encounter, locking you in the church where you’ll face multiple waves of enemies.
          </>
        ) : (
          <>
            Um den Kampf zu beginnen, kehre zur <span className="text-blue-500 font-bold">Kirche</span> zurück und interagiere ein letztes Mal mit der Maschine.
            Dies löst den Kampf aus und schließt dich in der Kirche ein, wo du mehreren Wellen von Gegnern gegenüberstehst.
          </>
        )}
      </p> 

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '4. Survive the Waves' : '4. Die Wellen überstehen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            The fight consists of three waves: hordes of zombies, followed by an elite <span className="text-blue-500 font-bold">Mangler</span>, and finally, an
            <span className="text-blue-500 font-bold"> Abomination</span>. Manage each wave carefully, using your equipment to handle large groups and target priority enemies first.
          </>
        ) : (
          <>
            Der Kampf besteht aus drei Wellen: <span className="text-blue-500 font-bold">Zombie-Horden</span>, gefolgt von einem Elite-
            <span className="text-blue-500 font-bold"> Mangler</span> und schließlich einer <span className="text-blue-500 font-bold">Abscheulichkeit</span>.
            Verwalte jede Welle sorgfältig, nutze deine Ausrüstung, um große Gruppen zu bewältigen, und priorisiere die wichtigsten Gegner.
          </>
        )}
      </p> 

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '5. Completing the Quest' : '5. Abschluss der Quest'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            After defeating the final <span className="text-blue-500 font-bold">Abomination</span>, a cutscene will play where your character or squad is knocked down, signaling the end of the quest.
            Congratulations, you’ve completed the <span className="text-blue-500 font-bold">Liberty Falls main Easter Egg</span>!
          </>
        ) : (
          <>
            Nach dem Besiegen der letzten <span className="text-blue-500 font-bold">Abscheulichkeit</span> wird eine Zwischensequenz abgespielt, in der dein Charakter oder Team niedergeschlagen wird, was das Ende der Quest signalisiert.
            Glückwunsch, du hast das <span className="text-blue-500 font-bold">Liberty Falls Haupt-Easter-Egg</span> abgeschlossen!
          </>
        )}
      </p>

      <Image src="/liberty_final.png" alt="Image of the cutscene" width={600} height={400} />

      {/* Step 8 */}

      <h2 id='final-choosing' className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Final Step: Choose to Continue or Conclude the Game' : 'Letzter Schritt: Weitermachen oder das Spiel beenden'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            With the final <span className="text-blue-500 font-bold">Abomination</span> defeated, the Easter Egg is complete.
            At this point, you’ll be given an option: continue fighting in <span className="text-blue-500 font-bold">Liberty Falls</span> for as long as you can or conclude the game with a final, scripted ending.
          </>
        ) : (
          <>
            Nach dem Besiegen der letzten <span className="text-blue-500 font-bold">Abscheulichkeit</span> ist das Easter Egg abgeschlossen.
            An diesem Punkt hast du die Wahl: Kämpfe weiter in <span className="text-blue-500 font-bold">Liberty Falls</span> so lange wie möglich oder beende das Spiel mit einem endgültigen, geskripteten Ende.
          </>
        )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Continuing the Fight' : '1. Weiterkämpfen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            If you choose to continue, you can keep fighting zombies to reach higher rounds and rack up points.
            This option is ideal for players who want to maximize their score and see how far they can go in
            <span className="text-blue-500 font-bold"> Liberty Falls</span> after completing the quest.
          </>
        ) : (
          <>
            Wenn du dich entscheidest weiterzumachen, kannst du weiterhin Zombies bekämpfen, um höhere Runden zu erreichen und Punkte zu sammeln.
            Diese Option ist ideal für Spieler, die ihre Punktzahl maximieren und sehen möchten, wie weit sie in
            <span className="text-blue-500 font-bold"> Liberty Falls</span> nach Abschluss der Quest kommen können.
          </>
        )}
      </p> 

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Choosing the Ending' : '2. Das Ende wählen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Alternatively, if you wish to conclude the game, simply let your character fall when prompted.
            This will trigger a final cutscene, officially ending your game and marking the completion of the
            <span className="text-blue-500 font-bold"> Liberty Falls Easter Egg</span> quest.
          </>
        ) : (
          <>
            Alternativ kannst du das Spiel beenden, indem du deinen Charakter im richtigen Moment fallen lässt.
            Dadurch wird eine letzte Zwischensequenz ausgelöst, die dein Spiel offiziell beendet und den Abschluss der
            <span className="text-blue-500 font-bold"> Liberty Falls Easter Egg-Quest</span> markiert.
          </>
        )}
      </p> 


    </div>
  )
}
