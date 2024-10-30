'use client'

import Image from 'next/image'

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
                {language === 'EN' ? (
                    <>
                        The <span className="text-blue-500 font-bold">Domination Easter Egg</span> in Black Ops 6 Zombies mode allows you to transform into the superhero <span className="text-blue-500 font-bold">Aetherella</span>, gaining powerful abilities for a short time. Here’s a step-by-step guide to finding all Aetherella figures and activating this unique transformation.
                    </>
                ) : (
                    <>
                        Das <span className="text-blue-500 font-bold">Domination Easter Egg</span> im Black Ops 6 Zombies-Modus ermöglicht es dir, dich in den Superhelden <span className="text-blue-500 font-bold">Aetherella</span> zu verwandeln und für kurze Zeit mächtige Fähigkeiten zu erhalten. Hier ist eine Schritt-für-Schritt-Anleitung, um alle Aetherella-Figuren zu finden und diese einzigartige Verwandlung zu aktivieren.
                    </>
                )}
            </p>

            {/* Step 1 */}
            <h2 id="step-1-jet-gun" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {language === 'EN' ? 'Step 1: Gather the Jet Gun' : 'Schritt 1: Jetgun sammeln'}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        To start, you’ll need the <span className="text-blue-500 font-bold">Jet Gun</span>, which is essential for collecting the Aetherella figures scattered across <span className="text-blue-500 font-bold">Liberty Falls</span>. If you haven’t built it yet, follow the main Easter Egg guide to assemble it.
                    </>
                ) : (
                    <>
                        Zu Beginn benötigst du die <span className="text-blue-500 font-bold">Jetgun</span>, die wichtig ist, um die über <span className="text-blue-500 font-bold">Liberty Falls</span> verteilten Aetherella-Figuren zu sammeln. Wenn du sie noch nicht gebaut hast, folge der Haupt-Easter-Egg-Anleitung, um sie zusammenzusetzen.
                    </>
                )}
            </p>
            
            <Image src="/jetgun.jpg" alt="Image of a weapon" width={600} height={400} />

            {/* Step 2 */}
            <h2 id="step-2-aetherella-figures" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {language === 'EN' ? 'Step 2: Find All Aetherella Figures' : 'Schritt 2: Alle Aetherella-Figuren finden'}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        There are <span className="text-blue-500 font-bold">9 Aetherella figures</span> scattered across Liberty Falls. Use the <span className="text-blue-500 font-bold">Jet Gun</span> to vacuum them up as many are placed in hard-to-reach spots.
                    </>
                ) : (
                    <>
                        Es gibt <span className="text-blue-500 font-bold">9 Aetherella-Figuren</span>, die in Liberty Falls verteilt sind. Verwende die <span className="text-blue-500 font-bold">Jetgun</span>, um sie einzusaugen, da viele an schwer zugänglichen Stellen platziert sind.
                    </>
                )}
            </p>

            {/* Figure 1 */}
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 1: Olly’s Comic Store' : 'Figur 1: Olly’s Comic-Laden'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Inside <span className="text-blue-500 font-bold">Olly’s Comic Store</span>, you’ll find the first Aetherella figure on the shelf next to the giant Aetherella statue.
                    </>
                ) : (
                    <>
                        Im <span className="text-blue-500 font-bold">Olly’s Comic-Laden</span> findest du die erste Aetherella-Figur auf dem Regal neben der großen Aetherella-Statue.
                    </>
                )}
            </p> 

            {/* Figure 2 */}
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 2: Olly’s Comic Store' : 'Figur 2: Olly’s Comic-Laden'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        In the <span className="text-blue-500 font-bold">comic store</span>, look on a desk near the back entrance to find another Aetherella figure next to some boxes.
                    </>
                ) : (
                    <>
                        Im <span className="text-blue-500 font-bold">Comic-Laden</span> suche auf einem Schreibtisch nahe des Hintereingangs nach einer weiteren Aetherella-Figur, die neben einigen Kisten steht.
                    </>
                )}
            </p> 

            {/* Figure 3 */}
            <h3 id="figure-3-comic-store" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 3: Olly’s Comic Store' : 'Figur 3: Olly’s Comic-Laden'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Near the <span className="text-blue-500 font-bold">Quick Revive machine</span> in <span className="text-blue-500 font-bold">Olly’s</span>, find this Aetherella figure on a high shelf above the comic racks.
                    </>
                ) : (
                    <>
                        Nahe der <span className="text-blue-500 font-bold">Quick Revive-Maschine</span> im <span className="text-blue-500 font-bold">Olly’s</span> findest du diese Aetherella-Figur auf einem hohen Regal über den Comic-Regalen.
                    </>
                )}
            </p> 

            {/* Figure 4 */}
            <h3 id="figure-4-comic-store" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 4: Olly’s Comic Store' : 'Figur 4: Olly’s Comic-Laden'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Look for the final figure in the comic store on a shelf to the left of the <span className="text-blue-500 font-bold">broken barricaded door</span>.
                    </>
                ) : (
                    <>
                        Suche die letzte Figur im Comic-Laden auf einem Regal links von der <span className="text-blue-500 font-bold">kaputten Barrikadentür</span>.
                    </>
                )}
            </p> 

            {/* Figure 5 */}
            <h3 id="figure-5-flower-shop" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 5: Flower Shop Window Ledge' : 'Figur 5: Fensterbank im Blumenladen'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Look to the right wall of the <span className="text-blue-500 font-bold">flower shop</span>. Find the figure on a window ledge next to an air conditioner.
                    </>
                ) : (
                    <>
                        Schaue an die rechte Wand des <span className="text-blue-500 font-bold">Blumenladens</span>. Die Figur befindet sich auf einer Fensterbank neben einer Klimaanlage.
                    </>
                )}
            </p> 

            {/* Figure 6 */}
            <h3 id="figure-6-hilltop-church" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 6: Hilltop Church' : 'Figur 6: Hügelkirche'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Outside the <span className="text-blue-500 font-bold">church entrance</span>, find the figure on the right window ledge, facing the column.
                    </>
                ) : (
                    <>
                        Vor dem Eingang der <span className="text-blue-500 font-bold">Kirche</span> findest du die Figur auf der rechten Fensterbank, die zur Säule zeigt.
                    </>
                )}
            </p> 

            {/* Figure 7 */}
            <h3 id="figure-7-liberty-lanes" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 7: Liberty Lanes' : 'Figur 7: Liberty Lanes'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Find this figure beneath the <span className="text-blue-500 font-bold">“L”</span> in the <span className="text-blue-500 font-bold">Liberty Lanes</span> sign. Climb onto the nearby bus to reach it.
                    </>
                ) : (
                    <>
                        Finde diese Figur unter dem <span className="text-blue-500 font-bold">„L“</span> des <span className="text-blue-500 font-bold">Liberty Lanes-Schilds</span>. Steige auf den nahegelegenen Bus, um sie zu erreichen.
                    </>
                )}
            </p> 


            {/* Figure 8 */}
            <h3 id="figure-8-yummy-freeze-rooftop" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 8: Yummy Freeze Rooftop' : 'Figur 8: Yummy Freeze Dach'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Find this figure between two air vents on the <span className="text-blue-500 font-bold">Yummy Freeze rooftop</span>. Access it from the <span className="text-blue-500 font-bold">bank rooftop</span> via zipline.
                    </>
                ) : (
                    <>
                        Finde diese Figur zwischen zwei Lüftungsschlitzen auf dem <span className="text-blue-500 font-bold">Yummy Freeze-Dach</span>. Erreiche es vom <span className="text-blue-500 font-bold">Bankdach</span> aus über die Seilrutsche.
                    </>
                )}
            </p> 

            {/* Figure 9 */}
            <h3 id="figure-9-motel-sign" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Figure 9: Motel Sign' : 'Figur 9: Motel-Schild'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        The last figure is on the <span className="text-blue-500 font-bold">“M” of the Motel sign</span> east of the motel. Use the Jet Gun to collect it from the road.
                    </>
                ) : (
                    <>
                        Die letzte Figur befindet sich auf dem <span className="text-blue-500 font-bold">„M“ des Motel-Schilds</span> östlich des Motels. Verwende die Jetgun, um sie von der Straße aus zu sammeln.
                    </>
                )}
            </p> 

            {/* Step 3 */}
            <h2 id="step-3-activate-transformation" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {language === 'EN' ? 'Step 3: Activate Aetherella Transformation' : 'Schritt 3: Aetherella-Transformation aktivieren'}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Once all nine Aetherella figures are collected, your character will automatically transform into the superhero <span className="text-blue-500 font-bold">Aetherella</span>, gaining special powers for a limited time.
                    </>
                ) : (
                    <>
                        Sobald alle neun Aetherella-Figuren gesammelt sind, verwandelt sich dein Charakter automatisch in den Superhelden <span className="text-blue-500 font-bold">Aetherella</span> und erhält für eine begrenzte Zeit besondere Kräfte.
                    </>
                )}
            </p>

            <h3 id="aetherella-abilities" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Aetherella’s Abilities' : 'Aetherellas Fähigkeiten'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        During this transformation, you gain <span className="text-blue-500 font-bold">invincibility</span> and can use <span className="text-blue-500 font-bold">eye lasers</span> to eliminate zombies. These powers last for about 90 seconds, allowing you to rack up points and clear hordes quickly.
                    </>
                ) : (
                    <>
                        Während dieser Verwandlung erhältst du <span className="text-blue-500 font-bold">Unverwundbarkeit</span> und kannst <span className="text-blue-500 font-bold">Laserschüsse aus den Augen</span> abfeuern, um Zombies zu vernichten. Diese Kräfte halten etwa 90 Sekunden an, was dir erlaubt, Punkte zu sammeln und Horden schnell zu beseitigen.
                    </>
                )}
            </p> 

            <h3 id="tips-for-aetherella-mode" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                {language === 'EN' ? 'Tips for Using Aetherella Mode' : 'Tipps für den Aetherella-Modus'}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                {language === 'EN' ? (
                    <>
                        Use the transformation to eliminate large groups of zombies and rack up points without worrying about health. It’s an ideal time to open new areas or complete difficult objectives while invincible.
                    </>
                ) : (
                    <>
                        Nutze die Verwandlung, um große Gruppen von Zombies auszuschalten und Punkte zu sammeln, ohne dir Sorgen um deine Gesundheit zu machen. Dies ist der ideale Zeitpunkt, um neue Bereiche zu öffnen oder schwierige Ziele zu erreichen, solange du unverwundbar bist.
                    </>
                )}
            </p> 




        </div>
    )
}
