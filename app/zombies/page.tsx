'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'
import { Info } from 'lucide-react'

export default function ZombiesMode() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="zombies-mode" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-white">
  {language === 'EN' ? 'Zombies Mode' : 'Zombies-Modus'}
</h1>
<p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-200">
  {language === 'EN' ? (
    <>
      Enter the world of <span className="text-blue-400 font-semibold">Black Ops 6 Zombies</span>, where players face endless waves of undead while uncovering secrets and completing quests. Choose from unique maps, unlock powerful weapons, and test your survival skills against new and evolving zombie threats.
    </>
  ) : (
    <>
      Tauche ein in die Welt von <span className="text-blue-400 font-semibold">Black Ops 6 Zombies</span>, in der Spieler endlose Wellen von Untoten bekämpfen und Geheimnisse lüften sowie Quests erfüllen. Wähle aus einzigartigen Karten, schalte mächtige Waffen frei und teste deine Überlebensfähigkeiten gegen neue und stetig entwickelnde Zombie-Bedrohungen.
    </>
  )}
</p>

<h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-white">
  {language === 'EN' ? 'Game Modes' : 'Spielmodi'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-300">
  {language === 'EN' ? (
    <>
      Choose between <span className="text-blue-400 font-semibold">Standard mode</span>, where you discover Easter eggs and side quests, or <span className="text-blue-400 font-semibold">Guided mode</span>, offering a structured storyline with limited rounds to focus on the main quest.
    </>
  ) : (
    <>
      Wähle zwischen dem <span className="text-blue-400 font-semibold">Standardmodus</span>, in dem du Easter Eggs und Nebenquests entdeckst, oder dem <span className="text-blue-400 font-semibold">Geführten Modus</span>, der eine strukturierte Geschichte mit begrenzten Runden bietet, um sich auf die Hauptquest zu konzentrieren.
    </>
  )}
</p>

<h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-white">
  {language === 'EN' ? 'New Features' : 'Neue Funktionen'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-300">
  {language === 'EN' ? (
    <>
      Experience the Zombies Mode like never before with <span className="text-blue-400 font-semibold">360-degree Omnimovement</span>, new Pack-a-Punch upgrades, and save-and-quit options for solo players. Choose between first- and third-person views for enhanced gameplay flexibility.
    </>
  ) : (
    <>
      Erlebe den Zombies-Modus wie nie zuvor mit <span className="text-blue-400 font-semibold">360-Grad-Omnibewegung</span>, neuen Pack-a-Punch-Upgrades und der Speichern-und-Beenden-Option für Solospieler. Wähle zwischen der ersten und der dritten Person für ein flexibleres Spielerlebnis.
    </>
  )}
</p>

<h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-white">
  {language === 'EN' ? 'Notable Weapons' : 'Bemerkenswerte Waffen'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-300">
  {language === 'EN' ? (
    <>
      Equip yourself with powerful <span className="text-blue-400 font-semibold">Wonder Weapons</span> unique to each map, alongside classic tools like the <span className="text-blue-400 font-semibold">Ray Gun</span> and new GobbleGums, which grant temporary perks and abilities.
    </>
  ) : (
    <>
      Rüste dich mit mächtigen <span className="text-blue-400 font-semibold">Wunderwaffen</span> aus, die es nur auf bestimmten Karten gibt, sowie mit Klassikern wie der <span className="text-blue-400 font-semibold">Ray Gun</span> und neuen GobbleGums, die temporäre Vorteile und Fähigkeiten verleihen.
    </>
  )}
</p>

<h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-white">
  {language === 'EN' ? 'Enemies' : 'Feinde'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-300">
  {language === 'EN' ? (
    <>
      Face more than just regular zombies. Expect unique threats like explosive spiders, mutated creatures, and terrifying bosses that test even the most experienced players.
    </>
  ) : (
    <>
      Begegne mehr als nur den gewöhnlichen Zombies. Erwarte einzigartige Bedrohungen wie explosive Spinnen, mutierte Kreaturen und schreckliche Bosse, die selbst erfahrene Spieler auf die Probe stellen.
    </>
  )}
</p>

<h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-white">
  {language === 'EN' ? 'Progression & Customization' : 'Fortschritt & Anpassung'}
</h2>
<p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-300">
  {language === 'EN' ? (
    <>
      Earn experience points, unlock weapon camos, and customize loadouts to tailor your play style. Level up to gain access to new perks and abilities for future rounds.
    </>
  ) : (
    <>
      Verdiene Erfahrungspunkte, schalte Waffentarnungen frei und passe deine Loadouts an, um deinen Spielstil zu verfeinern. Steige im Level auf, um Zugriff auf neue Vorteile und Fähigkeiten für zukünftige Runden zu erhalten.
    </>
  )}
</p>

    </div>
  )
}
