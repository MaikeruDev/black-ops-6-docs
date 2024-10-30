'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function BankVaultCodeEasterEgg() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="bank-vault-code-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Bank Vault Code Easter Egg Guide' : 'Banktresor-Code-Easter-Egg-Anleitung'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Unlock rewards in the <span className="text-blue-500 font-bold">Liberty Falls Bank Vault</span> by finding and entering hidden codes in the correct order. Each note has a number indicating its position (<span className="text-blue-500 font-bold">1st, 2nd, or 3rd</span>) in the sequence.
          </>
        ) : (
          <>
            Schalte Belohnungen im <span className="text-blue-500 font-bold">Tresor der Liberty Falls Bank</span> frei, indem du versteckte Codes in der richtigen Reihenfolge eingibst. Jeder Zettel zeigt an, ob sein Code an der <span className="text-blue-500 font-bold">1., 2. oder 3.</span> Stelle in der Reihenfolge stehen muss.
          </>
        )}
      </p>

      {/* Loot Keys Section */}
      <h2 id="loot-keys" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Loot Keys in Liberty Falls' : 'Beutelschlüssel in Liberty Falls'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            In <span className="text-blue-500 font-bold">Liberty Falls</span>, <span className="text-blue-500 font-bold">Loot Keys</span> are valuable items that unlock different levels of rewards in the <span className="text-blue-500 font-bold">bank vault</span> and other secured areas. Dropped by elite zombies like <span className="text-blue-500 font-bold">Manglers</span> and <span className="text-blue-500 font-bold">Abominations</span>, these keys come in four rarities: <span className="text-blue-500 font-semibold">green</span>, <span className="text-blue-500 font-semibold">blue</span>, <span className="text-blue-500 font-semibold">purple</span>, and <span className="text-blue-500 font-semibold">gold</span>.
          </>
        ) : (
          <>
            In <span className="text-blue-500 font-bold">Liberty Falls</span> sind <span className="text-blue-500 font-bold">Beutelschlüssel</span> wertvolle Gegenstände, die verschiedene Belohnungen im <span className="text-blue-500 font-bold">Banktresor</span> und anderen gesicherten Bereichen freischalten. Diese Schlüssel werden von Elite-Zombies wie <span className="text-blue-500 font-bold">Manglern</span> und <span className="text-blue-500 font-bold">Abscheulichkeiten</span> fallen gelassen und sind in vier Seltenheitsstufen erhältlich: <span className="text-blue-500 font-semibold">grün</span>, <span className="text-blue-500 font-semibold">blau</span>, <span className="text-blue-500 font-semibold">lila</span>, und <span className="text-blue-500 font-semibold">gold</span>.
          </>
        )}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Types of Loot Keys' : 'Arten von Beutelschlüsseln'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Loot Keys vary in rarity and determine the quality of rewards unlocked. Higher rarity keys provide access to better loot, such as high-tier weapons, killstreaks, and additional essence.'
          : 'Beutelschlüssel variieren in ihrer Seltenheit und bestimmen die Qualität der freigeschalteten Belohnungen. Schlüssel mit höherer Seltenheit bieten Zugang zu besseren Beutestücken, wie hochrangigen Waffen, Killstreaks und zusätzlicher Essenz.'}
      </p>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Where to Find Loot Keys' : 'Wo Beutelschlüssel zu finden sind'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            To obtain <span className="text-blue-500 font-bold">Loot Keys</span>, focus on defeating <span className="text-blue-500 font-bold">elite zombies</span>. <span className="text-blue-500 font-bold">Manglers</span> and <span className="text-blue-500 font-bold">Abominations</span> have a chance to drop keys after being eliminated. Look out for the color-coded rarity to determine the level of rewards they will unlock.
          </>
        ) : (
          <>
            Um <span className="text-blue-500 font-bold">Beutelschlüssel</span> zu erhalten, konzentriere dich darauf, <span className="text-blue-500 font-bold">Elite-Zombies</span> zu besiegen. <span className="text-blue-500 font-bold">Mangler</span> und <span className="text-blue-500 font-bold">Abscheulichkeiten</span> haben eine Chance, nach ihrer Eliminierung Schlüssel fallen zu lassen. Achte auf die farbkodierte Seltenheit, um das Belohnungsniveau zu bestimmen, das sie freischalten werden.
          </>
        )}
      </p>

      <img src="https://placehold.co/600x400/EEE/31343C" alt="Loot Key Example Placeholder" className="my-6" />


      <img src="https://placehold.co/600x400/EEE/31343C" alt="Loot Key Example Placeholder" className="my-6" />


      {/* Step 1 */}
      <h2 id="step-1-ollys-comics" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Locate Code 1 in Olly’s Comics' : 'Schritt 1: Code 1 in Olly’s Comics finden'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Head to <span className="text-blue-500 font-bold">Olly’s Comics</span> and look behind the counter for a code scrawled on a piece of paper. Note this code; it’s the <span className="text-blue-500 font-bold">first</span> of three needed to unlock the vault.
          </>
        ) : (
          <>
            Gehe zu <span className="text-blue-500 font-bold">Olly’s Comics</span> und suche hinter der Theke nach einem Code, der auf einem Zettel gekritzelt ist. Merke dir diesen Code; es ist der <span className="text-blue-500 font-bold">erste</span> von drei, die du benötigst, um den Tresor zu öffnen.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Olly's Comics Code Placeholder" className="my-6" />

      {/* Step 2 */}
      <h2 id="step-2-savings-loan" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Find Code 2 in Savings & Loan' : 'Schritt 2: Code 2 in Savings & Loan finden'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            In the <span className="text-blue-500 font-bold">Savings & Loan</span> building, head to the manager’s office at the back. Look on the desk for a <span className="text-blue-500 font-bold">second code</span> that you’ll need to open the bank vault.
          </>
        ) : (
          <>
            Im Gebäude der <span className="text-blue-500 font-bold">Savings & Loan</span> gehe ins Büro des Managers im hinteren Bereich. Schau auf dem Schreibtisch nach einem <span className="text-blue-500 font-bold">zweiten Code</span>, den du benötigst, um den Tresor der Bank zu öffnen.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Savings & Loan Code Placeholder" className="my-6" />

      {/* Step 3 */}
      <h2 id="step-3-fullers-liberty-lane" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Get Code 3 at Fuller’s Liberty Lane' : 'Schritt 3: Code 3 bei Fuller’s Liberty Lane erhalten'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            The final code can be found at <span className="text-blue-500 font-bold">Fuller’s Liberty Lane</span>. Look for a clipboard near the cashier counter with the <span className="text-blue-500 font-bold">last code</span> written on it.
          </>
        ) : (
          <>
            Der letzte Code befindet sich bei <span className="text-blue-500 font-bold">Fuller’s Liberty Lane</span>. Suche nach einem Klemmbrett in der Nähe des Kassentresens, auf dem der <span className="text-blue-500 font-bold">letzte Code</span> steht.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Fuller's Liberty Lane Code Placeholder" className="my-6" />

      {/* Step 4 */}
      <h2 id="step-4-enter-the-codes" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 4: Enter the Codes in the Bank Vault' : 'Schritt 4: Codes im Banktresor eingeben'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN' ? (
          <>
            Once you have all three codes, go to the <span className="text-blue-500 font-bold">bank vault</span> in Liberty Falls and enter them in the correct sequence to unlock the vault. Inside, you’ll find rewards including <span className="text-blue-500 font-bold">essence</span>, power-ups, and occasionally rare items.
          </>
        ) : (
          <>
            Sobald du alle drei Codes hast, gehe zum <span className="text-blue-500 font-bold">Banktresor</span> in Liberty Falls und gib sie in der richtigen Reihenfolge ein, um den Tresor zu öffnen. Drinnen findest du Belohnungen wie <span className="text-blue-500 font-bold">Essenz</span>, Power-Ups und gelegentlich seltene Gegenstände.
          </>
        )}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Bank Vault Rewards Placeholder" className="my-6" />

    </div>
  )
}
