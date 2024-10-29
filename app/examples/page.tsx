'use client'

import { useContext, useState } from 'react'
import { LanguageContext } from '@/app/language-context'
import { Info } from 'lucide-react'

export default function LibertyFallsEasterEgg() {
  const { language } = useContext(LanguageContext)

  const [isOpen, setIsOpen] = useState(false);

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

      <div className="mt-6 text-black">
        <button 
          className="text-blue-600 underline" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Hide Code Example' : 'Show Code Example'}
        </button>
        {isOpen && (
          <pre className="p-4 mt-2 bg-gray-100 rounded-lg overflow-x-auto">
            <code>
              {language === 'EN'
                ? `// English code example\nconsole.log("Hello World!");`
                : `// Deutsches Code Beispiel\nconsole.log("Hallo Welt!");`}
            </code>
          </pre>
        )}
      </div>

      <ol className="mt-6 list-decimal pl-8 space-y-2">
        <li>{language === 'EN' ? 'Open the settings menu.' : 'Öffnen Sie das Einstellungsmenü.'}</li>
        <li>{language === 'EN' ? 'Navigate to the "Display" section.' : 'Navigieren Sie zum Bereich "Anzeige".'}</li>
        <li>{language === 'EN' ? 'Select your desired options and save.' : 'Wählen Sie Ihre gewünschten Optionen und speichern Sie.'}</li>
      </ol>

      <div className="relative group mt-4">
        <span className="underline cursor-help text-blue-600">Hover me</span>
        <div className="absolute left-0 mt-1 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md p-2 w-48">
          {language === 'EN'
            ? 'A device that projects images or video onto a screen.'
            : 'Ein Gerät, das Bilder oder Videos auf eine Leinwand projiziert.'}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          {language === 'EN' ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen'}
        </h2>
        <details className="mb-4">
          <summary className="cursor-pointer text-blue-600 underline">
            {language === 'EN' ? 'What does this feature do?' : 'Was macht diese Funktion?'}
          </summary>
          <p className="mt-2">
            {language === 'EN'
              ? 'This feature allows you to adjust projector colors based on the counter status.'
              : 'Diese Funktion ermöglicht es Ihnen, die Farben des Projektors basierend auf dem Status des Zählers anzupassen.'}
          </p>
        </details>
        <details className="mb-4">
          <summary className="cursor-pointer text-blue-600 underline">
            {language === 'EN' ? 'Can I reset the colors?' : 'Kann ich die Farben zurücksetzen?'}
          </summary>
          <p className="mt-2">
            {language === 'EN'
              ? 'Yes, simply navigate to the settings and choose "Reset Colors."'
              : 'Ja, navigieren Sie einfach zu den Einstellungen und wählen Sie "Farben zurücksetzen".'}
          </p>
        </details>
      </div>

      <div className="mt-10 border-t pt-4">
  <h2 className="text-2xl font-semibold mb-4">
    {language === 'EN' ? 'Changelog' : 'Änderungsprotokoll'}
  </h2>
  <ul className="list-disc pl-5 space-y-2">
    <li>
      {language === 'EN'
        ? 'Version 1.1 - Added new color options for the info boxes.'
        : 'Version 1.1 - Neue Farboptionen für die Infoboxen hinzugefügt.'}
    </li>
    <li>
      {language === 'EN'
        ? 'Version 1.0 - Initial release with language support and basic styling.'
        : 'Version 1.0 - Erstausgabe mit Sprachunterstützung und Basisstyling.'}
    </li>
  </ul>
</div>



    </div>
  )
}
