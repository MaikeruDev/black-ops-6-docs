'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'
import { Info } from 'lucide-react'

export default function LibertyFallsEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>

      {/* Introduction */}

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Liberty Falls Main Easter Egg Guide' : 'Liberty Falls Haupt-Easter-Egg-Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Follow this step-by-step guide to complete the Liberty Falls main Easter egg in Black Ops 6 Zombies.'
          : 'Befolge diese Schritt-für-Schritt-Anleitung, um das Haupt-Easter-Egg in Liberty Falls im Black Ops 6 Zombies-Modus abzuschließen.'}
      </p>

      {/* Step 1 */}

      <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Open the Church and Activate the Machine' : 'Schritt 1: Kirche öffnen und Maschine aktivieren'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'To access the Hilltop Church, you need to unlock several areas by spending points. This is crucial for the storyline and gives access to the Pack-a-Punch machine, essential for later challenges.'
          : 'Um Zugang zur Kirche auf dem Hügel zu erhalten, musst du mehrere Bereiche durch den Einsatz von Punkten freischalten. Dies ist entscheidend für die Storyline und ermöglicht den Zugriff auf die Pack-a-Punch-Maschine, die für spätere Herausforderungen wichtig ist.'}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '1. Clear the Initial Rounds' : '1. Anfangsrunden bestehen'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Start by clearing the first few rounds at the spawn location to gather points. Focus on conserving ammo and maximizing points by melee attacks whenever possible.'
          : 'Beginne damit, die ersten Runden am Spawn-Standort zu bestehen, um Punkte zu sammeln. Achte darauf, Munition zu sparen und Punkte durch Nahkampf-Angriffe zu maximieren, wann immer möglich.'}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '2. Unlock the Path to the Church' : '2. Zugang zur Kirche freischalten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Head towards Olly’s shop by unlocking the barrier between the ice cream parlor and the Fast-Forward store. This first barrier costs around 1,500 points.'
          : 'Begebe dich zu Olly’s Laden, indem du die Barriere zwischen der Eisdiele und dem Fast-Forward-Laden freischaltest. Diese erste Barriere kostet etwa 1.500 Punkte.'}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '3. Access the Cemetery' : '3. Zugang zum Friedhof'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Proceed up the stairs near Olly’s and unlock the gate that leads to the cemetery. This will require additional points, around 2,000, and brings you closer to the church.'
          : 'Gehe die Treppe bei Olly’s hoch und schalte das Tor frei, das zum Friedhof führt. Dies erfordert weitere Punkte, etwa 2.000, und bringt dich näher zur Kirche.'}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? '4. Enter the Church' : '4. Die Kirche betreten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Finally, unlock the main entrance of the church for 2,250 points. Inside, interact with the machine on the right side to trigger storyline dialogue and initiate the next steps in the quest.'
          : 'Schließlich schalte den Haupteingang der Kirche für 2.250 Punkte frei. Drinnen aktiviere die Maschine auf der rechten Seite, um die Storyline zu starten und die nächsten Schritte der Quest zu beginnen.'}
      </p>

      <img src="https://placehold.co/600x400/EEE/31343C" alt="Church Entrance Placeholder" className="my-6" />

       {/* Step 2 */}

       <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {language === 'EN' ? 'Step 2: Craft the Jet Gun' : 'Schritt 2: Jetgun herstellen'}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'To progress further in the Easter Egg quest, you’ll need to craft the Jet Gun, a unique Wonder Weapon with the power to vacuum up important quest items and defend against waves of zombies.'
            : 'Um im Easter Egg weiter voranzukommen, musst du die Jetgun herstellen, eine einzigartige Wunderwaffe mit der Fähigkeit, wichtige Quest-Gegenstände aufzusaugen und dich gegen Zombie-Wellen zu verteidigen.'}
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '1. Collect the Water Pressure Valve' : '1. Wasserdruckventil sammeln'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Head to Washington Avenue near E4 and look outside Lilly’s Flowerpot store for a hose and water valve. Collect the valve and take it to Liberty Lanes, the bowling alley at E7. Attach it to the water gauge on the wall, and build up pressure by turning the valve. Keep an eye out for zombies as they’ll interrupt the process.'
            : 'Gehe zur Washington Avenue in der Nähe von E4 und suche außerhalb von Lilly’s Blumenladen nach einem Schlauch und einem Wasserventil. Sammle das Ventil und bringe es zur Liberty Lanes Bowlingbahn bei E7. Befestige es am Wassermesser an der Wand und erhöhe den Druck, indem du das Ventil drehst. Achte auf Zombies, die den Prozess unterbrechen können.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Water Pressure Valve Location Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '2. Retrieve the Handbrake' : '2. Handbremse besorgen'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Go to the cemetery (B4) where a special zombie known as the Groundskeeper will spawn. Eliminate him to obtain the key to the toolshed. Head to the shed at D4, unlock it, and collect the Handbrake from inside.'
            : 'Gehe zum Friedhof (B4), wo ein spezieller Zombie namens Friedhofswärter erscheinen wird. Besiege ihn, um den Schlüssel für den Werkzeugschuppen zu erhalten. Gehe zum Schuppen bei D4, schließe ihn auf und hole die Handbremse von innen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Handbrake Location Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '3. Find Electrical Wires' : '3. Stromkabel finden'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Head to the Radio House at H3. Use a Mangler Cannon (which can be crafted or obtained from defeating Mangler enemies) to break open the gated entrance. Inside, search the trash piles to locate the electrical wires needed for the Jet Gun.'
            : 'Gehe zum Radiohaus bei H3. Verwende eine Mangler-Kanone (die du herstellen oder durch das Besiegen von Mangler-Gegnern erhalten kannst), um den Gittereingang zu öffnen. Drinnen durchsuche die Müllhaufen, um die Stromkabel zu finden, die für die Jetgun benötigt werden.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Electrical Wires Location Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '4. Assemble the Jet Gun' : '4. Jetgun zusammenbauen'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'With all parts collected, head to the Motel on the second floor, where you’ll find a dedicated crafting table for the Jet Gun. Assemble the weapon here. The Jet Gun will allow you to progress further in the Easter Egg by vacuuming key items and clearing paths.'
            : 'Mit allen gesammelten Teilen gehe zum Motel in den zweiten Stock, wo du einen speziellen Arbeitstisch für die Jetgun findest. Baue die Waffe hier zusammen. Die Jetgun ermöglicht es dir, im Easter Egg weiter voranzukommen, indem sie wichtige Gegenstände aufsaugt und Wege freiräumt.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Jet Gun Crafting Table Placeholder" className="my-6" />

        {/* Step 3 */}

        <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {language === 'EN' ? 'Step 3: Collect LTG Device Parts' : 'Schritt 3: LTG-Geräteteile sammeln'}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'The LTG Device requires three unique parts scattered across Liberty Falls. You’ll need the Jet Gun’s vacuum feature to collect each one, as they’re located in hard-to-reach spots.'
            : 'Das LTG-Gerät erfordert drei einzigartige Teile, die über Liberty Falls verstreut sind. Du benötigst die Vakuumfunktion der Jetgun, um jedes Teil zu sammeln, da sie an schwer zugänglichen Stellen platziert sind.'}
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '1. Church Part' : '1. Kirchenteil'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Head to the church and use the Jet Gun to vacuum up a part located above the balcony. It looks like a floating hat or helmet. Position yourself at the base of the balcony and aim the Jet Gun upward to reach it.'
            : 'Gehe zur Kirche und benutze die Jetgun, um ein Teil über dem Balkon aufzusaugen. Es sieht aus wie ein schwebender Hut oder Helm. Positioniere dich am Fuß des Balkons und richte die Jetgun nach oben, um es zu erreichen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Church Part Location Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '2. Comic Store Part' : '2. Comic-Store-Teil'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Inside Ollie’s Comics, look up toward the ceiling, where you’ll find a part floating in a hole. Use the Jet Gun to vacuum it up from below. This is easiest to reach by positioning yourself directly under the ceiling opening in the store.'
            : 'Im Ollie’s Comics schaue zur Decke, wo du ein Teil in einem Loch schweben siehst. Verwende die Jetgun, um es von unten aufzusaugen. Am einfachsten erreichst du es, indem du dich direkt unter der Öffnung in der Decke positionierst.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Comic Store Part Location Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '3. Barbershop Part' : '3. Friseursalon-Teil'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Near the Barbershop, located by the Speed Cola machine, you’ll find the last LTG part in a second-floor window. Jump onto the truck parked outside the shop to position yourself under the window, then use the Jet Gun to vacuum up the part from this angle.'
            : 'In der Nähe des Friseursalons, der sich bei der Speed Cola befindet, findest du das letzte LTG-Teil in einem Fenster im zweiten Stock. Springe auf den Lastwagen, der vor dem Laden geparkt ist, um dich unter dem Fenster zu positionieren, und benutze dann die Jetgun, um das Teil aus dieser Position aufzusaugen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Barbershop Part Location Placeholder" className="my-6" />

        {/* Step 4 */}
 
        <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {language === 'EN' ? 'Step 4: Assemble the LTG Device on the Bank Rooftop' : 'Schritt 4: LTG-Gerät auf dem Bankdach zusammensetzen'}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'After collecting all three LTG parts, head to the bank rooftop to assemble the device. The LTG is a critical tool you’ll need to capture High-Value Targets (HVTs) in later stages.'
            : 'Nachdem du alle drei LTG-Teile gesammelt hast, gehe zum Bankdach, um das Gerät zusammenzusetzen. Das LTG ist ein wichtiges Werkzeug, das du später zum Einfangen von Zielen mit hohem Wert benötigst.'}
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '1. Access the Bank Rooftop' : '1. Bankdach erreichen'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'To reach the bank rooftop, use either the zipline or the ascender located nearby. Ziplines are marked on the map, and once on the roof, proceed to the specific crafting bench dedicated to the LTG device.'
            : 'Um das Bankdach zu erreichen, benutze entweder die Seilrutsche oder den Aufzug in der Nähe. Seilrutschen sind auf der Karte markiert, und sobald du auf dem Dach bist, gehe zur speziellen Werkbank für das LTG-Gerät.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Bank Rooftop Access Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '2. Assemble the LTG' : '2. LTG zusammensetzen'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Once at the crafting bench, combine all three parts to complete the LTG. This device will be used shortly to capture the essence of HVTs, a key part of the Easter Egg progression.'
            : 'Sobald du an der Werkbank bist, kombiniere alle drei Teile, um das LTG zu vervollständigen. Dieses Gerät wird bald verwendet, um die Essenz von Zielen mit hohem Wert (HVTs) einzufangen, ein entscheidender Schritt im Easter Egg.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="LTG Assembly Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '3. Prepare for the Next Step' : '3. Vorbereitung auf den nächsten Schritt'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'With the LTG assembled, you’re now ready to collect Aether Canisters and use the device for capturing HVT essences. The next step will guide you on how to use the LTG effectively.'
            : 'Mit dem zusammengebauten LTG bist du jetzt bereit, Äther-Kanister zu sammeln und das Gerät zum Einfangen der Essenz von HVTs zu verwenden. Der nächste Schritt zeigt dir, wie du das LTG effektiv einsetzen kannst.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Preparation Placeholder" className="my-6" /> 

        {/* Step 5 */}

        <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {language === 'EN' ? 'Step 5: Fill the First Aether Canister' : 'Schritt 5: Ersten Äther-Kanister füllen'}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'With the LTG device assembled, it’s time to capture the essence of a High-Value Target (HVT) using an Aether Canister. Follow these steps to complete this objective and advance the Easter Egg.'
            : 'Mit dem zusammengebauten LTG-Gerät ist es an der Zeit, die Essenz eines Ziels mit hohem Wert (HVT) mit einem Äther-Kanister einzufangen. Befolge diese Schritte, um dieses Ziel zu erreichen und das Easter Egg voranzutreiben.'}
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '1. Collect the Aether Canister' : '1. Äther-Kanister sammeln'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Return to the church and interact with the machine on the right side to pick up an Aether Canister. Holding this canister will slow down your movement, so plan accordingly if you’re playing solo.'
            : 'Gehe zurück zur Kirche und interagiere mit der Maschine auf der rechten Seite, um einen Äther-Kanister zu erhalten. Das Tragen dieses Kanisters wird deine Bewegung verlangsamen, also plane dies entsprechend, besonders wenn du solo spielst.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Aether Canister Collection Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '2. Place the Canister at the Gas Station' : '2. Kanister an der Tankstelle platzieren'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Head to the gas station location on the map. Place the Aether Canister near the trap located under the purple Aether storm. Position the LTG device nearby and prepare for incoming waves of zombies.'
            : 'Gehe zur Tankstelle auf der Karte. Platziere den Äther-Kanister in der Nähe der Falle unter dem violetten Äthersturm. Positioniere das LTG-Gerät in der Nähe und bereite dich auf ankommende Zombie-Wellen vor.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Gas Station Placement Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '3. Defend the LTG and Weaken the HVT' : '3. LTG verteidigen und HVT schwächen'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'As soon as you place the LTG device, it will activate a 60-second timer, during which zombies will swarm to attack the device. Defend it from damage to keep it operational. After the timer, an HVT (either a Mangler or an Abomination) will spawn.'
            : 'Sobald du das LTG-Gerät platzierst, wird ein 60-Sekunden-Timer aktiviert, währenddessen Zombies das Gerät angreifen werden. Verteidige es vor Schaden, um es betriebsbereit zu halten. Nach dem Timer erscheint ein HVT (entweder ein Mangler oder eine Abscheulichkeit).'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Defend LTG Device Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '4. Capture the HVT Essence' : '4. HVT-Essenz einfangen'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Weaken the HVT without killing it immediately. When the HVT begins emitting purple sparks, guide it toward the Aether Canister, then activate the trap to capture its essence. If done correctly, the essence will be stored in the canister.'
            : 'Schwäche den HVT, ohne ihn sofort zu töten. Wenn der HVT violette Funken ausstößt, führe ihn zum Äther-Kanister und aktiviere die Falle, um seine Essenz einzufangen. Wenn alles korrekt gemacht wurde, wird die Essenz im Kanister gespeichert.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Capture HVT Essence Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '5. Return to the Church with the Filled Canister' : '5. Mit dem gefüllten Kanister zur Kirche zurückkehren'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'Once the essence is captured, take the canister back to the church. This step is timed, so move quickly to ensure the essence doesn’t dissipate. Place the canister back into the machine to progress to the next phase.'
            : 'Sobald die Essenz eingefangen ist, bringe den Kanister zurück zur Kirche. Dieser Schritt ist zeitlich begrenzt, also bewege dich schnell, um sicherzustellen, dass die Essenz nicht verschwindet. Platziere den Kanister wieder in der Maschine, um zur nächsten Phase zu gelangen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Return to Church Placeholder" className="my-6" />

        {/* Step 6 */}

        <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {language === 'EN' ? 'Step 6: Sync Devices with the Strauss Counter' : 'Schritt 6: Geräte mit dem Strauss-Zähler synchronisieren'}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'After returning the filled Aether Canister to the church, you’ll receive the Strauss Counter. This device is used to match colors on specific projectors around Liberty Falls, which is necessary to advance the Easter Egg.'
            : 'Nach Rückgabe des gefüllten Äther-Kanisters in die Kirche erhältst du den Strauss-Zähler. Dieses Gerät wird verwendet, um die Farben auf bestimmten Projektoren in Liberty Falls abzugleichen, was notwendig ist, um das Easter Egg voranzutreiben.'}
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
          {language === 'EN'
            ? 'The first projector is on the hillside near the bowling alley. Activate the Strauss Counter here and match the color displayed on the counter with the projector. This color may vary between green, red, or yellow depending on your specific playthrough.'
            : 'Der erste Projektor befindet sich am Hang in der Nähe der Bowlingbahn. Aktiviere den Strauss-Zähler hier und stimme die Farbe des Zählers mit der des Projektors ab. Diese Farbe kann zwischen grün, rot oder gelb variieren, abhängig vom individuellen Spielverlauf.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Hillside Projector Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '2. Locate Projector 2: Backyard near the White House' : '2. Projektor 2 finden: Hinterhof beim Weißen Haus'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'The second projector is located behind the White House, near the Groundskeeper’s Tool Shed. Use the Strauss Counter to adjust the projector color to match the color shown on the counter.'
            : 'Der zweite Projektor befindet sich hinter dem Weißen Haus, in der Nähe des Werkzeugschuppens des Friedhofswärters. Verwende den Strauss-Zähler, um die Projektorfarbe an die auf dem Zähler angezeigte Farbe anzupassen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="White House Projector Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '3. Locate Projector 3: Bank Rooftop' : '3. Projektor 3 finden: Bankdach'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'The final projector is located on the bank rooftop. Once you reach it, use the Strauss Counter to sync the color with the displayed color on the device. Ensure all projectors are synced properly.'
            : 'Der letzte Projektor befindet sich auf dem Bankdach. Sobald du ihn erreichst, verwende den Strauss-Zähler, um die Farbe mit der auf dem Gerät angezeigten Farbe zu synchronisieren. Achte darauf, dass alle Projektoren korrekt synchronisiert sind.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Bank Rooftop Projector Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          {language === 'EN' ? '4. Troubleshooting the Sync' : '4. Problembehebung bei der Synchronisation'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {language === 'EN'
            ? 'If the projectors fail to sync correctly, try resetting all projectors by turning them to green and reattempting the color sequence. When synced, a purple beam will emit, marking the next objective.'
            : 'Wenn die Projektoren nicht korrekt synchronisiert werden, versuche, alle Projektoren auf grün zu stellen und die Farbsequenz erneut zu versuchen. Wenn die Synchronisation erfolgreich ist, wird ein violetter Strahl ausgesendet, der das nächste Ziel markiert.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Projector Sync Troubleshooting Placeholder" className="my-6" />
    </div>
  )
}
