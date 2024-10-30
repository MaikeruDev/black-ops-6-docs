'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function Maps() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="maps" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Maps' : 'Karten'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' 
          ? 'Explore all the unique maps in Black Ops 6 Zombies mode, each with its own challenges, Easter eggs, and story elements. Dive into the different environments and uncover their secrets!'
          : 'Entdecke alle einzigartigen Karten im Zombies-Modus von Black Ops 6, jede mit eigenen Herausforderungen, Easter Eggs und Handlungselementen. Tauche in die verschiedenen Umgebungen ein und entdecke ihre Geheimnisse!'}
      </p>

      {/* Terminus */}
      <h2 id="terminus" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Terminus' : 'Terminus'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Set on a remote island in the Philippine Sea, Terminus is a dark, prison-like bio-research station. Players must avoid mutated creatures and use unique traps like Tentacle and Cannon traps to survive. This map offers a mix of open spaces and tight cells that require strategic movement.'
          : 'Auf einer abgelegenen Insel im Philippinischen Meer gelegen, ist Terminus eine düstere, gefängnisähnliche Bioresearch-Station. Spieler müssen mutierten Kreaturen ausweichen und einzigartige Fallen wie Tentakel- und Kanonenfallen nutzen, um zu überleben. Die Karte bietet eine Mischung aus offenen Flächen und engen Zellen, die strategische Bewegungen erfordern.'}
      </p>

      {/* Liberty Falls */}
      <h2 id="liberty-falls" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Liberty Falls' : 'Liberty Falls'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Set in a small West Virginian town from the 1990s, Liberty Falls offers a nostalgic but deadly landscape filled with zombie traps like exploding cars and a comic store statue that emits laser beams. With narrow alleys and thematic locations like a church, it’s a visually lighter map than Terminus, but equally challenging.'
          : 'In einer kleinen Stadt in West Virginia aus den 1990ern gelegen, bietet Liberty Falls eine nostalgische, aber tödliche Landschaft voller Zombie-Fallen wie explodierenden Autos und einer Statue im Comicladen, die Laserstrahlen abfeuert. Mit engen Gassen und thematischen Orten wie einer Kirche ist es eine visuell hellere Karte als Terminus, aber genauso herausfordernd.'}
      </p>
    </div>
  )
}
