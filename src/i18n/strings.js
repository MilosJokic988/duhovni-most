/**
 * SAV TEKST SAJTA.
 * sr → srpski latinicom (ćirilica se pravi automatski), ru → ruski.
 * Tekst menjate ovde; komponente samo prikazuju ove vrednosti.
 */
export const S = {
  /* ---------- Navigacija ---------- */
  nav: {
    brand: { sr: "Duhovni most", ru: "Духовный мост" },
    beograd: { sr: "Beograd", ru: "Белград" },
    peterburg: { sr: "Sankt Peterburg", ru: "Санкт-Петербург" },
    istorija: { sr: "Istorija", ru: "История" },
    most: { sr: "Most", ru: "Мост" },
    info: { sr: "Informacije", ru: "Информация" },
    language: { sr: "Jezik", ru: "Язык" },
    openMenu: { sr: "Otvori meni", ru: "Открыть меню" },
    closeMenu: { sr: "Zatvori meni", ru: "Закрыть меню" },
  },

  /* ---------- Hero ---------- */
  hero: {
    eyebrow: { sr: "Beograd ✦ Sankt Peterburg", ru: "Белград ✦ Санкт-Петербург" },
    title1: { sr: "Duhovni svetionik", ru: "Духовный маяк" },
    title2: { sr: "Od Beograda do Sankt Peterburga", ru: "От Белграда до Санкт-Петербурга" },
    subtitle: {
      sr: "Upoznajte neraskidive veze srpske pobožnosti, ruske tradicije i svetitelja koji nas spajaju.",
      ru: "Откройте для себя неразрывные узы сербского благочестия, русской традиции и святых, которые нас объединяют.",
    },
    scroll: { sr: "Skroluj dole", ru: "Прокрутить вниз" },
  },

  /* ---------- Beograd ---------- */
  belgrade: {
    eyebrow: { sr: "Beograd · Tašmajdan", ru: "Белград · Ташмайдан" },
    title: { sr: "Hram Svete Trojice na Tašmajdanu", ru: "Храм Святой Троицы на Ташмайдане" },
    subtitle: {
      sr: "Mala bela crkva u senci Svetog Marka — parče Rusije u srcu Beograda.",
      ru: "Маленькая белая церковь в тени храма Святого Марка — частица России в сердце Белграда.",
    },
    p1: {
      sr: "Hram su 1924. godine podigli ruski izbeglice posle Građanskog rata, po projektu arhitekte Valerija Staševskog, na zemljištu koje im je ustupila crkvena opština Svetog Marka. U temelje su, kažu, položili grumen ruske zemlje koji su poneli u izgnanstvo.",
      ru: "Храм был построен в 1924 году русскими беженцами после Гражданской войны по проекту архитектора Валерия Сташевского, на земле, которую им уступил приход храма Святого Марка. По преданию, в его основание заложили горсть русской земли, увезённой в изгнание.",
    },
    p2: {
      sr: "Danas je to jedno od najposećenijih mesta molitve u Beogradu. Pred ikonom Svete blažene Ksenije Petrogradske svakog dana gori more sveća — Srbi joj se obraćaju za zdravlje, porodicu, posao i pomoć u nevolji, doživljavajući je kao svoju svetiteljku.",
      ru: "Сегодня это одно из самых посещаемых мест молитвы в Белграде. Перед иконой святой блаженной Ксении Петербургской каждый день горит море свечей — сербы просят её о здоровье, семье, работе и помощи в беде, почитая её как свою святую.",
    },
    photoCaption: { sr: "Ruski hram Svete Trojice, Tašmajdan", ru: "Русский храм Святой Троицы, Ташмайдан" },
    facts: [
      {
        title: { sr: "Sveće Svetoj Kseniji", ru: "Свечи святой Ксении" },
        text: { sr: "Najčešći razlog dolaska Beograđana u hram.", ru: "Самая частая причина, по которой белградцы приходят в храм." },
      },
      {
        title: { sr: "Ruska tradicija", ru: "Русская традиция" },
        text: { sr: "Bogosluženja po ruskom obredu, na crkvenoslovenskom.", ru: "Богослужения по русскому чину, на церковнославянском." },
      },
      {
        title: { sr: "Spomenik kulture", ru: "Памятник культуры" },
        text: { sr: "Hram je zaštićen kao kulturno dobro Srbije.", ru: "Храм охраняется как культурное наследие Сербии." },
      },
    ],
    interiorTitle: { sr: "Svetinje i istorija hrama", ru: "Святыни и история храма" },
    interior: [
      {
        key: "osvecenje",
        title: { sr: "Osvećenje hrama", ru: "Освящение храма" },
        text: {
          sr: "Istorijska fotografija ruskih izbeglica pred novim hramom, posle osvećenja sredinom 1920-ih.",
          ru: "Историческая фотография русских беженцев у нового храма после освящения в середине 1920-х годов.",
        },
      },
      {
        key: "ikonaKsenije",
        title: { sr: "Ikona Svete Ksenije", ru: "Икона святой Ксении" },
        text: {
          sr: "Pred njenom ikonom Beograđani svakodnevno pale sveće i ostavljaju molitvene ceduljice.",
          ru: "Перед её иконой белградцы каждый день ставят свечи и оставляют записки с молитвами.",
        },
      },
      {
        key: "salAlekseja",
        title: { sr: "Šal carevića Alekseja", ru: "Шаль цесаревича Алексея" },
        text: {
          sr: "Šal koji su careviću isplele sestre i njegova ikona — retka svetinja porodice Romanov, čuvana u hramu.",
          ru: "Шаль, связанная цесаревичу сёстрами, и его икона — редкая реликвия семьи Романовых, хранящаяся в храме.",
        },
      },
    ],
  },

  /* ---------- 3D kivot ---------- */
  kiot: {
    eyebrow: { sr: "3D kivot", ru: "3D-киот" },
    title: { sr: "Ikona Svete blažene Ksenije", ru: "Икона святой блаженной Ксении" },
    hint: {
      sr: "Prevucite prstom ili mišem da okrenete kivot.",
      ru: "Проведите пальцем или мышью, чтобы повернуть киот.",
    },
    reset: { sr: "Vrati napred", ru: "Вернуть" },
    nameplate: { sr: "Sv. blažena Ksenija", ru: "Св. блаж. Ксения" },
    missing: {
      sr: "Ovde dolazi vaša ikona: `public/img/ikona-ksenije.jpg`",
      ru: "Здесь будет ваша икона: `public/img/ikona-ksenije.jpg`",
    },
  },

  /* ---------- Virtuelna sveća ---------- */
  candle: {
    eyebrow: { sr: "Virtuelni kutak molitve", ru: "Виртуальный уголок молитвы" },
    title: { sr: "Upalite sveću Svetoj Kseniji", ru: "Поставьте свечу святой Ксении" },
    hint: {
      sr: "Zastanite na trenutak. Pomislite na one koje volite i upalite sveću.",
      ru: "Остановитесь на мгновение. Подумайте о тех, кого любите, и зажгите свечу.",
    },
    prayer: {
      sr: "Sveta blažena mati Ksenija, koja si pod okriljem Svevišnjega živela, Bogom vođena i krepljena, glad i žeđ, hladnoću i znoj, ruganja i progone dobrovoljno trpela — moli Gospoda za nas, da nam podari mir, zdravlje i spasenje duša naših. Amin.",
      ru: "Святая блаженная мати Ксение, под кровом Всевышняго пожившая, Богом водимая и укрепляемая, глад и жажду, хлад и зной, поношения и гонения добровольно претерпевшая, — моли Господа о нас, да дарует нам мир, здравие и спасение душ наших. Аминь.",
    },
    light: { sr: "Upali sveću", ru: "Зажечь свечу" },
    lightAnother: { sr: "Upali još jednu", ru: "Зажечь ещё одну" },
    count: { sr: "Upaljenih sveća:", ru: "Зажжено свечей:" },
  },

  /* ---------- Sankt Peterburg ---------- */
  petersburg: {
    eyebrow: { sr: "Sankt Peterburg · Smolensko groblje", ru: "Санкт-Петербург · Смоленское кладбище" },
    title: { sr: "Hodočašće u Sankt Peterburg", ru: "Паломничество в Санкт-Петербург" },
    subtitle: {
      sr: "Grob Svete Ksenije — put od beogradske ikone do mesta gde svetiteljka počiva.",
      ru: "Могила святой Ксении — путь от белградской иконы к месту, где покоится святая.",
    },
    p1: {
      sr: "Ksenija je u 18. veku rano ostala udovica pukovnika Andreja Petrova. Iz ljubavi prema njemu i Bogu razdelila je imanje, obukla muževljevu odeću i izabrala težak podvig jurodstva — „ludosti radi Hrista“. Danju je lutala Peterburgom, a noću se molila u polju.",
      ru: "В XVIII веке Ксения рано овдовела, потеряв мужа, полковника Андрея Петрова. Из любви к нему и к Богу она раздала имущество, надела одежду мужа и избрала трудный подвиг юродства Христа ради. Днём она бродила по Петербургу, а ночью молилась в поле.",
    },
    p2: {
      sr: "Sahranjena je na Smolenskom groblju na Vasiljevskom ostrvu. Nad grobom je 1902. osveštana kamena kapela, a Ruska pravoslavna crkva proslavila ju je kao svetiteljku 1988. godine.",
      ru: "Она похоронена на Смоленском кладбище на Васильевском острове. Над могилой в 1902 году освятили каменную часовню, а в 1988 году Русская православная церковь причислила её к лику святых.",
    },
    chapelLabel: { sr: "Kapela Svete Ksenije", ru: "Часовня святой Ксении" },
    chapelTitle: { sr: "Zid ceduljica i molitava", ru: "Стена записок и молитв" },
    chapelText: {
      sr: "Hodočasnici iz celog sveta dodiruju zidove kapele, obilaze je i ostavljaju ceduljice sa molbama — za izlečenje, brak, decu, dom. Mnogi se vraćaju da zahvale za uslišene molitve.",
      ru: "Паломники со всего мира прикасаются к стенам часовни, обходят её и оставляют записки с просьбами — об исцелении, браке, детях, доме. Многие возвращаются поблагодарить за исполненные молитвы.",
    },
    chapelNote: {
      sr: "Isti plamen koji gori u Peterburgu pali se i pred njenom ikonom u Beogradu.",
      ru: "Тот же огонь, что горит в Петербурге, зажигается и перед её иконой в Белграде.",
    },
    chapelPhoto: { sr: "Grobnica Svete Ksenije u kapeli", ru: "Гробница святой Ксении в часовне" },
    galleryTitle: { sr: "Svetinje i znamenitosti Sankt Peterburga", ru: "Святыни и достопримечательности Петербурга" },
    places: [
      {
        key: "kapelaSpolja",
        badge: { sr: "Svetinja", ru: "Святыня" },
        title: { sr: "Kapela Svete Ksenije", ru: "Часовня святой Ксении" },
        subtitle: { sr: "Smolensko groblje", ru: "Смоленское кладбище" },
        text: {
          sr: "Kapela nad grobom svetiteljke, podignuta početkom 20. veka u ruskom stilu — najvažnije mesto hodočašća u gradu.",
          ru: "Часовня над могилой святой, построенная в начале XX века в русском стиле, — главное место паломничества в городе.",
        },
      },
      {
        key: "spasNaKrvi",
        badge: { sr: "Mozaici", ru: "Мозаики" },
        title: { sr: "Crkva Spasa na Krvi", ru: "Храм Спаса на Крови" },
        subtitle: { sr: "Kanal Gribojedova", ru: "Канал Грибоедова" },
        text: {
          sr: "Podignuta na mestu ranjavanja cara Aleksandra II (1881). Unutrašnjost je prekrivena sa više od 7.000 m² mozaika.",
          ru: "Возведён на месте смертельного ранения императора Александра II (1881). Интерьер покрыт более чем 7000 м² мозаики.",
        },
      },
      {
        key: "svetiIsak",
        badge: { sr: "Kupola", ru: "Купол" },
        title: { sr: "Katedrala Svetog Isaka", ru: "Исаакиевский собор" },
        subtitle: { sr: "Isakijevski trg", ru: "Исаакиевская площадь" },
        text: {
          sr: "Gradila se četrdeset godina (1818–1858); njena pozlaćena kupola vidi se iz gotovo celog centra grada.",
          ru: "Строился сорок лет (1818–1858); его золочёный купол виден почти из любой точки центра города.",
        },
      },
      {
        key: "zimskiDvorac",
        badge: { sr: "Kultura", ru: "Культура" },
        title: { sr: "Ermitaž i Zimski dvorac", ru: "Эрмитаж и Зимний дворец" },
        subtitle: { sr: "Dvorski trg", ru: "Дворцовая площадь" },
        text: {
          sr: "Nekadašnja carska rezidencija, danas jedan od najvećih muzeja sveta — riznica ruske i evropske kulture.",
          ru: "Бывшая императорская резиденция, сегодня — один из крупнейших музеев мира, сокровищница русской и европейской культуры.",
        },
      },
    ],
  },

  /* ---------- Most u oba pravca: Sveta Ksenija i Sveti Sava ---------- */
  bridge: {
    eyebrow: { sr: "Dva svetitelja · dva naroda", ru: "Два святых · два народа" },
    title: { sr: "Most u oba pravca", ru: "Мост в обе стороны" },
    subtitle: {
      sr: "Srbi pale sveće ruskoj svetiteljki, a najveći srpski svetitelj zamonašio se u ruskom manastiru.",
      ru: "Сербы ставят свечи русской святой, а величайший сербский святой принял постриг в русском монастыре.",
    },
    xenia: {
      label: { sr: "Rusija → Srbija", ru: "Россия → Сербия" },
      name: { sr: "Sveta blažena Ksenija Petrogradska", ru: "Святая блаженная Ксения Петербургская" },
      tagline: { sr: "Ruska svetiteljka koju vole Srbi", ru: "Русская святая, которую любят сербы" },
      points: [
        { sr: "Peterburška jurodiva iz 18. veka, zaštitnica porodice i doma.", ru: "Петербургская юродивая XVIII века, покровительница семьи и дома." },
        { sr: "U Beogradu, u ruskom hramu na Tašmajdanu, pred njenom ikonom svakog dana gore sveće.", ru: "В Белграде, в русском храме на Ташмайдане, перед её иконой каждый день горят свечи." },
        { sr: "Srbi joj se obraćaju kao svojoj svetiteljki — za zdravlje, posao i porodicu.", ru: "Сербы обращаются к ней как к своей святой — о здоровье, работе и семье." },
      ],
      photo: { sr: "Ikona Svete Ksenije", ru: "Икона святой Ксении" },
    },
    sava: {
      label: { sr: "Srbija → Rusija", ru: "Сербия → Россия" },
      name: { sr: "Sveti Sava, prvi arhiepiskop srpski", ru: "Святитель Савва, первый архиепископ Сербский" },
      tagline: { sr: "Srpski svetitelj kog poštuju Rusi", ru: "Сербский святой, которого чтут русские" },
      points: [
        { sr: "Zamonašio se na Svetoj Gori u ruskom manastiru Svetog Pantelejmona — Starom Rusiku.", ru: "Принял постриг на Афоне в русском монастыре святого Пантелеимона — Старом Руссике." },
        { sr: "Novgorodski hodočasnik zapisao ga je još za života, oko 1199. godine.", ru: "Новгородский паломник упомянул его ещё при жизни, около 1199 года." },
        { sr: "Vekovima je u ruskim bogoslužbenim knjigama, a Savindan se slavi i u Moskvi.", ru: "Веками его память в русских богослужебных книгах, а его день празднуют и в Москве." },
      ],
      photo: { sr: "Sveti Sava, freska iz Mileševe, 13. vek", ru: "Святитель Савва, фреска Милешевы, XIII век" },
    },
    moreTitle: { sr: "Još mostova vere", ru: "Ещё мосты веры" },
    more: [
      {
        name: { sr: "Sveti Vasilije Ostroški", ru: "Святитель Василий Острожский" },
        text: {
          sr: "Manastir Ostrog u Crnoj Gori, gde počivaju njegove mošti, omiljeno je mesto i ruskih hodočasnika.",
          ru: "Монастырь Острог в Черногории, где покоятся его мощи, — любимое место и русских паломников.",
        },
      },
      {
        name: { sr: "Sveti Jovan Šangajski", ru: "Святитель Иоанн Шанхайский" },
        text: {
          sr: "Ruski svetitelj koji je kao izbeglica studirao teologiju u Beogradu i služio u Srbiji i Makedoniji.",
          ru: "Русский святой, который в эмиграции изучал богословие в Белграде и служил в Сербии и Македонии.",
        },
      },
    ],
  },

  /* ---------- General Vrangel ---------- */
  wrangel: {
    eyebrow: { sr: "Istorijski kutak", ru: "Исторический уголок" },
    title: { sr: "General Petar Nikolajevič Vrangel", ru: "Генерал Пётр Николаевич Врангель" },
    subtitle: { sr: "„Crni baron“ i Bela emigracija u Srbiji", ru: "«Чёрный барон» и Белая эмиграция в Сербии" },
    tombCaption: {
      sr: "Grob generala Vrangela u hramu Svete Trojice",
      ru: "Могила генерала Врангеля в храме Святой Троицы",
    },
    p1: {
      sr: "Nadimak „Crni baron“ dobio je po crnoj kozačkoj čerkeski koju je rado nosio. Bio je poslednji glavnokomandujući Bele armije u Ruskom građanskom ratu, a evakuacija sa Krima 1920. spasla je desetine hiljada vojnika i civila.",
      ru: "Прозвище «Чёрный барон» он получил за чёрную казачью черкеску, которую охотно носил. Он был последним главнокомандующим Белой армии в Гражданской войне, а эвакуация из Крыма в 1920 году спасла десятки тысяч военных и мирных жителей.",
    },
    p2: {
      sr: "Kraljevina SHS primila je ruske izbeglice kao braću. Inženjeri, lekari, profesori, umetnici i oficiri gradili su mostove, zgrade, univerzitete i pozorišta Beograda. Hram Svete Trojice postao je njihova duhovna kuća.",
      ru: "Королевство СХС приняло русских беженцев как братьев. Инженеры, врачи, профессора, художники и офицеры строили мосты, здания, университеты и театры Белграда. Храм Святой Троицы стал их духовным домом.",
    },
    timeline: [
      { year: "1878", text: { sr: "Rođen u baltičkoj plemićkoj porodici.", ru: "Родился в остзейской дворянской семье." } },
      {
        year: "1920",
        text: {
          sr: "Komandant Ruske armije na Krimu; organizuje evakuaciju oko 145.000 ljudi.",
          ru: "Командует Русской армией в Крыму; организует эвакуацию около 145 000 человек.",
        },
      },
      {
        year: "1921",
        text: {
          sr: "Štab armije prelazi u Kraljevinu SHS, u Sremske Karlovce.",
          ru: "Штаб армии переезжает в Королевство СХС, в Сремски-Карловци.",
        },
      },
      {
        year: "1928",
        text: { sr: "Umire u Briselu 25. aprila.", ru: "Скончался в Брюсселе 25 апреля." },
      },
      {
        year: "1929",
        text: {
          sr: "6. oktobra svečano sahranjen u hramu Svete Trojice u Beogradu.",
          ru: "6 октября торжественно погребён в храме Святой Троицы в Белграде.",
        },
      },
    ],
    hereLies: { sr: "Ovde počiva", ru: "Здесь покоится" },
    name: { sr: "Petar N. Vrangel", ru: "Пётр Н. Врангель" },
    lastWish: { sr: "Poslednja želja", ru: "Последняя воля" },
    c1: {
      sr: "General je umro u Belgiji, ali je želeo da počiva u bratskoj srpskoj zemlji. Njegovi posmrtni ostaci preneti su u Beograd i 6. oktobra 1929. položeni pod svodove hrama Svete Trojice, uz vojne i crkvene počasti.",
      ru: "Генерал скончался в Бельгии, но завещал похоронить себя в братской сербской земле. Его прах перевезли в Белград и 6 октября 1929 года погребли под сводами храма Святой Троицы с воинскими и церковными почестями.",
    },
    c2: {
      sr: "Mermerna ploča sa njegovim imenom i danas se nalazi u hramu — tihi svedok veze dva naroda.",
      ru: "Мраморная плита с его именем и сегодня находится в храме — тихий свидетель связи двух народов.",
    },
  },

  /* ---------- Informacije ---------- */
  info: {
    eyebrow: { sr: "Praktične informacije", ru: "Практическая информация" },
    title: { sr: "Planirajte svoju posetu", ru: "Спланируйте посещение" },
    subtitle: {
      sr: "Radno vreme je okvirno — pre polaska proverite raspored bogosluženja.",
      ru: "Часы работы ориентировочные — перед визитом уточните расписание богослужений.",
    },
    address: { sr: "Adresa", ru: "Адрес" },
    hours: { sr: "Radno vreme", ru: "Часы работы" },
    phone: { sr: "Telefon", ru: "Телефон" },
    transit: { sr: "Kako stići", ru: "Как добраться" },
    openMap: { sr: "Otvori u Google mapama →", ru: "Открыть в Google Картах →" },
    cities: {
      beograd: {
        tab: { sr: "Beograd", ru: "Белград" },
        place: { sr: "Ruski hram Svete Trojice", ru: "Русский храм Святой Троицы" },
        address: {
          sr: "Takovska 4, Beograd (Tašmajdanski park, pored crkve Sv. Marka)",
          ru: "Таковска 4, Белград (парк Ташмайдан, рядом с церковью Св. Марка)",
        },
        phone: "011 323 6435",
        hours: [
          { day: { sr: "Svakog dana", ru: "Ежедневно" }, time: { sr: "08:00 – 19:00 (okvirno)", ru: "08:00 – 19:00 (ориентировочно)" } },
          { day: { sr: "Sveta liturgija", ru: "Литургия" }, time: { sr: "nedeljom i praznicima ujutru", ru: "по воскресеньям и праздникам утром" } },
        ],
        transitText: {
          sr: "Autobusi 23, 24, 26, 27, 40 — stanica „Glavna pošta“",
          ru: "Автобусы 23, 24, 26, 27, 40 — остановка «Главна пошта»",
        },
        mapQuery: "Ruska crkva Svete Trojice, Takovska 4, Beograd",
      },
      peterburg: {
        tab: { sr: "Sankt Peterburg", ru: "Санкт-Петербург" },
        place: { sr: "Kapela Sv. Ksenije, Smolensko groblje", ru: "Часовня св. Ксении, Смоленское кладбище" },
        address: { sr: "Kamska ulica 24, Vasiljevsko ostrvo", ru: "Камская ул., 24, Васильевский остров" },
        phone: "—",
        hours: [
          { day: { sr: "Svakog dana", ru: "Ежедневно" }, time: { sr: "okvirno preko dana", ru: "ориентировочно в дневное время" } },
          { day: { sr: "Spomen Sv. Ksenije", ru: "Память св. Ксении" }, time: { sr: "6. februar", ru: "6 февраля" } },
        ],
        transitText: {
          sr: "Metro „Vasileostrovskaja“, pa kratka vožnja ili šetnja",
          ru: "Метро «Василеостровская», затем недолгая поездка или прогулка",
        },
        mapQuery: "Chapel of St. Xenia, Smolensky cemetery, Saint Petersburg",
      },
    },
  },

  footer: {
    line: { sr: "Kulturno-duhovno hodočašće", ru: "Культурно-духовное паломничество" },
  },

  /* Zajedničko */
  common: {
    photoCredit: { sr: "Foto: `Wikimedia Commons`", ru: "Фото: Wikimedia Commons" },
  },
};
