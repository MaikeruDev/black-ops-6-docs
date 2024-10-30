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
        {language === 'EN'
          ? 'Unlock rewards in the Liberty Falls Bank Vault by finding and entering hidden codes in the correct order. Each note has a number indicating its position (1st, 2nd, or 3rd) in the sequence.'
          : 'Schalte Belohnungen im Tresor der Liberty Falls Bank frei, indem du versteckte Codes in der richtigen Reihenfolge eingibst. Jeder Zettel zeigt an, ob sein Code an der 1., 2. oder 3. Stelle in der Reihenfolge stehen muss.'}
      </p>

      {/* Step 1 */}
      <h2 id="step-1-ollys-comics" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 1: Locate Code 1 in Olly’s Comics' : 'Schritt 1: Code 1 in Olly’s Comics finden'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Head to Olly’s Comics and look behind the counter for a code scrawled on a piece of paper. Note this code; it’s the first of three needed to unlock the vault.'
          : 'Gehe zu Olly’s Comics und suche hinter der Theke nach einem Code, der auf einem Zettel gekritzelt ist. Merke dir diesen Code; es ist der erste von drei, die du benötigst, um den Tresor zu öffnen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Olly's Comics Code Placeholder" className="my-6" />

      {/* Step 2 */}
      <h2 id="step-2-savings-loan" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 2: Find Code 2 in Savings & Loan' : 'Schritt 2: Code 2 in Savings & Loan finden'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'In the Savings & Loan building, head to the manager’s office at the back. Look on the desk for a second code that you’ll need to open the bank vault.'
          : 'Im Gebäude der Savings & Loan gehe ins Büro des Managers im hinteren Bereich. Schau auf dem Schreibtisch nach einem zweiten Code, den du benötigst, um den Tresor der Bank zu öffnen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Savings & Loan Code Placeholder" className="my-6" />

      {/* Step 3 */}
      <h2 id="step-3-fullers-liberty-lane" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 3: Get Code 3 at Fuller’s Liberty Lane' : 'Schritt 3: Code 3 bei Fuller’s Liberty Lane erhalten'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'The final code can be found at Fuller’s Liberty Lane. Look for a clipboard near the cashier counter with the last code written on it.'
          : 'Der letzte Code befindet sich bei Fuller’s Liberty Lane. Suche nach einem Klemmbrett in der Nähe des Kassentresens, auf dem der letzte Code steht.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Fuller's Liberty Lane Code Placeholder" className="my-6" />

      {/* Step 4 */}
      <h2 id="step-4-enter-the-codes" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Step 4: Enter the Codes in the Bank Vault' : 'Schritt 4: Codes im Banktresor eingeben'}
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Once you have all three codes, go to the bank vault in Liberty Falls and enter them in the correct sequence to unlock the vault. Inside, you’ll find rewards including essence, power-ups, and occasionally rare items.'
          : 'Sobald du alle drei Codes hast, gehe zum Banktresor in Liberty Falls und gib sie in der richtigen Reihenfolge ein, um den Tresor zu öffnen. Drinnen findest du Belohnungen wie Essenz, Power-Ups und gelegentlich seltene Gegenstände.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="Bank Vault Rewards Placeholder" className="my-6" />
    </div>
  )
}
