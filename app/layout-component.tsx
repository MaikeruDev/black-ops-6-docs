'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skull, Search, Menu, Globe, ChevronDown, ChevronRight } from 'lucide-react'
import { LanguageContext } from './language-context'
import { TableOfContents } from '@/components/table-of-contents'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { language, setLanguage } = useContext(LanguageContext)
  const [easterEggsOpen, setEasterEggsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedEasterEggsState = localStorage.getItem('easterEggsOpen')
    if (storedEasterEggsState !== null) {
      setEasterEggsOpen(JSON.parse(storedEasterEggsState))
    }

    const storedLanguage = localStorage.getItem('language')
    if (storedLanguage !== null) {
      setLanguage(storedLanguage as 'EN' | 'GER')
    }
  }, [setLanguage])

  const toggleLanguage = () => {
    const newLanguage = language === 'EN' ? 'GER' : 'EN'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const handleEasterEggsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    /* Would open a page when opening the List */
    /* if (!easterEggsOpen) {
      router.push('/zombies/liberty-falls/easter-eggs')
    } */ 
    const newState = !easterEggsOpen
    setEasterEggsOpen(newState)
    localStorage.setItem('easterEggsOpen', JSON.stringify(newState))
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 ml-6 flex items-center space-x-2" href="/">
              <Skull className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Black Ops 6 Docs</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-gray-100/70" href="/zombies">
                {language === 'EN' ? 'Zombies' : 'Zombies'}
              </Link>
              <Link className="transition-colors hover:text-gray-100/70" href="/multiplayer">
                {language === 'EN' ? 'Multiplayer' : 'Mehrspieler'}
              </Link>
              <Link className="transition-colors hover:text-gray-100/70" href="/campaign">
                {language === 'EN' ? 'Campaign' : 'Kampagne'}
              </Link>
            </nav>
          </div>
          <Button variant="outline" size="icon" className="md:hidden bg-gray-800 hover:bg-gray-900 hover:text-white mr-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder={language === 'EN' ? "Search documentation..." : "Dokumentation durchsuchen..."}
                    className="w-full bg-gray-800 pl-8 placeholder:text-gray-500 focus:ring-gray-700"
                  />
                </div>
              </form>
            </div>
            <Button variant="outline" className='bg-gray-800 hover:bg-gray-900 w-20 hover:text-white' size="icon" onClick={toggleLanguage}>
              <Globe className="h-5 w-5" />
              <span className="ml-2">{language}</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8"> 
          <div className="mb-2 mt-6"> 
          <Link href="/zombies" className="mb-2 text-lg font-semibold hover:underline">
              {language === 'EN' ? 'Zombies' : 'Zombies'}
            </Link>
          </div>
            <nav className="grid items-start gap-2">
              <div>
                <button 
                  onClick={handleEasterEggsClick}
                  className="flex items-center justify-between w-full text-sm hover:underline focus:outline-none"
                >
                  <span>{language === 'EN' ? 'Liberty Falls Easter Eggs' : 'Liberty Falls Easter Eggs'}</span>
                  {easterEggsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </button>
                {easterEggsOpen && (
                  <div className="ml-4 mt-2 grid gap-2">
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/main">
                      {language === 'EN' ? 'Main Easter Egg' : 'Haupt-Easter Egg'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/domination">
                      {language === 'EN' ? 'Domination' : 'Dominanz'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/bowling">
                      {language === 'EN' ? 'Bowling' : 'Bowling'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/vault">
                      {language === 'EN' ? 'Bank Vault' : 'Bank Tresor'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/raining">
                      {language === 'EN' ? 'Raining Zombies' : 'Zombieregen'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/rave">
                      {language === 'EN' ? 'Zombie Rave' : 'Zombie Rave'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/dsb-music">
                      {language === 'EN' ? 'Destroy Something Beautiful' : 'Destroy Something Beautiful'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/pool">
                      {language === 'EN' ? 'Pool tables' : 'Billiardtische'}
                    </Link>
                    <Link className="text-sm hover:underline" href="/zombies/liberty-falls/easter-eggs/free-powerups">
                      {language === 'EN' ? 'Free Power-Ups' : 'Gratis Powerups'}
                    </Link>
                  </div>
                )}
              </div>
              <Link className="text-sm hover:underline" href="/zombies/weapons">
                {language === 'EN' ? 'Weapons' : 'Waffen'}
              </Link>
              <Link className="text-sm hover:underline" href="/zombies/maps">
                {language === 'EN' ? 'Maps' : 'Karten'}
              </Link>
              <Link className="text-sm hover:underline" href="/zombies/perks">
                {language === 'EN' ? 'Perks' : 'Perks'}
              </Link>
            </nav> 
            <div className="mb-2 mt-6"> 
                <Link href="/multiplayer" className="mb-2 mt-6 text-lg font-semibold hover:underline">
                {language === 'EN' ? 'Multiplayer' : 'Mehrspieler'}
                </Link>
            </div>
            <nav className="grid items-start gap-2">
              <Link className="text-sm hover:underline" href="/multiplayer/modes">
                {language === 'EN' ? 'Game Modes' : 'Spielmodi'}
              </Link>
              <Link className="text-sm hover:underline" href="/multiplayer/maps">
                {language === 'EN' ? 'Maps' : 'Karten'}
              </Link>
              <Link className="text-sm hover:underline" href="/multiplayer/weapons">
                {language === 'EN' ? 'Weapons' : 'Waffen'}
              </Link>
            </nav>
            <div className="mb-2 mt-6"> 
                <Link href="/campaign" className="text-lg font-semibold hover:underline">
                {language === 'EN' ? 'Campaign' : 'Kampagne'}
                </Link>
            </div>
            <nav className="grid items-start gap-2">
              <Link className="text-sm hover:underline" href="/campaign/missions">
                {language === 'EN' ? 'Missions' : 'Missionen'}
              </Link>
              <Link className="text-sm hover:underline" href="/campaign/characters">
                {language === 'EN' ? 'Characters' : 'Charaktere'}
              </Link>
            </nav>
          </ScrollArea>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            {children}
          </div>
          <div className="hidden xl:block">
            <div className="sticky top-20">
              <TableOfContents />
            </div>
          </div>
        </main>
      </div>
      <footer className="border-t border-gray-800 bg-gray-900 py-6 text-center text-sm">
        <p>{language === 'EN' ? '© 2024 Black Ops 6 Docs. All rights reserved.' : '© 2024 Black Ops 6 Docs. Alle Rechte vorbehalten.'}</p>
      </footer>
    </div>
  )
}