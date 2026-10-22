const cities=[
{id:"tokyo",name:"Tokyo",jp:"東京",date:"24–27 e 29–30 ottobre",emoji:"🏙️",intro:"Quartieri moderni, templi, negozi specializzati e cucina giapponese.",map:"Tokyo, Japan",days:[
{title:"25 ottobre · Ueno e Asakusa",area:"Ueno al mattino · Sensō-ji e Nakamise nel pomeriggio",items:[
 {"type":"shop","name":"Mizutani Camera","desc":"Negozio di fotocamere e orologi nell’area Ueno/Ameyoko · 10:00–17:00, chiuso il giovedì; controlla eventuali variazioni.","map":"Mizutani Camera, Ueno, Tokyo","route":true},
 {"type":"place","name":"Parco di Ueno","desc":"Grande parco cittadino, musei e passeggiate; scegli le tappe in base agli interessi.","map":"Ueno Park, Tokyo","route":true},
 {"type":"place","name":"Santuario Toshogu di Ueno","desc":"Santuario storico nel parco di Ueno.","map":"Ueno Toshogu Shrine, Tokyo","route":true},
 {"type":"place","name":"Laghetto Shinobazu-no-ike","desc":"Lago nel parco di Ueno, adatto a una passeggiata.","map":"Shinobazu Pond, Tokyo","route":true},
 {"type":"place","name":"Sensō-ji e Nakamise-dōri","desc":"Tempio storico e strada di bancarelle tradizionali. Meglio arrivare al mattino.","map":"Senso-ji, Tokyo","route":true},
 {"type":"place","name":"Tokyo Skytree","desc":"Torre panoramica e complesso commerciale a Sumida; abbinabile ad Asakusa se resta tempo.","map":"Tokyo Skytree, Tokyo","route":false},
 {"type":"place","name":"Centro Informazioni Turistiche Culturali","desc":"Belvedere e informazioni per orientarsi ad Asakusa.","map":"Asakusa Culture and Tourism Center, Tokyo","route":false},
 {"type":"shop","name":"Via Kappabashi Dougu","desc":"Negozi di coltelli da cucina, ceramiche e utensili: interessante per oggetti artigianali.","map":"Kappabashi Dougu Street, Tokyo","route":false},
 {"type":"place","name":"Ameyoko","desc":"Zona vivace con piccoli locali, street food e negozi vicino a Ueno.","map":"Ameyoko, Tokyo","route":false},
 {"type":"place","name":"Hoppy Street ホッピー通り","desc":"Vicolo di izakaya a due passi da Sensō-ji.","map":"Hoppy Street, Asakusa, Tokyo","route":false},
 {"type":"place","name":"Asahi Sky Room","desc":"Punto panoramico ad Asakusa; verifica orari e accesso.","map":"Asahi Sky Room, Tokyo","route":false},
 {"type":"hotel","name":"The Loop","desc":"Alloggio · 24–28 ottobre","map":"The Loop Tokyo, Japan","url":"https://share.google/oLenLwHLtgRf4sxIq","route":false},
 {"type":"shop","name":"Niki no Kashi","desc":"Negozio di dolci e snack ad Ameyoko.","map":"Niki no Kashi, Ameyoko, Tokyo","route":false},
 {"type":"shop","name":"Kiminoen Tea Garden","desc":"Negozio di tè salvato nella collection.","map":"Kiminoen Tea Garden, Tokyo","route":false},
  {"type":"shop","name":"Isetatsu","desc":"Bottega di Yanaka con stampe ukiyo-e e articoli di carta tradizionali; abbinabile alla zona di Ueno.","map":"Isetatsu, Yanaka, Tokyo","route":false},
 {"type":"shop","name":"KAMATA Hakensha - Japanese knife store","desc":"Negozio di coltelli giapponesi; abbinalo a Kappabashi.","map":"KAMATA Hakensha, Kappabashi, Tokyo","route":false},
 {"type":"shop","name":"Fujigoromo","desc":"Bottega di abbigliamento e articoli tradizionali ad Asakusa.","map":"Fujigoromo, Asakusa, Tokyo","route":false},
  {"type":"shop","name":"Mokuhankan Woodblock Print Shop","desc":"Bottega di stampe xilografiche giapponesi nel quartiere di Asakusa.","map":"Mokuhankan Woodblock Print Shop, Asakusa, Tokyo","route":false},
 {"type":"place","name":"ASAKUSA KOKONO CLUB HOTEL","desc":"Spazio con kimono in esposizione, salvato per la visita; non è un alloggio.","map":"ASAKUSA KOKONO CLUB HOTEL, Tokyo","route":false},
 {"type":"shop","name":"Japan Blue Jeans UENO","desc":"Negozio di denim nella zona di Ueno.","map":"Japan Blue Jeans Ueno, Tokyo","route":false},
 {"type":"shop","name":"JAPAN BLUE JEANS Asakusa","desc":"Negozio di denim ad Asakusa.","map":"Japan Blue Jeans Asakusa, Tokyo","route":false},
 {"type":"shop","name":"SASUGAYA OUTLET","desc":"Outlet di articoli di marca nell'area Ameyoko.","map":"SASUGAYA OUTLET Ueno, Tokyo","route":false},
 {"type":"shop","name":"TiCTAC Tokyo Solamachi (Skytree)","desc":"Negozio TiCTAC al 3º piano di Tokyo Solamachi; BREW Watch Co. è tra i marchi trattati. Verifica la disponibilità del modello prima di andare.","map":"TiCTAC Tokyo Solamachi, Tokyo","route":false}
]},
{title:"26 ottobre · Tsukiji, Ginza e cena prenotata",area:"Mercato al mattino · Ginza · cena alle 20:00",items:[
 {"type":"place","name":"Tsukiji Outer Market","desc":"Mercato e bancarelle per una visita mattutina; priorità al mercato, senza la tappa Toyosu.","map":"Tsukiji Outer Market, Tokyo","route":true},
 {"type":"place","name":"Tokyo Station e Marunouchi","desc":"Architettura della stazione, gallerie commerciali e passeggiata serale; area alternativa se resta tempo.","map":"Tokyo Station, Tokyo","route":false},
 {"type":"place","name":"Tokyo International Forum","desc":"Centro espositivo e sala concerti vicino a Tokyo Station.","map":"Tokyo International Forum, Tokyo","route":false},
 {"type":"place","name":"Ginza","desc":"Grandi magazzini, design e negozi di fascia alta.","map":"Ginza, Tokyo","route":true},
 {"type":"place","name":"Kabuki-za","desc":"Teatro kabuki nel quartiere di Ginza.","map":"Kabuki-za, Tokyo","route":false},
 {"type":"place","name":"teamLab Planets · facoltativo","desc":"Sceglierlo solo se il gruppo lo preferisce a Borderless; si trova a Toyosu e richiede spostamento e biglietto.","map":"teamLab Planets TOKYO, Toyosu","route":false},
 {"type":"place","name":"teamLab Borderless · facoltativo","desc":"Alternativa a Planets ad Azabudai Hills; decidere col gruppo e verificare disponibilità del biglietto.","map":"teamLab Borderless Azabudai Hills, Tokyo","route":false},
 {"type":"food","name":"Nogizaka Shin","desc":"Cena prenotata alle 20:00 il 26 ottobre.","map":"Nogizaka Shin, Tokyo","route":false},
 {"type":"food","name":"Tokyo Ramen Street","desc":"Area di ristoranti ramen all'interno del complesso della stazione; verifica orari e code.","map":"Tokyo Ramen Street, Tokyo","route":false},
 {"type":"food","name":"Depachika","desc":"Piani alimentari dei grandi magazzini: ottimi per assaggiare specialità e acquistare snack.","map":"Nihombashi Mitsukoshi, Tokyo","route":false},
 {"type":"hotel","name":"MyCUBE by MySTAYS Asakusa Kuramae","desc":"Alloggio · 29–30 ottobre","map":"MyCUBE by MySTAYS Asakusa Kuramae, Tokyo, Japan","url":"https://share.google/a2aVXyzMxUjx3rYxQ","route":false},
 {"type":"shop","name":"Matsuya Ginza","desc":"Grande magazzino nel quartiere di Ginza.","map":"Matsuya Ginza, Tokyo","route":false},
 {"type":"shop","name":"Ginza Itoya","desc":"Storica cartoleria e negozio di articoli creativi.","map":"Ginza Itoya, Tokyo","route":false},
 {"type":"shop","name":"Kyukyodo","desc":"Negozio tradizionale di carta, incenso e calligrafia a Ginza.","map":"Kyukyodo Ginza, Tokyo","route":false},
 {"type":"shop","name":"Shellman Watch & Jewelry","desc":"Negozio di orologi e gioielli a Ginza.","map":"Shellman Watch and Jewelry Ginza, Tokyo","route":false},
 {"type":"shop","name":"Ginza Natsuno Chopstick Craft Experience","desc":"Bacchette artigianali e attività a Ginza.","map":"Ginza Natsuno, Tokyo","route":false},
 {"type":"shop","name":"Motohashi Clock Shop","desc":"Negozio di orologi salvato nella collection.","map":"Motohashi Clock Shop, Tokyo, Japan","route":false}
]},{title:"27 ottobre · Meiji, Harajuku e Shibuya",area:"Santuario · Harajuku · Shibuya Sky alle 15:40",items:[
 {"type":"place","name":"Meiji Jingū","desc":"Santuario immerso nel verde; visita tranquilla al mattino.","map":"Meiji Jingu, Tokyo","route":true},
 {"type":"place","name":"Gotokuji","desc":"Tempio del maneki-neko; deviazione facoltativa, richiede partenza molto anticipata prima di Harajuku e Shibuya.","map":"Gotokuji Temple, Tokyo","route":false},
 {"type":"place","name":"Yoyogi-kōen","desc":"Grande parco accanto al santuario Meiji.","map":"Yoyogi Park, Tokyo","route":true},
 {"type":"place","name":"Takeshita Street","desc":"Via commerciale di Harajuku con negozi giovani e snack.","map":"Takeshita Street, Tokyo","route":true},
 {"type":"place","name":"Cat St","desc":"Passeggiata tra Harajuku e Shibuya con negozi e caffè.","map":"Cat Street, Tokyo","route":true},
 {"type":"place","name":"Shibuya Crossing","desc":"Incrocio pedonale iconico di Shibuya.","map":"Shibuya Scramble Crossing, Tokyo","route":true},
 {"type":"place","name":"Statua di Hachikō","desc":"Statua del cane Hachikō accanto all’uscita Hachikō della stazione di Shibuya.","map":"Hachikō Memorial Statue, Tokyo","route":true},
 {"type":"place","name":"Shibuya Sky","desc":"Osservatorio con ingresso prenotato il 27 ottobre alle 15:40–15:59.","map":"Shibuya Sky, Tokyo","route":true},
 {"type":"place","name":"Nonbei Yokocho","desc":"Vicolo con piccoli bar e locali; controlla orari e regole d'accesso.","map":"Nonbei Yokocho, Tokyo","route":false},
 {"type":"place","name":"Tokyu Plaza Omotesando “OMOKADO”","desc":"Complesso commerciale e terrazza in zona Omotesando.","map":"Tokyu Plaza Omotesando Omokado, Tokyo","route":false},
 {"type":"shop","name":"RAGTAG","desc":"Negozio di moda second hand; sede salvata in Maps.","map":"RAGTAG, Tokyo, Japan","route":false},
 {"type":"shop","name":"Shibuya Hikarie","desc":"Centro commerciale e culturale presso la stazione di Shibuya.","map":"Shibuya Hikarie, Tokyo","route":false},
 {"type":"shop","name":"UNITED TOKYO 神宮前","desc":"Negozio di abbigliamento a Jingumae.","map":"UNITED TOKYO Jingumae, Tokyo","route":false},
 {"type":"shop","name":"Mandarake Shibuya","desc":"Negozio di manga, anime e articoli da collezione.","map":"Mandarake Shibuya, Tokyo","route":false},
 {"type":"shop","name":"#FFFFFFT SENDAGAYA（シロティ千駄ヶ谷)","desc":"Negozio salvato nella collection; nota: maglietta bianca.","map":"#FFFFFFT SENDAGAYA, Sendagaya, Tokyo","route":false},
 {"type":"shop","name":"JAPAN BLUE JEANS Shibuya","desc":"Negozio di denim a Shibuya.","map":"Japan Blue Jeans Shibuya, Tokyo","route":false},
 {"type":"shop","name":"LOFT Shibuya","desc":"Nel LOFT Shibuya, al 1º piano, si trova On Time: rivenditore BREW Watch Co. Cerca i modelli Brew e verifica la disponibilità in negozio.","map":"LOFT Shibuya, Tokyo","route":false},
 {"type":"shop","name":"EDWIN TOKYO HARAJUKU","desc":"Negozio EDWIN a Harajuku.","map":"EDWIN Tokyo Harajuku, Tokyo","route":false},
 {"type":"shop","name":"STUDIOUS TOKYO 表参道","desc":"Negozio STUDIOUS a Omotesando.","map":"STUDIOUS Tokyo Omotesando, Tokyo","route":false},
 {"type":"shop","name":"MINT-SHIBUYA","desc":"Negozio di carte da collezione a Shibuya.","map":"MINT Shibuya, Tokyo","route":false},
 {"type":"shop","name":"Okayama Denim","desc":"Showroom a Daikanyama; l’accesso va prenotato sul sito ufficiale.","map":"Okayama Denim Daikanyama, Tokyo","route":false}
]},
{title:"Akihabara e Kanda · opzionale",area:"Cultura pop · santuario · se avanza tempo",items:[
 {"type":"place","name":"Santuario Kanda (Kanda Myojin)","desc":"Santuario vicino ad Akihabara, spesso abbinabile alla visita della zona.","map":"Kanda Myojin, Tokyo","route":true},
  {"type":"shop","name":"Komiyama Book Store","desc":"Libreria specializzata in arte, moda, grafica e fotografia a Jimbocho.","map":"Komiyama Book Store, Jimbocho, Tokyo","route":false},
 {"type":"place","name":"Akihabara Electric Town","desc":"Elettronica, manga, anime e negozi specializzati: scegli i negozi in base a ciò che cerchi.","map":"Akihabara Electric Town, Tokyo","route":false},
 {"type":"shop","name":"Akihabara Gachapon Hall","desc":"Negozio di capsule toy e gachapon.","map":"Akihabara Gachapon Hall, Tokyo","route":false},
 {"type":"shop","name":"Super Potato","desc":"Negozio di videogiochi retrò ad Akihabara.","map":"Super Potato Akihabara, Tokyo","route":false},
 {"type":"shop","name":"Yodobashi Akiba camera","desc":"Grande negozio di elettronica ad Akihabara.","map":"Yodobashi Akiba, Tokyo","route":false},
 {"type":"shop","name":"BicCamera AKIBA","desc":"Grande negozio di elettronica e fotocamere ad Akihabara.","map":"BicCamera AKIBA, Tokyo","route":false},{"type":"shop","name":"Mod Tokyo","desc":"Workshop per modifiche di Game Boy ad Akihabara; verifica disponibilità.","map":"Mod Tokyo Akihabara, Tokyo","route":false},
 {"type":"shop","name":"Akihabara Radio Center","desc":"Galleria di negozi di elettronica e componenti.","map":"Akihabara Radio Center, Tokyo","route":false},
  {"type":"shop","name":"Akihabara Radio Kaikan","desc":"Edificio commerciale di Akihabara con negozi di elettronica, anime e collezionismo.","map":"Akihabara Radio Kaikan, Tokyo","route":false},
  {"type":"shop","name":"Akiba Cultures Zone","desc":"Centro commerciale di Akihabara con negozi e spazi dedicati a hobby e cultura pop.","map":"Akiba Cultures Zone, Akihabara, Tokyo","route":false}
]},
{"title":"30 ottobre · Shinjuku al mattino (solo con treno pomeridiano)","area":"Gyoen · Hanazono · osservatorio · trasferimento a Kanazawa","items":[
 {"type":"place","name":"Shinjuku Gyoen","desc":"Uno dei grandi giardini di Tokyo, con aree paesaggistiche di stili diversi.","map":"Shinjuku Gyoen National Garden, Tokyo","route":true},
 {"type":"place","name":"Santuario Hanazono","desc":"Santuario nel cuore di Shinjuku.","map":"Hanazono Shrine, Shinjuku, Tokyo","route":true},
 {"type":"place","name":"Tokyo Metropolitan Government Building","desc":"Osservatori panoramici sullo skyline di Tokyo; controlla giorni e orari di apertura.","map":"Tokyo Metropolitan Government Building, Shinjuku, Tokyo","route":true},
 {"type":"place","name":"Omoide Yokocho","desc":"Vicolo animato con piccoli izakaya e locali.","map":"Omoide Yokocho, Shinjuku, Tokyo","route":false},
 {"type":"place","name":"Golden Gai","desc":"Vicolo di piccoli bar, da visitare la sera; verifica le regole e gli orari dei singoli locali.","map":"Shinjuku Golden Gai, Tokyo","route":false},
 {"type":"food","name":"Ben Fiddich","desc":"Cocktail bar serale; indicato al n. 44 nella classifica mondiale citata. Apri la sua scheda Maps separatamente dal percorso pedonale.","map":"Ben Fiddich, Shinjuku, Tokyo","route":false},
 {"type":"shop","name":"HANDS Shinjuku Store","desc":"Articoli creativi, casa e fai da te.","map":"Hands Shinjuku, Tokyo","route":false},
 {"type":"shop","name":"Sekaido Shinjuku","desc":"Cartoleria e materiali per arte e disegno.","map":"Sekaido Shinjuku, Tokyo","route":false},
 {"type":"shop","name":"Isetan Shinjuku","desc":"Grande magazzino di fascia alta; il piano B1 ospita i reparti gastronomici.","map":"Isetan Shinjuku, Tokyo","route":false},
 {"type":"shop","name":"Books Kinokuniya Shinjuku Main Store","desc":"Grande libreria di Shinjuku.","map":"Kinokuniya Shinjuku Main Store, Tokyo","route":false},
 {"type":"shop","name":"Ainz & Tulpe Shinjuku","desc":"Negozio di cosmetici e prodotti di bellezza.","map":"Ainz Tulpe Shinjuku, Tokyo","route":false},
  {"type":"shop","name":"Godzilla Store Tokyo","desc":"Negozio ufficiale dedicato a Godzilla, nell’area di Shinjuku.","map":"Godzilla Store Tokyo, Shinjuku, Tokyo","route":false}
]},{"title":"Minato · Zōjō-ji e Tokyo Tower","area":"Opzione il 29 ottobre, solo se rientro presto da Nikkō","items":[{"type":"place","name":"Zōjō-ji","desc":"Tempio storico ai piedi della Tokyo Tower.","map":"Zojoji Temple, Tokyo","route":true},{"type":"place","name":"Tokyo Tower","desc":"Torre panoramica nel quartiere di Minato.","map":"Tokyo Tower, Tokyo","route":true},{"type":"place","name":"The National Art Center, Tokyo","desc":"Museo a Roppongi; verifica le mostre e gli orari.","map":"The National Art Center Tokyo","route":false}]},{"title":"Odaiba · baia di Tokyo","area":"Passeggiata sul lungomare · collegare con i trasporti","items":[{"type":"place","name":"Statua della Libertà","desc":"Replica sul lungomare di Odaiba.","map":"Statue of Liberty Odaiba, Tokyo","route":false},{"type":"place","name":"Ponte dell’Arcobaleno","desc":"Ponte tra Odaiba e il centro di Tokyo.","map":"Rainbow Bridge, Tokyo","route":false}]},{"title":"Altre zone di Tokyo","area":"Punti salvati lontani dai cluster principali","items":[{"type":"place","name":"Rikugi-en","desc":"Giardino storico nella zona di Komagome.","map":"Rikugien Gardens, Tokyo","route":false},{"type":"shop","name":"Jack Road","desc":"Negozio di orologi a Nakano.","map":"Jack Road Nakano, Tokyo","route":false},{"type":"shop","name":"Nakano Broadway","desc":"Complesso di negozi e collezionismo a Nakano.","map":"Nakano Broadway, Tokyo","route":false},{"type":"shop","name":"PRIVATE EYE’S","desc":"Negozio di orologi vintage a Kita-ku.","map":"PRIVATE EYE'S Takinogawa, Tokyo","route":false},{"type":"shop","name":"Atelier Bigi","desc":"Servizio di riparazione, pulizia e vendita di orologi; sede nella zona di Honjo, Sumida.","map":"Atelier Bigi, Honjo, Sumida, Tokyo","route":false},{"type":"shop","name":"Fire Kids - Watch Shop","desc":"Negozio specializzato in orologi vintage, al 1º piano di Nakano Broadway.","map":"Fire Kids Watch Shop, Nakano Broadway, Tokyo","route":false},{"type":"shop","name":"Kapital","desc":"Negozio di moda a Ebisu, nel quartiere di Shibuya.","map":"Kapital, Ebisuminami, Shibuya, Tokyo","route":false},{"type":"shop","name":"TiCTAC Ikebukuro PARCO (TiCTAC Tokyo Japan)","desc":"Negozio TiCTAC al 4º piano di Ikebukuro PARCO; rivenditore BREW Watch Co. secondo la lista ufficiale. Verifica la disponibilità del modello.","map":"TiCTAC Ikebukuro PARCO, Tokyo","route":false},{"type":"place","name":"Oi Racecourse","desc":"Mercato delle pulci in date specifiche; controllare il calendario.","map":"Oi Racecourse flea market, Tokyo","route":false}]}]},{id:"nikko",name:"Nikko",jp:"日光",date:"28–29 ottobre",emoji:"🌲",intro:"Santuari, foreste e paesaggi montani.",days:[{title:"28 ottobre · Kinugawa Onsen",area:"Alloggio salvato nella collection POI",items:[{"type":"hotel","name":"Hotel Tsuga no Ki","desc":"Ryokan a Kinugawa Onsen, salvato nella collection POI; verifica che corrisponda al pernottamento prenotato.","map":"Hotel Tsuga no Ki, Kinugawa Onsen, Nikko, Tochigi","route":false}]}]},
{id:"kanazawa",name:"Kanazawa",jp:"金沢",date:"30 ottobre – 1 novembre",emoji:"🏯",intro:"Giardini storici, quartieri tradizionali e artigianato.",days:[{title:"Centro storico",area:"Giardini · tradizione",items:[{type:"hotel",name:"Hotel LINNAS Kanazawa",desc:"Alloggio · 30 ottobre–1 novembre",map:"LINNAS Kanazawa, Japan",url:"https://share.google/33aZd6YE03bXukCUg"},{type:"place",name:"Giardino Kenrokuen",desc:"Uno dei giardini paesaggistici più celebri del Giappone.",map:"Kenrokuen Garden, Kanazawa"},{type:"place",name:"Castello di Kanazawa",desc:"Area del castello adiacente al giardino.",map:"Kanazawa Castle Park"},{type:"place",name:"Higashi Chaya",desc:"Quartiere storico con case da tè e strade tradizionali.",map:"Higashi Chaya District, Kanazawa"},{type:"shop",name:"Negozi di foglia d'oro e artigianato",desc:"Cerca botteghe locali nel centro storico.",map:"Gold leaf shops Kanazawa"}]}]},
{id:"kyoto",name:"Kyoto",jp:"京都",date:"1–4 novembre",emoji:"⛩️",intro:"Templi, giardini, torii rossi e quartieri storici.",days:[{title:"Est di Kyoto",area:"Templi · vie storiche",items:[{type:"hotel",name:"Kyotofish.Sen",desc:"Alloggio · 1–4 novembre",map:"Kyotofish Sen, Kyoto, Japan",url:"https://maps.app.goo.gl/PuBT97nmokhKsXBB6"},{type:"place",name:"Kiyomizu-dera",desc:"Tempio panoramico; considera di arrivare presto.",map:"Kiyomizu-dera, Kyoto"},{type:"place",name:"Ninenzaka e Sannenzaka",desc:"Strade tradizionali con botteghe e sale da tè.",map:"Ninenzaka, Kyoto"},{type:"food",name:"Nishiki Market",desc:"Mercato gastronomico: verifica orari dei singoli banchi.",map:"Nishiki Market, Kyoto"},{"type":"place","name":"Nanzen-ji","desc":"Complesso di templi e giardini nell'est di Kyoto.","map":"Nanzen-ji, Kyoto","route":false}]},{title:"Fushimi e sud",area:"Torii · santuari",items:[{type:"place",name:"Fushimi Inari Taisha",desc:"Percorso tra i torii; puoi fare una passeggiata breve o salire più a lungo.",map:"Fushimi Inari Taisha, Kyoto"},{type:"food",name:"Punti ristoro della zona",desc:"Prova specialità locali e controlla gli orari dei locali.",map:"Fushimi Inari restaurants Kyoto"}]},{title:"Arashiyama",area:"Bambù · fiume",items:[{type:"place",name:"Bosco di bambù",desc:"Visita presto per ridurre l'affollamento.",map:"Arashiyama Bamboo Forest, Kyoto"},{type:"place",name:"Ponte Togetsukyō",desc:"Passeggiata sul fiume e dintorni.",map:"Togetsukyo Bridge, Kyoto"}]},{"title":"Nord-est · Rurikō-in e Palazzo Sento","area":"Verificare giorni e modalità d'accesso","items":[{"type":"place","name":"Tempio Rurikō-in","desc":"Tempio e giardino nella zona di Yase; controllare apertura stagionale.","map":"Rurikoin Temple, Kyoto","route":false},{"type":"place","name":"Palazzo Imperiale di Kyoto Sentō","desc":"Residenza imperiale storica; verificare orari e modalità di visita.","map":"Kyoto Sento Imperial Palace","route":false}]},{"title":"Uji · mezza giornata","area":"Escursione a sud di Kyoto","items":[{"type":"place","name":"Uji","desc":"Città nota per il tè, tra Kyoto e Nara.","map":"Uji, Kyoto, Japan","route":false}]},{"title":"Nara · parco e templi","area":"Escursione dedicata da Kyoto","items":[{"type":"place","name":"Santuario Kasuga","desc":"Santuario nel parco di Nara.","map":"Kasuga Taisha, Nara","route":false},{"type":"place","name":"Nigatsu-do","desc":"Padiglione sul monte Wakakusa, sopra Tōdai-ji.","map":"Nigatsudo, Nara","route":false},{"type":"place","name":"Tōdai-ji","desc":"Tempio con il Grande Buddha, nel parco di Nara.","map":"Todaiji Temple, Nara","route":false}]},{"title":"Negozi salvati · Kyoto","area":"Aprire le singole schede Maps per verificare la sede","items":[{"type":"shop","name":"musubi -kyoto-","desc":"Negozio salvato nella collection Negozi.","map":"musubi Kyoto, Japan","route":false},{"type":"shop","name":"Achuu Kyoto Vintage Clothes","desc":"Negozio vintage salvato nella collection Negozi.","map":"Achuu Kyoto Vintage Clothes, Kyoto","route":false}]},{"title":"Orologi vintage · Kyoto","area":"Nakagyō · centro","items":[{"type":"shop","name":"Ruchikuru","desc":"Negozio di orologi vintage a Nakagyō, salvato nella collection Google Maps.","map":"Ruchikuru Vintage Watch, Kyoto","route":false}]}]},
{id:"hiroshima",name:"Hiroshima",jp:"広島",date:"4–5 novembre",emoji:"🕊️",intro:"Memoria storica e cucina locale.",days:[{title:"5 novembre · mattina",area:"Memoriale della Pace",items:[{type:"hotel",name:"Toyoko Inn Hiroshima-eki Stadium Mae",desc:"Alloggio · 4–5 novembre",map:"Toyoko Inn Hiroshima-eki Stadium Mae, Japan",url:"https://share.google/lXN0VmGM6BmX535U3"},{type:"place",name:"Atomic Bomb Dome",desc:"Edificio memoriale vicino al parco.",map:"Atomic Bomb Dome, Hiroshima"},{type:"place",name:"Parco del Memoriale della Pace",desc:"Dedica tempo alla visita con calma.",map:"Hiroshima Peace Memorial Park"},{type:"place",name:"Museo del Memoriale della Pace",desc:"Controlla orari e modalità d'ingresso aggiornati.",map:"Hiroshima Peace Memorial Museum"},{type:"food",name:"Okonomiyaki alla maniera di Hiroshima",desc:"Specialità locale; scegli un locale in base alla zona e alle code.",map:"Hiroshima style okonomiyaki"}]}]},
{id:"miyajima",name:"Miyajima",jp:"宮島",date:"5 novembre",emoji:"🌊",intro:"Isola, santuario di Itsukushima e torii sul mare.",days:[{title:"Giornata sull'isola",area:"Santuario · paesaggio",items:[{type:"hotel",name:"Itsumoya",desc:"Alloggio · 5–6 novembre",map:"Itsumoya, Miyajima, Japan",url:"https://maps.app.goo.gl/8qf4rY93v1v3Ew1bA"},{type:"place",name:"Santuario di Itsukushima",desc:"Verifica orari e condizioni della marea per il panorama del torii.",map:"Itsukushima Shrine, Miyajima"},{type:"place",name:"Omotesandō Shopping Street",desc:"Strada commerciale con souvenir e specialità locali.",map:"Omotesando Shopping Street Miyajima"},{type:"food",name:"Momiji manju e ostriche",desc:"Due specialità dell'isola da cercare nei negozi e ristoranti locali.",map:"Miyajima oyster restaurants"},{"type":"place","name":"Daishoin","desc":"Tempio ai piedi del Monte Misen, raggiungibile a piedi dal santuario di Itsukushima.","map":"Daishoin Temple, Miyajima","route":false}]}]},
{id:"osaka",name:"Osaka",jp:"大阪",date:"6–8 novembre",emoji:"🍜",intro:"Street food, quartieri vivaci e shopping.",days:[{title:"Namba e Dotonbori",area:"Cibo · luci",items:[{type:"hotel",name:"R Hotel Honmachi",desc:"Alloggio · 6–8 novembre",map:"R Hotel Honmachi, Osaka, Japan",url:"https://share.google/Btjuxoi02t8DoL1WK"},{type:"place",name:"Dotonbori",desc:"Canale, insegne luminose e atmosfera serale.",map:"Dotonbori, Osaka"},{type:"food",name:"Takoyaki e okonomiyaki",desc:"Assaggia le specialità di Osaka nei locali della zona.",map:"Takoyaki Dotonbori Osaka"},{type:"shop",name:"Shinsaibashi-suji",desc:"Lunga galleria commerciale coperta.",map:"Shinsaibashi-suji Shopping Street, Osaka"},{"type":"shop","name":"Jikko Knives","desc":"Negozio di coltelli giapponesi a Osaka.","map":"Jikko Knives, Osaka","route":false}]},{title:"Cultura e mercati",area:"Mercati · castello",items:[{type:"place",name:"Castello di Osaka",desc:"Parco e castello; verifica gli orari se vuoi entrare.",map:"Osaka Castle"},{type:"food",name:"Mercato Kuromon",desc:"Mercato noto per pesce, prodotti e snack.",map:"Kuromon Ichiba Market, Osaka"},{type:"shop",name:"Den Den Town",desc:"Zona per elettronica, manga e cultura pop.",map:"Den Den Town, Osaka"}]},{title:"Tenjinbashisuji · nord di Osaka",area:"Shopping e vita di quartiere",items:[{"type":"place","name":"Tenjinbashi-suji Shopping Street","desc":"Lunga galleria commerciale a nord del centro di Osaka; è una zona distinta da Namba e Dotonbori.","map":"Tenjinbashisuji Shopping Street, Osaka","route":false}]}]}
,{"id":"extras","name":"Fuori itinerario","jp":"寄り道","date":"Tappe facoltative","emoji":"🧭","intro":"Luoghi salvati nelle collection ma distanti dal percorso confermato. Valutali solo se aggiungi giorni e trasferimenti.","map":"Japan","days":[{"title":"Tokorozawa · Saitama","area":"Da valutare come deviazione da Tokyo","items":[{"type":"place","name":"Kadokawa Musashino Museum","desc":"Museo e complesso culturale a Tokorozawa, Saitama.","map":"Kadokawa Musashino Museum, Tokorozawa, Saitama","route":false}]},{"title":"Tsugaru · Aomori","area":"Lontano dall'itinerario principale","items":[{"type":"place","name":"Takayama Inari Shrine","desc":"Santuario nella prefettura di Aomori.","map":"Takayama Inari Shrine, Aomori","route":false}]},{"title":"Yamanouchi · Nagano","area":"Lontano dall'itinerario principale","items":[{"type":"place","name":"Jigokudani Monkey Park","desc":"Parco delle scimmie nella prefettura di Nagano.","map":"Jigokudani Monkey Park, Nagano","route":false}]}]}
];
const labels={all:"Tutto",place:"Luoghi",shop:"Negozi",food:"Ristoranti",hotel:"Alloggi"};
const icons={place:"⛩️",shop:"💈",food:"🍣",hotel:"🏨"};
const LOCAL_KEY="japan2026-local-data-v1";
function readLocalData(){try{const d=JSON.parse(localStorage.getItem(LOCAL_KEY)||'{"visited":{},"notes":{},"checklist":{},"favorites":[]}');return {...{visited:{},notes:{},checklist:{},favorites:[]},...d}}catch(e){return {visited:{},notes:{},checklist:{},favorites:[]}}}
function writeLocalData(data){try{localStorage.setItem(LOCAL_KEY,JSON.stringify(data))}catch(e){}}
function activityKey(city,day,item){return [city,day,item].join("::")}
const list=document.getElementById("city-list"),detail=document.getElementById("city-detail");let selected="tokyo",selectedDay=0,filter="all",cityMenuOpen=true;
const cityMenuToggle=document.getElementById("toggle-city-menu");
if(cityMenuToggle)cityMenuToggle.onclick=()=>{cityMenuOpen=!cityMenuOpen;list.hidden=!cityMenuOpen;cityMenuToggle.setAttribute("aria-expanded",String(cityMenuOpen));cityMenuToggle.setAttribute("aria-label",cityMenuOpen?"Chiudi menu delle città":"Apri menu delle città");cityMenuToggle.innerHTML=cityMenuOpen?"⌃ <span>Nascondi</span>":"⌄ <span>Mostra città</span>"};
function renderCities(){list.innerHTML=cities.map(c=>`<button class="city ${c.id===selected?"selected":""}" data-city="${c.id}"><span class="emoji">${c.emoji}</span><b>${c.name}</b><small>${c.date}</small></button>`).join("");list.querySelectorAll("[data-city]").forEach(b=>b.onclick=()=>{selected=b.dataset.city;selectedDay=0;filter="all";renderCities()});list.hidden=!cityMenuOpen;renderDetail()}
function renderDetail(){const c=cities.find(x=>x.id===selected);if(!c)return;const days=c.days||[];if(selectedDay>=days.length)selectedDay=0;const day=days[selectedDay]||{title:"Da completare",area:"",items:[]};
const cityQuery=encodeURIComponent(c.map||c.name+', Japan');
const dayLocations=day.items.filter(x=>x.route!==false).map(x=>x.map).filter(Boolean);
const dayMapLocations=day.items.map(x=>x.map).filter(Boolean);const routeUrl=dayLocations.length>1?`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(dayLocations[0])}&destination=${encodeURIComponent(dayLocations[dayLocations.length-1])}${dayLocations.length>2?'&waypoints='+encodeURIComponent(dayLocations.slice(1,-1).join('|')):'' }&travelmode=walking`:dayMapLocations.length===1?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dayMapLocations[0])}`:`https://www.google.com/maps/search/?api=1&query=${cityQuery}`
detail.innerHTML=`<div class="detail-top"><span class="eyebrow">${c.jp} · ${c.date}</span><h3>${c.emoji} ${c.name}</h3><p>${c.intro}</p><div class="city-map-actions"><a class="action" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${cityQuery}">Apri mappa della città ↗</a><a class="action" target="_blank" rel="noopener" href="${routeUrl}">Percorso del giorno ↗</a></div></div>
<div class="map-panel"><div class="map-heading"><div><span class="eyebrow">MAPPA INTERATTIVA</span><h4>${c.name} e dintorni</h4></div><a class="action" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${cityQuery}">Apri Google Maps ↗</a></div><iframe title="Mappa Google Maps di ${c.name}" src="https://maps.google.com/maps?q=${cityQuery}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><p class="small">La mappa incorporata mostra la zona della località. Usa i link dei singoli luoghi per vedere i punti esatti.</p></div>
<div class="day-heading"><span class="eyebrow">ITINERARIO SUGGERITO</span><h4>Organizza la giornata</h4></div>
<div class="day-tabs">${days.map((d,i)=>`<button class="day-tab ${i===selectedDay?"selected":""}" data-day="${i}">${d.title}</button>`).join("")}</div>
<div class="activity-section-head"><strong>Luoghi della giornata</strong><button class="collapse-toggle arrow-only" id="toggle-places" type="button" aria-expanded="true" aria-label="Comprimi elenco luoghi">⌃</button></div><div id="places-content"><div class="filters">${Object.entries(labels).map(([k,v])=>`<button class="filter ${filter===k?"selected":""}" data-filter="${k}">${v}</button>`).join("")}</div>
<div class="activity-list compact-activity-list">${day.items.filter(x=>filter==="all"||x.type===filter).map((x,i)=>{const q=encodeURIComponent(x.map||`${x.name}, ${c.name}, Japan`);const maps=x.url||`https://www.google.com/maps/search/?api=1&query=${q}`;return `<div class="activity activity-row"><button type="button" class="row-open" data-open-place="${i}" aria-label="Apri dettagli di ${x.name.replace(/"/g,'&quot;')}"><span class="activity-icon">${icons[x.type]}</span><span class="activity-row-name">${x.name}</span></button><a class="row-maps-link" href="${maps}" target="_blank" rel="noopener" aria-label="Apri ${x.name} su Google Maps" title="Google Maps">↗</a></div>`}).join("")||'<p class="muted">Nessuna voce in questa categoria per la giornata selezionata.</p>'}</div></div>
<div class="route-launch"><div><b>Segui le tappe della giornata</b><p class="small">Apri il percorso su Google Maps con le tappe in ordine.</p></div><a class="action" target="_blank" rel="noopener" href="${routeUrl}">Apri itinerario ↗</a></div>
<div class="note">L'itinerario è una bozza organizzata per zone. Controlla aperture, prenotazioni e tempi di spostamento prima della visita.</div>`;
detail.querySelectorAll("[data-day]").forEach(b=>b.onclick=()=>{selectedDay=Number(b.dataset.day);renderDetail()});detail.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{filter=b.dataset.filter;renderDetail()});
const placesToggle=detail.querySelector("#toggle-places"),placesContent=detail.querySelector("#places-content");if(placesToggle&&placesContent){placesToggle.onclick=()=>{const open=placesToggle.getAttribute("aria-expanded")!=="true";placesToggle.setAttribute("aria-expanded",String(open));placesContent.hidden=!open;placesToggle.innerHTML=open?"⌃":"⌄";placesToggle.setAttribute("aria-label",open?"Comprimi elenco luoghi":"Espandi elenco luoghi")};}
detail.querySelectorAll("[data-open-place]").forEach((row)=>{row.onclick=()=>{const index=Number(row.dataset.openPlace);const items=day.items.filter(x=>filter==="all"||x.type===filter);const place=items[index];if(place)renderPlaceDetail(c,place)}});

}
function renderPlaceDetail(city,place){
 const query=encodeURIComponent(place.map||`${place.name}, ${city.name}, Japan`);
 const mapsUrl=place.url||`https://www.google.com/maps/search/?api=1&query=${query}`;
 const directionsUrl=`https://www.google.com/maps/dir/?api=1&destination=${query}`;
 detail.innerHTML=`<div class="place-detail-page"><button type="button" class="back-to-city" id="back-to-city">‹ Indietro</button><span class="eyebrow">${labels[place.type].toUpperCase()} · ${city.name}</span><h3>${icons[place.type]} ${place.name}</h3><p class="place-description">${place.desc||""}</p><div class="map-panel place-map-panel"><div class="map-heading"><div><span class="eyebrow">MAPPA DEL LUOGO</span><h4>${place.name}</h4></div></div><iframe title="Mappa di ${place.name}" src="https://maps.google.com/maps?q=${query}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div><div class="place-info-card"><span class="eyebrow">INDIRIZZO</span><p>Consulta l'indirizzo completo e aggiornato nella scheda Google Maps del luogo.</p><a class="action" target="_blank" rel="noopener" href="${mapsUrl}">📍 Indirizzo su Google Maps ↗</a></div><div class="place-info-card"><span class="eyebrow">RECENSIONI GOOGLE</span><p>Apri la scheda Google Maps per leggere le recensioni e vedere la valutazione più recente.</p><a class="action" target="_blank" rel="noopener" href="${mapsUrl}#reviews">⭐ Leggi le recensioni ↗</a></div><a class="directions-button" target="_blank" rel="noopener" href="${directionsUrl}">Ottieni indicazioni su Google Maps ↗</a></div>`;
 detail.querySelector("#back-to-city").onclick=()=>renderDetail();
}
function renderProgram(){
 const host=document.getElementById("program-list");if(!host)return;
 const schedule=[
   {
     "date": "24 ottobre",
     "city": "Tokyo",
     "id": "tokyo",
     "title": "Arrivo e sistemazione",
     "day": -1,
     "extra": "Arrivo a Tokyo e sistemazione in hotel; programma leggero in base all’orario di arrivo."
   },
   {
     "date": "25 ottobre",
     "city": "Tokyo",
     "id": "tokyo",
     "title": "Ueno e Asakusa",
     "day": 0,
     "extra": "A Ueno in mattinata: Mizutani Camera (10:00–17:00, chiuso il giovedì), poi parco, Toshogu e Shinobazu. Prosegui verso Asakusa entro le 15:00–15:30 per Sensō-ji e Nakamise (il tempio chiude alle 17:00 in ottobre). Skytree, Kappabashi e Ameyoko solo se resta tempo."
   },
   {
     "date": "26 ottobre",
     "city": "Tokyo",
     "id": "tokyo",
     "title": "Tsukiji, Ginza e cena a Nogizaka",
     "day": 1,
     "extra": "Tsukiji al mattino e Ginza in seguito. teamLab è facoltativo e da decidere col gruppo: se scelto, inserite una sola sede (Planets a Toyosu oppure Borderless ad Azabudai) e verificate il biglietto. Cena prenotata da Nogizaka Shin alle 20:00."
   },
   {
     "date": "27 ottobre",
     "city": "Tokyo",
     "id": "tokyo",
     "title": "Gotokuji (facoltativo), Meiji, Harajuku e Shibuya",
     "day": 2,
     "extra": "Giornata densa: Gotokuji solo con partenza molto presto, altrimenti saltalo. Poi Meiji Jingū, Harajuku/Omotesando e Shibuya; ingresso prenotato a Shibuya Sky il 27 alle 15:40–15:59. Omoide Yokocho e Golden Gai sono solo un’opzione serale se restano energie. Il 28 il treno da Shinjuku parte alle 10:31 e arriva a Kinugawa alle 12:36: prepara i bagagli."
   },
   {
     "date": "28 ottobre",
     "city": "Nikkō",
     "id": "nikko",
     "title": "Trasferimento e visita di Nikkō",
     "day": 0,
     "extra": "Treno Shinjuku → Kinugawa Onsen: 10:31–12:36 (orario comunicato)."
   },
   {
     "date": "29 ottobre",
     "city": "Nikkō → Tokyo",
     "id": "nikko",
     "title": "Visite e rientro a Tokyo",
     "day": 0,
     "extra": "🗓️ Da prenotare: rientro da Tobu-Nikkō; scegliere Asakusa oppure Shinjuku."
   },
   {
     "date": "29 ottobre · solo se rientro presto",
     "city": "Tokyo · facoltativo",
     "id": "tokyo",
     "title": "Zōjō-ji e Tokyo Tower",
     "day": 5,
     "extra": "Solo se il rientro da Nikkō lascia tempo ed energie; altrimenti salta questa tappa."
   },
   {
     "date": "30 ottobre · solo con Shinkansen nel pomeriggio",
     "city": "Tokyo · facoltativo",
     "id": "tokyo",
     "title": "Shinjuku Gyoen, Hanazono e osservatorio",
     "day": 4,
     "extra": "Possibile solo se il treno per Kanazawa parte dopo pranzo: Gyoen all’apertura, poi Hanazono e Metropolitan Government Building. Se il treno è al mattino o a inizio pomeriggio, salta questa visita e vai direttamente in stazione."
   },
   {
     "date": "30 ottobre",
     "city": "Tokyo → Kanazawa",
     "id": "kanazawa",
     "title": "Trasferimento a Kanazawa",
     "day": 0,
     "extra": "🗓️ Hokuriku Shinkansen: prenotazione e orario da confermare."
   },
   {
     "date": "31 ottobre",
     "city": "Kanazawa",
     "id": "kanazawa",
     "title": "Centro storico e giardini",
     "day": 0
   },
   {
     "date": "1 novembre",
     "city": "Kanazawa → Kyoto",
     "id": "kyoto",
     "title": "Trasferimento a Kyoto",
     "day": 0,
     "extra": "Tsuruga → Kyoto indicato 08:37–09:34; cambio di 8 minuti."
   },
   {
     "date": "2 novembre",
     "city": "Kyoto",
     "id": "kyoto",
     "title": "Kyoto e cooking class",
     "day": 0,
     "extra": "🗓️ Cooking class Manryo alle 10:00: prenotazione effettuata da Silvia."
   },
   {
     "date": "3 novembre",
     "city": "Kyoto",
     "id": "kyoto",
     "title": "Fushimi Inari e sud di Kyoto",
     "day": 1
   },
   {
     "date": "4 novembre",
     "city": "Kyoto → Hiroshima",
     "id": "hiroshima",
     "title": "Trasferimento a Hiroshima",
     "day": 0,
     "extra": "🗓️ Shinkansen da prenotare; partenza indicativa 09:00–10:00."
   },
   {
     "date": "5 novembre",
     "city": "Hiroshima → Miyajima",
     "id": "hiroshima",
     "title": "Memoriale della Pace e Miyajima",
     "day": 0,
     "extra": "🗓️ Tour guidato al museo alle 11:15 prenotato da Silvia; poi traghetto per Miyajima, da verificare."
   },
   {
     "date": "6 novembre",
     "city": "Miyajima → Osaka",
     "id": "osaka",
     "title": "Trasferimento a Osaka",
     "day": 0,
     "extra": "🗓️ Treno per Osaka da prenotare in base all'orario di partenza."
   },
   {
     "date": "7 novembre",
     "city": "Osaka",
     "id": "osaka",
     "title": "Namba, Dotonbori e street food",
     "day": 0
   },
   {
     "date": "8 novembre",
     "city": "Osaka",
     "id": "osaka",
     "title": "Ultime visite e partenza",
     "day": 1
   }
 ];
 host.innerHTML=schedule.map(s=>{const c=cities.find(x=>x.id===s.id);const d=c?.days?.[s.day];const items=(d?.items||[]).filter(x=>x.route!==false).map(x=>x.name);return `<article class="program-day"><div class="program-day-head"><h3>${s.city}</h3><span class="program-date">${s.date}</span></div><p><strong>${s.title}</strong></p>${s.extra?`<p class="${/🗓️|prenotaz|prenotat|da prenotare/i.test(s.extra)?"booking-text":""}">${s.extra}</p>`:""}${items.length?`<ul>${items.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}<a href="#" class="program-city-link" data-open-city="${s.id}" data-open-day="${s.day<0?0:s.day}">Apri dettagli e mappa della città ↗</a></article>`}).join("");
 host.querySelectorAll("[data-open-city]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();selected=a.dataset.openCity;selectedDay=Number(a.dataset.openDay||0);filter="all";renderCities();document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.view==="itinerary"));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id==="itinerary"));window.scrollTo({top:0,behavior:"smooth"})}));
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===b));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===b.dataset.view));window.scrollTo({top:0,behavior:"smooth"})});
renderCities();renderProgram();

function initSavedPlaceSearch(){
 const form=document.getElementById("saved-place-search-form");
 if(!form)return;
 const input=document.getElementById("saved-place-search-input");
 const output=document.getElementById("saved-place-search-results");
 const status=document.getElementById("saved-place-search-status");
 const nearbyButton=document.getElementById("saved-place-nearby-button");
 let currentPosition=null;
 const stopWords=new Set(["cerco","cerca","cercare","cercami","trovami","trova","mostra","mostrami","vorrei","voglio","dove","quale","quali","cosa","posto","posti","vicino","vicina","vicini","vicine","dintorni","near","nearby","nearest","me","piu","a","ad","al","allo","alla","ai","agli","alle","da","dal","dalla","di","del","dello","della","dei","degli","delle","in","nel","nello","nella","nei","nelle","con","per","un","uno","una","il","lo","la","i","gli","le","the","to","for","my","show","find","looking","please","negozio","negozi","shop","shops","store","stores","boutique"]);
 const synonymGroups=[
  ["coltello","coltelli","coltelleria","knife","knives","cutlery","kitchen knife","japanese knife"],
  ["libreria","librerie","bookstore","bookshop","books"],
  ["cartoleria","cartolerie","stationery","stationer","art supplies","cartoleria"],
  ["tempio","templi","temple","temples","shrine","shrines","santuario","santuari"],
  ["ristorante","ristoranti","restaurant","restaurants","cibo","food","dove mangiare"],
  ["giardino","giardini","garden","gardens","parco","parchi","park"],
  ["fotocamera","fotocamere","camera","cameras"],
  ["cosmetici","cosmetico","cosmetics","beauty"],
  ["bar","cocktail","cocktail bar","izakaya"]
 ];
 const normalize=value=>String(value||"").toLocaleLowerCase("it").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim();
 const escapeHtml=value=>String(value||"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const hasNearbyRequest=query=>/\b(vicino|vicina|vicini|vicine|dintorni|nearby)\b|\bnear me\b|\bpiu vicino\b/.test(normalize(query));
 function requestedTypes(query){
  const n=normalize(query);
  if(/\b(negozio|negozi|shop|shops|store|stores|boutique)\b/.test(n))return ["shop"];
  if(/\b(ristorante|ristoranti|restaurant|restaurants|cibo|food|bar|izakaya)\b/.test(n))return ["food"];
  if(/\b(alloggio|hotel|hotels|hostel|capsule)\b/.test(n))return ["hotel"];
  return null;
 }
 function termsFor(query){
  const n=normalize(query);
  const tokens=n.split(/\s+/).filter(t=>t&&!stopWords.has(t));
  return tokens.map(token=>{
   const group=synonymGroups.find(g=>g.some(word=>{const w=normalize(word);return w===token||(token.length>4&&w.startsWith(token))||(w.length>4&&token.startsWith(w));}));
   return group||[token];
  }).filter((group,i,all)=>all.findIndex(other=>other===group||other[0]===group[0])===i);
 }
 function getSavedItems(){
  const all=[];
  (cities||[]).forEach(city=>(city.days||[]).forEach(day=>(day.items||[]).forEach(item=>{
   if(!item||!item.name)return;
   all.push({...item,cityName:city.name,dayTitle:day.title,mapQuery:item.map||item.name+", "+city.name+", Japan"});
  })));
  if(typeof restaurants!=="undefined"&&Array.isArray(restaurants))restaurants.forEach(item=>{
   if(!item||!item.name)return;
   all.push({type:"food",name:item.name,desc:item.desc||"Ristorante salvato",cityName:item.city||"Località da verificare",dayTitle:"Ristoranti salvati",mapQuery:item.name+(item.city?", "+item.city:"")+", Japan"});
  });
  const seen=new Set();
  return all.filter(item=>{const key=normalize(item.name)+"|"+normalize(item.cityName);if(seen.has(key))return false;seen.add(key);return true;});
 }
 function matchingPlaces(query){
  const groups=termsFor(query),types=requestedTypes(query);
  if(!groups.length&&!types)return {items:[],groups};
  const scored=getSavedItems().map(item=>{
   if(types&&!types.includes(item.type))return null;
   const corpus=normalize([item.name,item.desc,item.map,item.cityName,item.dayTitle,item.type].join(" "));
   let score=0;
   for(const group of groups){
    const matched=group.some(word=>{const term=normalize(word);return term&&(" "+corpus+" ").includes(" "+term+" ");});
    if(!matched)return null;
    score+=group.some(word=>normalize(item.name).includes(normalize(word)))?4:1;
   }
   return {...item,score};
  }).filter(Boolean);
  scored.sort((x,y)=>y.score-x.score||x.name.localeCompare(y.name,"it"));
  return {items:scored,groups};
 }
 function categoryLabel(type){return ({shop:"Negozio",place:"Luogo",food:"Cibo",hotel:"Alloggio"})[type]||"Salvato";}
 function distanceKm(a,b){
  if(!Number.isFinite(a.lat)||!Number.isFinite(a.lng)||!Number.isFinite(b.lat)||!Number.isFinite(b.lng))return null;
  const rad=n=>n*Math.PI/180,lat1=rad(a.lat),lat2=rad(b.lat),dlat=lat2-lat1,dlng=rad(b.lng-a.lng);
  const h=Math.sin(dlat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dlng/2)**2;
  return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));
 }
 function mapSearchTerm(query){
  const n=normalize(query);
  if(/\bcoltell\w*|\b(knife|knives|cutlery)\b/.test(n))return "Japanese kitchen knife shop";
  if(/\bcartoler\w*|\b(stationery|art supplies)\b/.test(n))return "stationery shop";
  if(/\blibrer\w*|\b(bookstore|bookshop|books)\b/.test(n))return "bookstore";
  if(/\b(cosmetic\w*|beauty)\b/.test(n))return "cosmetics shop";
  if(/\b(ristorant\w*|restaurant\w*|cibo|food|bar|izakaya)\b/.test(n))return "restaurant";
  const words=n.split(/\s+/).filter(t=>t&&!stopWords.has(t));return words.join(" ")||"shops";
 }
 function googleNearbyUrl(query,position){
  const term=mapSearchTerm(query);
  const near=position?" near "+position.coords.latitude.toFixed(3)+","+position.coords.longitude.toFixed(3):"";
  return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(term+near);
 }
 function renderResults(query,position){
  const found=matchingPlaces(query);
  if(!normalize(query)){status.textContent="Scrivi cosa cerchi, per esempio “negozio di coltelli vicino a me”.";output.innerHTML="";return;}
  if(!found.groups.length&&!requestedTypes(query)){status.textContent="Specifica un tipo di luogo o un nome, per esempio “libreria” o “coltelli”.";output.innerHTML="";return;}
  const items=found.items;
  if(position)items.sort((a,b)=>{
   const here={lat:position.coords.latitude,lng:position.coords.longitude};const da=distanceKm(here,a),db=distanceKm(here,b);
   if(da!==null&&db!==null)return da-db;
   if(da!==null)return -1;if(db!==null)return 1;
   return b.score-a.score||a.name.localeCompare(b.name,"it");
  });
  const origin=position?position.coords.latitude.toFixed(4)+","+position.coords.longitude.toFixed(4):"";
  let html="";
  html+='<div class="saved-search-group"><h3>Nei luoghi salvati ('+items.length+')</h3>';
  if(position&&!items.some(x=>Number.isFinite(x.lat)&&Number.isFinite(x.lng)))html+='<p class="small">La guida non contiene le coordinate dei luoghi salvati, quindi non può ordinarli per distanza. Li mostro prima; “Indicazioni da qui” apre il percorso e la distanza in Maps.</p>';
  if(items.length){
   html+='<div class="saved-search-list">';
   items.slice(0,40).forEach(item=>{
    const distance=position?distanceKm({lat:position.coords.latitude,lng:position.coords.longitude},item):null;
    const queryValue=encodeURIComponent(item.mapQuery);
    const mapsUrl="https://www.google.com/maps/search/?api=1&query="+queryValue;
    const directionsUrl=position?"https://www.google.com/maps/dir/?api=1&origin="+encodeURIComponent(origin)+"&destination="+queryValue:"";
    const distanceText=distance===null?"":' · '+distance.toFixed(1)+' km';
    html+='<article class="saved-search-card"><div class="saved-search-card-head"><span class="saved-search-type">'+escapeHtml(categoryLabel(item.type))+'</span><span class="saved-search-place">'+escapeHtml(item.cityName||"")+'</span></div><h4>'+escapeHtml(item.name)+'</h4><p>'+escapeHtml(item.desc||"")+'</p><p class="small">'+escapeHtml(item.dayTitle||"Luogo salvato")+distanceText+'</p><div class="saved-search-links"><a target="_blank" rel="noopener" href="'+mapsUrl+'">Apri su Maps ↗</a>'+(position?'<a target="_blank" rel="noopener" href="'+directionsUrl+'">Indicazioni da qui ↗</a>':"")+'</div></article>';
   });
   html+="</div>";
  }else{
   html+='<p class="small">Non trovo corrispondenze salvate con queste parole.</p>';
  }
  html+="</div>";
  if(hasNearbyRequest(query)||position){
   const nearbyUrl=googleNearbyUrl(query,position);
   html+='<div class="external-search-card"><h3>Altri risultati vicino a te</h3><p class="small">Google Maps mostra le attività disponibili nell’area. I risultati possono includere luoghi non salvati nella guida.</p><a class="action-button" target="_blank" rel="noopener" href="'+nearbyUrl+'">Cerca altri risultati su Google Maps ↗</a></div>';
  }
  output.innerHTML=html;
 }
 function search(query,requestLocation){
  const q=String(query||"").trim();
  if(!q){status.textContent="Scrivi cosa cerchi, per esempio “negozio di coltelli vicino a me”.";output.innerHTML="";return;}
  const wantLocation=requestLocation||hasNearbyRequest(q);
  if(!wantLocation){currentPosition=null;status.textContent="Cerco prima nei luoghi salvati.";renderResults(q,null);return;}
  if(!navigator.geolocation){currentPosition=null;status.textContent="La posizione non è disponibile in questo browser. Mostro i risultati salvati.";renderResults(q,null);return;}
  status.textContent="Richiesta della posizione…";
  nearbyButton.disabled=true;
  navigator.geolocation.getCurrentPosition(position=>{
   currentPosition=position;
   nearbyButton.disabled=false;
   status.textContent="Posizione acquisita. Mostro prima i luoghi salvati; i risultati esterni si aprono su Google Maps.";
   renderResults(q,currentPosition);
  },error=>{
   currentPosition=null;nearbyButton.disabled=false;
   status.textContent=error&&error.code===1?"Accesso alla posizione negato. Mostro i luoghi salvati; puoi autorizzare la posizione nelle impostazioni del browser.":"Non riesco a leggere la posizione. Mostro i luoghi salvati e puoi riprovare.";
   renderResults(q,null);
  },{enableHighAccuracy:false,timeout:12000,maximumAge:60000});
 }
 form.addEventListener("submit",event=>{event.preventDefault();search(input.value,false);});
 nearbyButton.addEventListener("click",()=>search(input.value,true));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initSavedPlaceSearch,{once:true});else initSavedPlaceSearch();

const checklistItems=[
 {id:"shibuya-sky",text:"Controllare conferma Shibuya Sky · 27 ottobre, 15:40–15:59"},
 {id:"nikko-return",text:"Prenotare il rientro Tobu-Nikkō → Tokyo · 29 ottobre"},
 {id:"tokyo-kanazawa",text:"Prenotare Tokyo → Kanazawa · 30 ottobre"},
 {id:"kyoto-hiroshima",text:"Prenotare Kyoto → Hiroshima · 4 novembre"},
 {id:"miyajima-ferry",text:"Verificare treno e traghetto per Miyajima · 5 novembre"},
 {id:"hiroshima-osaka",text:"Prenotare Hiroshima → Osaka · 6 novembre"},
 {id:"manryo",text:"Tenere a portata la conferma cooking class Manryo · 2 novembre, 10:00"},
 {id:"peace-museum",text:"Tenere a portata i biglietti del Peace Memorial Museum · 5 novembre, 11:15"},
 {id:"offline-maps",text:"Scaricare le mappe offline delle zone del viaggio in Google Maps"},
 {id:"backup",text:"Esportare un backup dei dati personali prima della partenza"}
];
function renderChecklist(){const host=document.getElementById("travel-checklist");if(!host)return;const data=readLocalData();host.innerHTML=checklistItems.map(item=>`<label class="checklist-item"><input type="checkbox" data-checklist="${item.id}" ${data.checklist[item.id]?'checked':''}><span>${item.text}</span></label>`).join("");host.querySelectorAll("[data-checklist]").forEach(el=>el.addEventListener("change",()=>{const d=readLocalData();d.checklist[el.dataset.checklist]=el.checked;writeLocalData(d);renderChecklist()}));const done=checklistItems.filter(x=>data.checklist[x.id]).length;const progress=document.getElementById("checklist-progress");if(progress)progress.textContent=`${done} di ${checklistItems.length} completate`;}
renderChecklist();
function downloadLocalBackup(){
 const payload={app:"Japan 2026",version:1,exportedAt:new Date().toISOString(),data:readLocalData()};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="japan-2026-backup.json";a.click();URL.revokeObjectURL(url);
 const status=document.getElementById("backup-status");if(status)status.textContent="Backup esportato. Puoi inviare il file a un altro telefono.";
}
document.getElementById("export-data")?.addEventListener("click",downloadLocalBackup);
document.getElementById("import-data")?.addEventListener("change",async e=>{
 const file=e.target.files&&e.target.files[0];if(!file)return;
 const status=document.getElementById("backup-status");
 try{const payload=JSON.parse(await file.text());const d=payload.data||payload;if(!d||typeof d!=="object"||!d.visited||!d.notes)throw new Error("Formato non valido");
 const current=readLocalData();const merged={visited:{...current.visited,...d.visited},notes:{...current.notes,...d.notes},checklist:{...(current.checklist||{}),...(d.checklist||{})},favorites:[...new Set([...(current.favorites||[]),...(d.favorites||[])])]};writeLocalData(merged);renderChecklist();if(status)status.textContent="Backup importato. Le note e le visite sono state unite ai dati presenti.";renderDetail();
 }catch(err){if(status)status.textContent="Impossibile importare: seleziona un backup Japan 2026 valido."}
 e.target.value="";
});
