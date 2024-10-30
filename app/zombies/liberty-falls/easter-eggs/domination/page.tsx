'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function DominationEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="domination-easter-egg-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Domination Easter Egg Guide' : 'Domination Easter Egg Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'The Domination Easter Egg in Black Ops 6 Zombies mode allows you to transform into the superhero Aetherella, gaining powerful abilities for a short time. Here’s a step-by-step guide to finding all Aetherella figures and activating this unique transformation.'
          : 'Das Domination Easter Egg im Black Ops 6 Zombies-Modus ermöglicht es dir, dich in den Superhelden Aetherella zu verwandeln und für kurze Zeit mächtige Fähigkeiten zu erhalten. Hier ist eine Schritt-für-Schritt-Anleitung, um alle Aetherella-Figuren zu finden und diese einzigartige Verwandlung zu aktivieren.'}
      </p>

      {/* Step 1 */}
      <h2 id="step-1-jet-gun" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Gather the Jet Gun' : 'Schritt 1: Jetgun sammeln'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'To start, you’ll need the Jet Gun, which is essential for collecting the Aetherella figures scattered across Liberty Falls. If you haven’t built it yet, follow the main Easter Egg guide to assemble it.'
          : 'Zu Beginn benötigst du die Jetgun, die wichtig ist, um die über Liberty Falls verteilten Aetherella-Figuren zu sammeln. Wenn du sie noch nicht gebaut hast, folge der Haupt-Easter-Egg-Anleitung, um sie zusammenzusetzen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Jet Gun Assembly Placeholder" className="my-6" />
    
        {/* Step 2 */}
        <h2 id="step-2-aetherella-figures" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Find All Aetherella Figures' : 'Schritt 2: Alle Aetherella-Figuren finden'}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'There are 9 Aetherella figures scattered across Liberty Falls. Use the Jet Gun to vacuum them up as many are placed in hard-to-reach spots.'
            : 'Es gibt 9 Aetherella-Figuren, die in Liberty Falls verteilt sind. Verwende die Jetgun, um sie einzusaugen, da viele an schwer zugänglichen Stellen platziert sind.'}
        </p>

        {/* Figure 1 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 1: Olly’s Comic Store' : 'Figur 1: Olly’s Comic-Laden'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Inside Olly’s Comic Store, you’ll find the first Aetherella figure on the shelf next to the giant Aetherella statue.'
            : 'Im Olly’s Comic-Laden findest du die erste Aetherella-Figur auf dem Regal neben der großen Aetherella-Statue.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Olly's Comic Store Figure Placeholder" className="my-6" />

        {/* Figure 2 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 2: Olly’s Comic Store' : 'Figur 2: Olly’s Comic-Laden'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'In the comic store, look on a desk near the back entrance to find another Aetherella figure next to some boxes.'
            : 'Im Comic-Laden suche auf einem Schreibtisch nahe des Hintereingangs nach einer weiteren Aetherella-Figur, die neben einigen Kisten steht.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Olly's Comic Store Back Figure Placeholder" className="my-6" />

        {/* Figure 3 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 3: Olly’s Comic Store' : 'Figur 3: Olly’s Comic-Laden'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Near the Quick Revive machine in Olly’s, find this Aetherella figure on a high shelf above the comic racks.'
            : 'Nahe der Quick Revive-Maschine im Olly’s findest du diese Aetherella-Figur auf einem hohen Regal über den Comic-Regalen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Comic Rack Figure Placeholder" className="my-6" />

        {/* Figure 4 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 4: Olly’s Comic Store' : 'Figur 4: Olly’s Comic-Laden'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Look for the final figure in the comic store on a shelf to the left of the broken barricaded door.'
            : 'Suche die letzte Figur im Comic-Laden auf einem Regal links von der kaputten Barrikadentür.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Broken Door Figure Placeholder" className="my-6" />

        {/* Figure 5 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 5: Flower Shop Window Ledge' : 'Figur 5: Fensterbank im Blumenladen'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Look to the right wall of the flower shop. Find the figure on a window ledge next to an air conditioner.'
            : 'Schaue an die rechte Wand des Blumenladens. Die Figur befindet sich auf einer Fensterbank neben einer Klimaanlage.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Flower Shop Window Figure Placeholder" className="my-6" />

        {/* Figure 6 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 6: Hilltop Church' : 'Figur 6: Hügelkirche'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Outside the church entrance, find the figure on the right window ledge, facing the column.'
            : 'Vor dem Eingang der Kirche findest du die Figur auf der rechten Fensterbank, die zur Säule zeigt.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Church Window Ledge Figure Placeholder" className="my-6" />

        {/* Figure 7 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 7: Liberty Lanes' : 'Figur 7: Liberty Lanes'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Find this figure beneath the “L” in the Liberty Lanes sign. Climb onto the nearby bus to reach it.'
            : 'Finde diese Figur unter dem „L“ des Liberty Lanes-Schilds. Steige auf den nahegelegenen Bus, um sie zu erreichen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Liberty Lanes Figure Placeholder" className="my-6" />

        {/* Figure 8 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 8: Yummy Freeze Rooftop' : 'Figur 8: Yummy Freeze Dach'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Find this figure between two air vents on the Yummy Freeze rooftop. Access it from the bank rooftop via zipline.'
            : 'Finde diese Figur zwischen zwei Lüftungsschlitzen auf dem Yummy Freeze-Dach. Erreiche es vom Bankdach aus über die Seilrutsche.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Yummy Freeze Rooftop Figure Placeholder" className="my-6" />

        {/* Figure 9 */}
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Figure 9: Motel Sign' : 'Figur 9: Motel-Schild'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'The last figure is on the “M” of the Motel sign east of the motel. Use the Jet Gun to collect it from the road.'
            : 'Die letzte Figur befindet sich auf dem „M“ des Motel-Schilds östlich des Motels. Verwende die Jetgun, um sie von der Straße aus zu sammeln.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Motel Sign Figure Placeholder" className="my-6" />

        {/* Step 3 */}
        <h2 id="step-3-activate-transformation" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Activate Aetherella Transformation' : 'Schritt 3: Aetherella-Transformation aktivieren'}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Once all nine Aetherella figures are collected, your character will automatically transform into the superhero Aetherella, gaining special powers for a limited time.'
            : 'Sobald alle neun Aetherella-Figuren gesammelt sind, verwandelt sich dein Charakter automatisch in den Superhelden Aetherella und erhält für eine begrenzte Zeit besondere Kräfte.'}
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Aetherella’s Abilities' : 'Aetherellas Fähigkeiten'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'During this transformation, you gain invincibility and can use eye lasers to eliminate zombies. These powers last for about 90 seconds, allowing you to rack up points and clear hordes quickly.'
            : 'Während dieser Verwandlung erhältst du Unverwundbarkeit und kannst Laserschüsse aus den Augen abfeuern, um Zombies zu vernichten. Diese Kräfte halten etwa 90 Sekunden an, was dir erlaubt, Punkte zu sammeln und Horden schnell zu beseitigen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Aetherella Transformation Placeholder" className="my-6" />

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Tips for Using Aetherella Mode' : 'Tipps für den Aetherella-Modus'}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Use the transformation to eliminate large groups of zombies and rack up points without worrying about health. It’s an ideal time to open new areas or complete difficult objectives while invincible.'
            : 'Nutze die Verwandlung, um große Gruppen von Zombies auszuschalten und Punkte zu sammeln, ohne dir Sorgen um deine Gesundheit zu machen. Dies ist der ideale Zeitpunkt, um neue Bereiche zu öffnen oder schwierige Ziele zu erreichen, solange du unverwundbar bist.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Tips for Aetherella Mode Placeholder" className="my-6" />


    
    </div>
  )
}
