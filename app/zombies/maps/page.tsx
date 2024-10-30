'use client'

import Image from 'next/image'

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
        {language === 'EN' ? (
          <>
            Explore all the unique maps in <span className="text-blue-500 font-bold">Black Ops 6 Zombies mode</span>, each with its own challenges, Easter eggs, and story elements. Dive into the different environments and uncover their secrets!
          </>
        ) : (
          <>
            Entdecke alle einzigartigen Karten im <span className="text-blue-500 font-bold">Zombies-Modus von Black Ops 6</span>, jede mit eigenen Herausforderungen, Easter Eggs und Handlungselementen. Tauche in die verschiedenen Umgebungen ein und entdecke ihre Geheimnisse!
          </>
        )}
      </p>

      {/* Terminus */}
      <h2 id="terminus" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Terminus' : 'Terminus'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Set on a remote island in the <span className="text-blue-500 font-bold">Philippine Sea</span>, Terminus is a dark, prison-like bio-research station. Players must avoid mutated creatures and use unique traps like <span className="text-blue-500 font-bold">Tentacle</span> and <span className="text-blue-500 font-bold">Cannon traps</span> to survive. This map offers a mix of open spaces and tight cells that require strategic movement.
          </>
        ) : (
          <>
            Auf einer abgelegenen Insel im <span className="text-blue-500 font-bold">Philippinischen Meer</span> gelegen, ist Terminus eine düstere, gefängnisähnliche Bioresearch-Station. Spieler müssen mutierten Kreaturen ausweichen und einzigartige Fallen wie <span className="text-blue-500 font-bold">Tentakel-</span> und <span className="text-blue-500 font-bold">Kanonenfallen</span> nutzen, um zu überleben. Die Karte bietet eine Mischung aus offenen Flächen und engen Zellen, die strategische Bewegungen erfordern.
          </>
        )}
      </p>

      <Image src="/terminus_map.jpg" alt="Image of a weapon" width={600} height={400} />

      {/* Liberty Falls */}
      <h2 id="liberty-falls" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Liberty Falls' : 'Liberty Falls'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Set in a small West Virginian town from the <span className="text-blue-500 font-bold">1990s</span>, Liberty Falls offers a nostalgic but deadly landscape filled with zombie traps like exploding cars and a <span className="text-blue-500 font-bold">comic store statue</span> that emits laser beams. With narrow alleys and thematic locations like a church, it’s a visually lighter map than Terminus, but equally challenging.
          </>
        ) : (
          <>
            In einer kleinen Stadt in <span className="text-blue-500 font-bold">West Virginia aus den 1990ern</span> gelegen, bietet Liberty Falls eine nostalgische, aber tödliche Landschaft voller Zombie-Fallen wie explodierenden Autos und einer <span className="text-blue-500 font-bold">Statue im Comicladen</span>, die Laserstrahlen abfeuert. Mit engen Gassen und thematischen Orten wie einer Kirche ist es eine visuell hellere Karte als Terminus, aber genauso herausfordernd.
          </>
        )}
      </p>

      <Image src="/liberty_falls_map.jpg" alt="Image of a weapon" width={600} height={400} />

    </div>
  )
}
