'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/app/language-context'

export default function WeaponsGuide() {
  const { language } = useContext(LanguageContext)

  return (
    <div>
      <h1 id="zombies-weapons-guide" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        {language === 'EN' ? 'Zombies Weapons Guide' : 'Waffen-Guide für Zombies'}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Mastering weapon loadouts is essential in Black Ops 6 Zombies. From crowd control to single-target damage, here are some of the top recommended weapons and loadouts to help you survive longer in higher rounds.'
          : 'Das Beherrschen der Waffen-Loadouts ist entscheidend im Black Ops 6 Zombies-Modus. Von Crowd-Control bis Einzelzielschaden – hier sind einige der besten empfohlenen Waffen und Loadouts, um dir zu helfen, in höheren Runden länger zu überleben.'}
      </p>

      {/* Top Weapons and Loadouts */}
      <h2 id="top-weapons-and-loadouts" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Top Weapons and Loadouts for Zombies Mode' : 'Top-Waffen und Loadouts für den Zombies-Modus'}
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'In Black Ops 6 Zombies, weapon choice is crucial, especially in later rounds. Here’s a breakdown of the most effective weapons for different situations and how to maximize your damage output.'
          : 'Im Black Ops 6 Zombies-Modus ist die Wahl der Waffe entscheidend, besonders in späteren Runden. Hier ist eine Übersicht der effektivsten Waffen für verschiedene Situationen und wie du deinen Schadensausstoß maximieren kannst.'}
      </p>

      {/* Shotguns */}
      <h3 id="shotguns" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Shotguns' : 'Schrotflinten'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'Shotguns like the ASG-89 and Marine SP are top-tier for crowd control. Known for high close-range damage, they become even more effective once Pack-a-Punched, gaining additional ammo capacity and damage multipliers. Shotguns are invaluable in crowded areas and later rounds when fast, high-damage output is needed.'
          : 'Schrotflinten wie die ASG-89 und Marine SP sind erstklassig für Crowd-Control. Bekannt für hohen Nahkampfschaden, werden sie noch effektiver, sobald sie Pack-a-Punched sind, da sie eine höhere Munitionskapazität und Schadensmultiplikatoren erhalten. Schrotflinten sind in überfüllten Bereichen und in späteren Runden von unschätzbarem Wert, wenn schneller und hoher Schaden erforderlich ist.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="ASG-89 Shotgun Placeholder" className="my-6" />

      {/* Assault Rifles */}
      <h3 id="assault-rifles" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Assault Rifles' : 'Sturmgewehre'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'The AS VAL assault rifle offers solid DPS and versatile handling, making it an excellent choice for mid-range engagements. When Pack-a-Punched, it becomes the “Hammer of Dawn,” boosting its damage output significantly and adding recoil control, which is vital in sustained fights against tough zombies.'
          : 'Das AS VAL Sturmgewehr bietet eine solide DPS und vielseitige Handhabung, was es zu einer hervorragenden Wahl für mittlere Reichweiten macht. Wenn es Pack-a-Punched wird, wird es zum „Hammer of Dawn“, was seinen Schadensausstoß erheblich steigert und die Rückstoßkontrolle verbessert, was in anhaltenden Kämpfen gegen starke Zombies entscheidend ist.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="AS VAL Assault Rifle Placeholder" className="my-6" />

      {/* Sniper Rifles */}
      <h3 id="sniper-rifles" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {language === 'EN' ? 'Sniper Rifles' : 'Scharfschützengewehre'}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'The LR 7.62 sniper rifle is a great option for high-damage, long-range shots. When Pack-a-Punched, it gains explosive rounds, perfect for dealing with clusters of zombies. Snipers are particularly useful in maps with open spaces, allowing for safe distance shooting while dealing substantial damage to groups.'
          : 'Das LR 7.62 Scharfschützengewehr ist eine großartige Option für hochschadende, langreichweitige Schüsse. Wenn es Pack-a-Punched wird, erhält es explosive Munition, die perfekt für die Bekämpfung von Zombiegruppen geeignet ist. Scharfschützengewehre sind besonders nützlich auf Karten mit offenen Flächen, die es ermöglichen, aus sicherer Entfernung erheblichen Schaden an Gruppen zu verursachen.'}
      </p>
      <img src="https://placehold.co/600x400/EEE/31343C" alt="LR 7.62 Sniper Rifle Placeholder" className="my-6" />

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
          ? 'These weapon choices cover a variety of combat scenarios, from close-quarters crowd control to long-range engagements, and are essential for reaching higher rounds. The right loadout will depend on map layout and player strategy.'
          : 'Diese Waffen decken eine Vielzahl von Kampfszenarien ab, von Nahkampfkampf bis hin zu Fernkämpfen, und sind entscheidend, um höhere Runden zu erreichen. Das richtige Loadout hängt von der Kartenaufteilung und der Spielerstrategie ab.'}
      </p>

    {/* Pack-a-Punch and Weapon Rarities */}
    <h2 id="pack-a-punch-weapon-rarities" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
    {language === 'EN' ? 'Pack-a-Punch and Weapon Rarities' : 'Pack-a-Punch und Waffen-Raritäten'}
    </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Upgrading weapons in Black Ops 6 Zombies is crucial for staying competitive in later rounds. Pack-a-Punch upgrades not only enhance weapon damage but also add unique effects, like explosive rounds for sniper rifles or fire damage for assault rifles.'
            : 'Das Aufrüsten von Waffen im Black Ops 6 Zombies-Modus ist entscheidend, um in späteren Runden wettbewerbsfähig zu bleiben. Pack-a-Punch-Upgrades erhöhen nicht nur den Waffenschaden, sondern fügen auch einzigartige Effekte hinzu, wie Explosivmunition für Scharfschützengewehre oder Feuerschaden für Sturmgewehre.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Weapon rarity also matters. By upgrading at the Arsenal Machine, you can increase your weapon’s rarity level from Common to Legendary, boosting stats like damage, accuracy, and handling. Higher rarity levels make a significant difference, especially in later rounds.'
            : 'Auch die Waffen-Rarität spielt eine Rolle. Durch Upgrades am Arsenal-Automaten kannst du die Seltenheitsstufe deiner Waffe von "Gemein" bis "Legendär" erhöhen, wodurch Werte wie Schaden, Genauigkeit und Handhabung verbessert werden. Höhere Seltenheitsstufen machen einen erheblichen Unterschied, insbesondere in späteren Runden.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Combining Pack-a-Punch upgrades with rarity improvements allows players to maximize their damage output and survival potential in high-round gameplay. Be sure to prioritize these upgrades as rounds progress!'
            : 'Das Kombinieren von Pack-a-Punch-Upgrades mit Seltenheitsverbesserungen ermöglicht es Spielern, ihren Schadensausstoß und ihr Überlebenspotenzial im Spiel für hohe Runden zu maximieren. Priorisiere diese Upgrades unbedingt, während die Runden fortschreiten!'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Pack-a-Punch and Weapon Rarities Placeholder" className="my-6" />

        {/* Classic Zombies Weapons */}
        <h2 id="classic-zombies-weapons" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Classic Zombies Weapons' : 'Klassische Zombies-Waffen'}
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Black Ops 6 brings back iconic weapons that long-time Zombies fans will recognize and appreciate. Fan-favorites like the Mustang & Sally (now GS45 Akimbo) and the Thunder Gun return, keeping their explosive power and unique traits.'
            : 'Black Ops 6 bringt ikonische Waffen zurück, die langjährige Zombies-Fans erkennen und schätzen werden. Fan-Favoriten wie die Mustang & Sally (jetzt GS45 Akimbo) und die Donnerkanone kehren zurück und behalten ihre explosive Kraft und einzigartigen Eigenschaften.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'The nostalgia factor is huge, with weapons like the Ray Gun making an appearance with its classic green energy bolts, while other familiar tools like the Monkey Bombs provide tactical advantage in distracting zombies.'
            : 'Der Nostalgiefaktor ist enorm, mit Waffen wie der Ray Gun, die mit ihren klassischen grünen Energiestrahlen erscheint, während andere bekannte Werkzeuge wie die Affenbomben einen taktischen Vorteil bieten, indem sie Zombies ablenken.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'These classic weapons not only bring back memories but also provide reliable damage and utility, especially when upgraded. Pack-a-Punch them for enhanced power and upgraded effects, turning these classics into high-tier weapons for any round.'
            : 'Diese klassischen Waffen wecken nicht nur Erinnerungen, sondern bieten auch zuverlässigen Schaden und Nutzen, insbesondere wenn sie aufgerüstet werden. Pack-a-Punch sie für mehr Kraft und verbesserte Effekte und verwandle diese Klassiker in hochrangige Waffen für jede Runde.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Classic Weapons Placeholder" className="my-6" />

        {/* Elemental Ammo and Mods */}
        <h2 id="elemental-ammo-mods" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Elemental Ammo and Mods' : 'Elementar-Munition und Mods'}
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Adding elemental ammo mods to your weapons can provide strategic advantages in Zombies mode. These mods offer unique effects like fire, ice, and electric damage, which deal additional effects on zombies when activated.'
            : 'Das Hinzufügen von elementaren Munitionsmods zu deinen Waffen kann strategische Vorteile im Zombies-Modus bieten. Diese Mods bieten einzigartige Effekte wie Feuer-, Eis- und Elektrizitätsschaden, der bei Aktivierung zusätzlichen Schaden an Zombies verursacht.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'For example, the Napalm Burst mod inflicts fire damage on hit, causing zombies to take damage over time, ideal for crowd control with shotguns or high-fire-rate weapons. Cryofreeze, on the other hand, slows down enemies, perfect for assault rifles and snipers in open maps.'
            : 'Zum Beispiel fügt der Napalm Burst-Mod bei Treffern Feuerschaden zu, wodurch Zombies über Zeit Schaden erleiden – ideal für Crowd-Control mit Schrotflinten oder Schnellfeuerwaffen. Cryofreeze hingegen verlangsamt Feinde, perfekt für Sturmgewehre und Scharfschützengewehre auf offenen Karten.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'These elemental mods can be applied to Pack-a-Punched weapons, stacking effects for even greater impact. Experiment with combinations to find the most effective pairing for your loadout and playstyle.'
            : 'Diese Elementarmods können auf Pack-a-Punched-Waffen angewendet werden und bieten in Kombination noch stärkere Effekte. Experimentiere mit Kombinationen, um die effektivste Paarung für dein Loadout und deinen Spielstil zu finden.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Elemental Ammo and Mods Placeholder" className="my-6" />

        {/* Wonder Weapons Overview */}
        <h2 id="wonder-weapons-overview" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Wonder Weapons Overview' : 'Übersicht der Wunderwaffen'}
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Wonder Weapons are unique, powerful tools designed for Zombies mode, often featuring special abilities that regular weapons don’t possess. These are usually limited to one per map or mode, making them rare and highly desirable.'
            : 'Wunderwaffen sind einzigartige, mächtige Werkzeuge, die speziell für den Zombies-Modus entwickelt wurden und oft über besondere Fähigkeiten verfügen, die normale Waffen nicht haben. Sie sind in der Regel auf eine pro Karte oder Modus beschränkt, was sie selten und begehrenswert macht.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Examples of Wonder Weapons include the Jet Gun, which uses vacuum power to eliminate zombies, and the Beamsmasher, which emits shockwaves. Acquiring these weapons usually involves completing certain challenges or finding parts hidden around the map.'
            : 'Beispiele für Wunderwaffen sind die Jetgun, die Vakuumkraft nutzt, um Zombies zu eliminieren, und der Beamsmasher, der Stoßwellen auslöst. Um diese Waffen zu erhalten, muss man in der Regel bestimmte Herausforderungen abschließen oder Teile finden, die auf der Karte versteckt sind.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Wonder Weapons can be upgraded in the Pack-a-Punch machine, enhancing their power and sometimes adding elemental effects, making them indispensable for high-round gameplay. Players should prioritize acquiring and upgrading these weapons for maximum impact.'
            : 'Wunderwaffen können in der Pack-a-Punch-Maschine aufgerüstet werden, was ihre Stärke erhöht und manchmal Elementareffekte hinzufügt, was sie für das Spielen in hohen Runden unverzichtbar macht. Spieler sollten sich darauf konzentrieren, diese Waffen zu erhalten und aufzurüsten, um maximale Wirkung zu erzielen.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Wonder Weapons Placeholder" className="my-6" />

        {/* Weapon Attachments and Field Upgrades */}
        <h2 id="weapon-attachments-upgrades" className="mt-10 scroll-m-20 border-b border-gray-800 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {language === 'EN' ? 'Weapon Attachments and Field Upgrades' : 'Waffenaufsätze und Feldaufrüstungen'}
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Optimizing your weapon with the right attachments can significantly improve performance in Zombies mode. Attachments like extended mags, suppressors, and grips provide better control, accuracy, and ammo capacity, helping you survive longer in higher rounds.'
            : 'Das Optimieren deiner Waffe mit den richtigen Aufsätzen kann die Leistung im Zombies-Modus erheblich verbessern. Aufsätze wie erweiterte Magazine, Schalldämpfer und Griffe bieten bessere Kontrolle, Genauigkeit und Munitionskapazität und helfen dir, in höheren Runden länger zu überleben.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Field upgrades add a strategic element, allowing players to activate abilities that enhance survival. Options like Frost Blast slow down enemies, while Energy Mine detonates on contact, dealing heavy area damage. Choose upgrades based on your preferred playstyle and the map layout.'
            : 'Feldaufrüstungen fügen eine strategische Ebene hinzu und ermöglichen es den Spielern, Fähigkeiten zu aktivieren, die das Überleben verbessern. Optionen wie Frost Blast verlangsamen Feinde, während die Energiemine bei Kontakt detoniert und schweren Flächenschaden verursacht. Wähle Upgrades basierend auf deinem bevorzugten Spielstil und der Kartenaufteilung.'}
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
        {language === 'EN'
            ? 'Combining the right attachments with field upgrades helps create loadouts that are tailored to different situations. Experiment with different setups to find the best combination for high-round gameplay.'
            : 'Die Kombination der richtigen Aufsätze mit Feldaufrüstungen hilft dabei, Loadouts zu erstellen, die auf verschiedene Situationen zugeschnitten sind. Experimentiere mit verschiedenen Setups, um die beste Kombination für das Spiel in hohen Runden zu finden.'}
        </p>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Attachments and Field Upgrades Placeholder" className="my-6" />

    </div>
  )
}
