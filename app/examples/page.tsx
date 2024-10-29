'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'
import { Info } from 'lucide-react'

export default function LibertyFallsEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div> 

        {/* HEADER */}

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'This is a header' : 'Das ist eine Überschrift'}
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'This is just a normal paragraph.'
          : 'Das ist nur ganz normaler Text.'}
      </p> 

      <h2 className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'This is a subheader for steps or categories.' : 'Dies ist eine Zwischenüberschrift für Schritte oder Kategorien.'}
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Here could be some information.'
          : 'Hier könnten ein paar Infos sein.'}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Here is a small header' : 'Hier eine kleine Überschrift'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'And some more useless text. How about adding an image?'
          : 'Und noch ein wenig mehr unnötiger Text. Wie wärs mit einem Bild?'}
      </p>

      <img src="https://placehold.co/600x400/EEE/31343C" alt="Church Entrance Placeholder" className="my-6" />

      <p className="p-4 bg-white text-black rounded-lg flex items-start space-x-3 mt-6 border border-gray-300">
        <Info className="text-gray-700 mt-1" size={20} />
        <span className="leading-7">
          {language === 'EN'
            ? 'Very light information.'
            : 'Ganz simple informationen.'}
        </span>
      </p>
 
      <p className="p-4 bg-blue-200 text-black rounded-lg flex items-start space-x-3 mt-6">
        <Info className="text-blue-700 mt-1" size={20} />
        <span className="leading-7">
          {language === 'EN'
            ? 'For this box you will need to import the according Info icon!'
            : 'Für diese Box wirst du das zugehörige Infor Icon importieren müssen!'}
        </span>
      </p>

      <p className="p-4 bg-yellow-200 text-black rounded-lg flex items-start space-x-3 mt-6">
        <Info className="text-yellow-700 mt-1" size={20} />
        <span className="leading-7">
          {language === 'EN'
            ? 'Here something a bit more important probably.'
            : 'Hier steht vermutlich etwas wichtigeres.'}
        </span>
      </p>

      <p className="p-4 bg-red-200 text-black rounded-lg flex items-start space-x-3 mt-6">
        <Info className="text-red-700 mt-1" size={20} />
        <span className="leading-7">
          {language === 'EN'
            ? 'The red one is probably very eye-catching! Here could be some very important things you dont want to miss out on.'
            : 'Die rote ist wahrscheinlich ein echter Hingucker! Hier könnten einige sehr wichtige Dinge sein, die Sie nicht verpassen sollten.'}
        </span>
      </p>

    </div>
  )
}
