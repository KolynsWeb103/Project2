const monsters = [
    {
        "name": "Felyne",
        "type": "Lynian",
        "description": "Cat-like humanoids called Lynians that are noted for their white fur. Felynes are quiet until angered, in which case they may attack. Capable of speech, they are sometimes found in the employ of human masters.",
        "image": "/public/images/ico_felyne.png"
    },
    {
        "name": "Melynx",
        "type": "Lynian",
        "description": "Cat-like humanoids called Lynians with black fur. Their sticky-fingers never miss a chance to steal things and take them back to their den, forcing victims to seek out thelr lost items. Distracted by the siaht of Felvine.",
        "image": "/public/images/ico_melynx.png"
    },
    {
        "name": "Shakalaka",
        "type": "Lynian",
        "description": "Small, four-limbed monsters known for always wearing a mask. They specialize in camouflage, and once they turn thelr special skill on, they're virtually impossible to find. It's said that a settlement has been found deep in the forest.",
        "image": "/public/images/ico_shakalaka.png"
    },
    {
        "name": "King Shakalaka",
        "type": "Lynian",
        "description": "A crown-like object sits upon this leader of the Shakalaka's brow. Many a skilled hunter have been frustrated by the minions it attracts to its side. But be wary, for it's one powerful foe. When infuriated, it will unleash an unimaainably strong attack.",
        "image": "/public/images/ico_king_shakalaka.png"
    },
    {
        "name": "Vespoid",
        "type": "Neopteron",
        "description": "An enormous, wasp-like insectoid with a poisonous stinger that paralyzes prey. Easily damaged, there are rarely any usable materials left to harvest from them once killed.",
        "image": "/public/images/ico_vespoid.png"
    },
    {
        "name": "Vespoid Queen",
        "type": "Neopteron",
        "description": "A massive thorax and brilliant, gigantic wings mark the Vespoid Queen. It commands its subjects through unique flight patterns, and will stab any intruders with a poisonous stinger that also causes paralysis. It also spits acidic bodily fluid at its prey.",
        "image": "/public/images/ico_vespoid_queen.png"
    },
    {
        "name": "Hornetaur",
        "type": "Neopteron",
        "description": "A Vespoid-like monster with a thicker shell. Easily damaged there are rarely any usable materials left to harvest from them once killed. But if you could sap their Health gradually...",
        "image": "/public/images/ico_hornetaur.png"
    },
    {
        "name": "Great Thunderbug",
        "type": "Neopteron",
        "description": "An abnormally large Thunderbug taised inside the body of an elder dragon and known to inhabit the same areas as its former host, its electrical attack is deadly. This bug has varlous uses as material for crafting weapons and items.",
        "image": "/public/images/ico_great_thunderbug.png"
    },
    {
        "name": "Anteka",
        "type": "Herbivore",
        "description": "Herbivorous monster living in the snowy mountains. Normally docile, but when provoked it will attack with its giant antlers. Its high quality pelt has many uses and its antlers are highly valued by the Guild.",
        "image": "/public/images/ico_anteka.png"
    },
    {
        "name": "Popo",
        "type": "Herbivore",
        "description": "A herbivorous monster known for its giant, bent fangs. Living in herds, it is particularly bold when defending its offspring. Popo meat is quite nutritious, and its tongue is widely admired as a delicacy.",
        "image": "/public/images/ico_popo.png"
    },
    {
        "name": "Kelbi",
        "type": "Herbivore",
        "description": "Herbivorous, deer-like monsters, Valued for their horns, they tend to run away at the first hint of danger. They are also hunted for their meat, which is chewy but flavorful.",
        "image": "/public/images/ico_kelbi.png"
    },
    {
        "name": "Mosswine",
        "type": "Herbivore",
        "description": "Wild pigs covered in moss and fungus. Sometimes you will even find mushrooms growing on them. Their meat is known as a delicacy. Though normally docile, they will charge you if angered!",
        "image": "/public/images/ico_mosswine.png"
    },
    {
        "name": "Aptonoth",
        "type": "Herbivore",
        "description": "Hunted as a food source, these creatures are preyed upon by both hunter and monster alike. Usually timid, in packs they will defend themselves with surprising strength.",
        "image": "/public/images/ico_aptonoth.png"
    },
    {
        "name": "Apceros",
        "type": "Herbivore",
        "description": "Hunted for their meat, which is buried under a thick, armored hide. Aggressive compared to the Aptonoth, hunting them can be a challenge. Apceros eggs are a valuable Guild commodity.",
        "image": "/public/images/ico_apceros.png"
    },
    {
        "name": "Giaprey",
        "type": "Bird Wyvern",
        "description": "A species of small bird-like carnivores known to inhabit the snowy mountains. Their white skin is beautiful, but their temperament is not. They are known to spit ice at hunters, and attack in deadly packs.",
        "image": "/public/images/ico_giaprey.png"
    },
    {
        "name": "Giadrome",
        "type": "Bird Wyvern",
        "description": "The alpha leader of a pack of Glaprey, the Giadrome sports a beautiful crest. Larger than a Giaprey, any hunter silly enough to encroach on its turf will be frozen in a hail of ice.",
        "image": "/public/images/ico_giadrome.png"
    },
    {
        "name": "Velociprey",
        "type": "Bird Wyvern",
        "description": "Aggressive, carnivorous monsters that often travel in packs. Even a master hunter should take care not to become surrounded! Wide ranging, they are found in many different areas, such as the jungle or forest and hills.",
        "image": "/public/images/ico_velociprey.png"
    },
    {
        "name": "Velocidrome",
        "type": "Bird Wyvern",
        "description": "The alpha monster that leads a Velociprey pack. They are larger and have a more prominent crest. Highly territorial, but will retreat to a safe place when injured to recover.",
        "image": "/public/images/ico_velocidrome.png"
    },
    {
        "name": "Genprey",
        "type": "Bird Wyvern",
        "description": "An orange and green-striped species of small carnivores found mainly in desert zones Traveling in packs, their large fangs and claws contain a neurotoxin that is used to paralyze prey.",
        "image": "/public/images/ico_genprey.png"
    },
    {
        "name": "Gendrome",
        "type": "Bird Wyvern",
        "description": "The alpha monster that leads a Genprey pack. They are larger and have a more prominent crest. Found in the desert, they can paralyze prey using thelr toxic fangs and claws.",
        "image": "/public/images/ico_gendrome.png"
    },
    {
        "name": "Ioprey",
        "type": "Bird Wyvern",
        "description": "A vivid red species of small carnivores often found in subtropical zones. Sacs in their throat contain a powerful poison that slowly drains the Health of their prey.",
        "image": "/public/images/ico_ioprey.png"
    },
    {
        "name": "Iodrome",
        "type": "Bird Wyvern",
        "description": "The alpha monster that leads an loprey pack. They are larger and have a more prominent crest. Found in subtropical zones, they spit a polson that can sap the life force of prey.",
        "image": "/public/images/ico_iodrome.png"
    },
    {
        "name": "Yian Kut-Ku",
        "type": "Bird Wyvern",
        "description": "A bird wyvern with a huge beak and large ears that splay open when it is angered. With Its sensitive hearing it dislikes loud noises. It is smaller but faster than other wyverns.",
        "image": "/public/images/ico_yian_kut_ku.png"
    },
    {
        "name": "Blue Yian Kut-Ku",
        "type": "Bird Wyvern",
        "description": "A bird wyvern with a huge beak and large ears that splay open when it is angered. With Its sensitive hearing it dislikes loud noises. It is smaller but faster than other wyverns.",
        "image": "/public/images/ico_blue_yian_kut_ku.png"
    },
    {
        "name": "Yian Garuga",
        "type": "Bird Wyvern",
        "description": "A breed of Yian Kut-Ku with a hard black shell and a long mane. Known for its trap avolding slyness and poison loaded tail, it is a particularly evil wyvern, so beware!",
        "image": "/public/images/ico_yian_garuga.png"
    },
    {
        "name": "Scarred Yian Garuga",
        "type": "Bird Wyvern",
        "description": "A breed of Yian Kut-Ku with a hard black shell and a long mane. Known for its trap avolding slyness and poison loaded tail, it is a particularly evil wyvern, so beware!",
        "image": "/public/images/ico_scarred_yian_garuga.png"
    },
    {
        "name": "Gypceros",
        "type": "Bird Wyvern",
        "description": "A wyvern that can generate disorienting flashes of light when its prominent head crest is struck. Its rubbery hide resists damage and can ward off Shock Traps, while its spit carries a deadly venom. However. they are quite timid.",
        "image": "/public/images/ico_gypceros.png"
    },
    {
        "name": "Purple Gypceros",
        "type": "Bird Wyvern",
        "description": "A wyvern that can generate disorienting flashes of light when its prominent head crest is struck. Its rubbery hide resists damage and can ward off Shock Traps, while its spit carries a deadly venom. However. they are quite timid.",
        "image": "/public/images/ico_purple_gypceros.png"
    },
    {
        "name": "Hypnocatrice",
        "type": "Bird Wyvern",
        "description": "A rust-colored bird wyvern with beautiful tail feathers found mainly in forests. A highly pacifistic wyvern by nature, it breathes sleeping gas on its enemies and prey alike. Its strong, developed legs pack a serious punch. so be careful!",
        "image": "/public/images/ico_hypnocatrice.png"
    },
    {
        "name": "Remobra",
        "type": "Flying Wyvern",
        "description": "Small wyverns with outstanding flying abilities, they loiter in the skies waiting to prey upon weakened animals. Known to attack alongside Elder Dragons, they are known as an omen to disaster.",
        "image": "/public/images/ico_remobra.png"
    },
    {
        "name": "Rathian",
        "type": "Flying Wyvern",
        "description": "Female version of the Rathalos wyvern. Unlike its male counterpart, it usually patrols its territory from the ground. Its tail spikes are filled with poison.",
        "image": "/public/images/ico_rathian.png"
    },
    {
        "name": "Pink Rathian",
        "type": "Flying Wyvern",
        "description": "Female version of the Rathalos wyvern. Unlike its male counterpart, it usually patrols its territory from the ground. Its tail spikes are filled with poison.",
        "image": "/public/images/ico_pink_rathian.png"
    },
    {
        "name": "Gold Rathian",
        "type": "Flying Wyvern",
        "description": "Female version of the Rathalos wyvern. Unlike its male counterpart, it usually patrols its territory from the ground. Its tail spikes are filled with poison.",
        "image": "/public/images/ico_gold_rathian.png"
    },
    {
        "name": "Rathalos",
        "type": "Flying Wyvern",
        "description": "Male wyvern that keeps a nest and patrols its patch of territory from the air in search of prey. Its claws are filled with a poison that weakens its quarry.",
        "image": "/public/images/ico_rathalos.png"
    },
    {
        "name": "Azure Rathalos",
        "type": "Flying Wyvern",
        "description": "Male wyvern that keeps a nest and patrols its patch of territory from the air in search of prey. Its claws are filled with a poison that weakens its quarry.",
        "image": "/public/images/ico_azure_rathalos.png"
    },
    {
        "name": "Silver Rathalos",
        "type": "Flying Wyvern",
        "description": "Male wyvern that keeps a nest and patrols its patch of territory from the air in search of prey. Its claws are filled with a poison that weakens its quarry.",
        "image": "/public/images/ico_silver_rathalos.png"
    },
    {
        "name": "Khezu",
        "type": "Flying Wyvern",
        "description": "Loathsome wyverns that live inside caves. Near blind, they detect their prey by smell. They are capable of generating electric shocks, which they use to paralyze their prey.",
        "image": "/public/images/ico_khezu.png"
    },
    {
        "name": "Red Khezu",
        "type": "Flying Wyvern",
        "description": "Loathsome wyverns that live inside caves. Near blind, they detect their prey by smell. They are capable of generating electric shocks, which they use to paralyze their prey.",
        "image": "/public/images/ico_red_khezu.png"
    },
    {
        "name": "Basarios",
        "type": "Flying Wyvern",
        "description": "A large wyvern found in volcanic zones. They are the juvenile form of the Gravios. They have a steel-like carapace that requires powerful items to crack. Emits poison gas.",
        "image": "/public/images/ico_basarios.png"
    },
    {
        "name": "Gravios",
        "type": "Flying Wyvern",
        "description": "A large wyvern found in volcanic zones. They possess a flery breath attack and the ability to emit a sleeping gas, They also have extremely hard scales that deflect most weapon attacks.",
        "image": "/public/images/ico_gravios.png"
    },
    {
        "name": "Black Gravios",
        "type": "Flying Wyvern",
        "description": "A large wyvern found in volcanic zones. They possess a flery breath attack and the ability to emit a sleeping gas, They also have extremely hard scales that deflect most weapon attacks.",
        "image": "/public/images/ico_black_gravios.png"
    },
    {
        "name": "Monoblos",
        "type": "Flying Wyvern",
        "description": "A large-horned wyvern found in desert zones. Their giant horn makes their attacks very dangerous. While they have no breath attack, their ear-splitting roar is the bane of hunters.",
        "image": "/public/images/ico_monoblos.png"
    },
    {
        "name": "White Monoblos",
        "type": "Flying Wyvern",
        "description": "A large-horned wyvern found in desert zones. Their giant horn makes their attacks very dangerous. While they have no breath attack, their ear-splitting roar is the bane of hunters.",
        "image": "/public/images/ico_white_monoblos.png"
    },
    {
        "name": "Diablos",
        "type": "Flying Wyvern",
        "description": "Two-horned wyverns found in desert zones. They are capable of burrowing into sand to attack prey from below. Incredibly violent and proud, they are known to unleash terrible wrath when accosted.",
        "image": "/public/images/ico_diablos.png"
    },
    {
        "name": "Black Diablos",
        "type": "Flying Wyvern",
        "description": "Two-horned wyverns found in desert zones. They are capable of burrowing into sand to attack prey from below. Incredibly violent and proud, they are known to unleash terrible wrath when accosted.",
        "image": "/public/images/ico_black_diablos.png"
    },
    {
        "name": "Tigrex",
        "type": "Flying Wyvern",
        "description": "A flying wyvern that maintains its primitive origins. Prone to violence, it possesses incredible ferocity thanks to its four limbs, claws, and jaw. Inhabits a wide area, it has even been spotted hunting Popo in the mountains.",
        "image": "/public/images/ico_tigrex.png"
    },
    {
        "name": "Nargacuga",
        "type": "Flying Wyvern",
        "description": "A uniquely-evolved wyvern that calls the forest its home. It hides itself in the shadows and slyly stalks its prey with terrifying speed and tenacity. Its unique tail can take down a medium-sized monster in a sinale swish.",
        "image": "/public/images/ico_nargacuga.png"
    },
    {
        "name": "Akantor",
        "type": "Flying Wyvern",
        "description": "A wyvern truly wrapped in mystery. Known to some as the black god and to others as the tyrant of fire, this large and brutal creature is known to the Guild simply as Akantor...",
        "image": "/public/images/ico_akantor.png"
    },
    {
        "name": "Ukanlos",
        "type": "Flying Wyvern",
        "description": "A mysterious wyvern said to only appear after large avalanches deep in the snowy mountains. Often seen crushing ice balls and rock into powder in its stride, it's known to the Guild as Ukanlos, although there are whisperings that it may be the white god...",
        "image": "/public/images/ico_ukanlos.png"
    },
    {
        "name": "Cephalos",
        "type": "Piscine Wyvern",
        "description": "Wyverns found only in the desert. They resemble a Plesioth, but tive and \"swim\" in sand rather than water. They seldom appear above land, but when their hearing is disturbed...",
        "image": "/public/images/ico_cephalos.png"
    },
    {
        "name": "Cephadrome",
        "type": "Piscine Wyvern",
        "description": "The alpha monster form of the Cephalos, Larger and armored with black scales, they fit the appearance of a leader perfectly. Their fins hold a paralyzing toxin.",
        "image": "/public/images/ico_cephadrome.png"
    },
    {
        "name": "Plesioth",
        "type": "Piscine Wyvern",
        "description": "An enormous, flightless, aquatic wyvern with wings that have evolved into fins for swimming. Although superficially fish-like, they can move on land as well. They love frogs.",
        "image": "/public/images/ico_plesioth.png"
    },
    {
        "name": "Green Plesioth",
        "type": "Piscine Wyvern",
        "description": "An enormous, flightless, aquatic wyvern with wings that have evolved into fins for swimming. Although superficially fish-like, they can move on land as well. They love frogs.",
        "image": "/public/images/ico_green_plesioth.png"
    },
    {
        "name": "Lavasioth",
        "type": "Piscine Wyvern",
        "description": "A piscine wyvern that resides in magma. Its scales are covered by layers of cooled magma, which makes it one hard nut to crack. Its swims around in lava, spewing the molten rock it takes in at its prey... Researchers love to study its peculiar way of life.",
        "image": "/public/images/ico_lavasioth.png"
    },
    {
        "name": "Hermitaur",
        "type": "Carapaceon",
        "description": "A small Carapaceon with an incredibly hard shell. Known to live in great numbers in the desert, or lurking underground, one must be careful when treading in its domain. Its brains are said to be a true delicacy.",
        "image": "/public/images/ico_hermitaur.png"
    },
    {
        "name": "Daimyo Hermitaur",
        "type": "Carapaceon",
        "description": "A large Carapaceon with a giant monster's skull on its back. Fond of the sand, it is malnly seen in the desert or jungle zones. Living underground, it surfaces when hungering for a snack.",
        "image": "/public/images/ico_daimyo_hermitaur.png"
    },
    {
        "name": "Plum D.Hermitaur",
        "type": "Carapaceon",
        "description": "A large Carapaceon with a giant monster's skull on its back. Fond of the sand, it is malnly seen in the desert or jungle zones. Living underground, it surfaces when hungering for a snack.",
        "image": "/public/images/ico_plum_d_hermitaur.png"
    },
    {
        "name": "Ceanataur",
        "type": "Carapaceon",
        "description": "An adolescent Carapaceon with an organic shell firmly placed on its back. Once grown, this shell will be replaced by a glant monster's skull. Mainly living in volcanic zones, it is very aggressive, and not to be underestimated.",
        "image": "/public/images/ico_ceanataur.png"
    },
    {
        "name": "Shogun Ceanataur",
        "type": "Carapaceon",
        "description": "A large Carapaceon with a giant monster's skul on its back. Its long, sharp pincers allow it to pierce volcanic beadrock and travel along ceilings. Sometimes, a precious and valuable pearl can be found inside its shell.",
        "image": "/public/images/ico_shogun_ceanataur.png"
    },
    {
        "name": "Terra S.Ceanataur",
        "type": "Carapaceon",
        "description": "A large Carapaceon with a giant monster's skul on its back. Its long, sharp pincers allow it to pierce volcanic beadrock and travel along ceilings. Sometimes, a precious and valuable pearl can be found inside its shell.",
        "image": "/public/images/ico_terra_s_ceanataur.png"
    },
    {
        "name": "Shen Gaoren",
        "type": "Carapaceon",
        "description": "A giant Carapaceon with an equally giant monster's skull on its back. Prone to roaming and fiercely territorial, any intruders will be met with opposition, so nearby forts or towns must be warned of its presence.",
        "image": "/public/images/ico_shen_gaoren.png"
    },
    {
        "name": "Bullfango",
        "type": "Pelagus",
        "description": "A large wild boar. Foul tempered, they will charge hunters on sight. They are aggressive and powerful, so beware! They are often hunted for their meat, which many hunters find delicious.",
        "image": "/public/images/ico_bullfango.png"
    },
    {
        "name": "Bulldrome",
        "type": "Pelagus",
        "description": "The powerful leader of the wild boars known for its enormous tusks. More aggressive than a Bullfango, it Is known to rush into a fight, and is extremely proficient at locating a foe.",
        "image": "/public/images/ico_bulldrome.png"
    },
    {
        "name": "Conga",
        "type": "Pelagus",
        "description": "Fanged, ape-like Pelagus with pink fur. Prefers to live in small groups as opposed to large packs, and particularly enjoys mushroom snacks. If stumbled upon, it will be hostile, so beware of areas like the swamp or jungle.",
        "image": "/public/images/ico_conga.png"
    },
    {
        "name": "Congalala",
        "type": "Pelagus",
        "description": "A large Pelagus sporting pink fur often spotted in the jungle and swamp zones Fond of mushrooms, its diet affects its breath, which may be poisonous or flaming. One can predict these traits via the food in its local habitat.",
        "image": "/public/images/ico_congalala.png"
    },
    {
        "name": "Emerald Congalala",
        "type": "Pelagus",
        "description": "A large Pelagus sporting pink fur often spotted in the jungle and swamp zones Fond of mushrooms, its diet affects its breath, which may be poisonous or flaming. One can predict these traits via the food in its local habitat.",
        "image": "/public/images/ico_emerald_congalala.png"
    },
    {
        "name": "Blango",
        "type": "Pelagus",
        "description": "A Pelagus covered entirely in white fur. Known to move in packs and led by a Blangonga The Blangonga exerts tight control over the group, and any call to gather will be met immediately by the rank and file Blanaos.",
        "image": "/public/images/ico_blango.png"
    },
    {
        "name": "Blangonga",
        "type": "Pelagus",
        "description": "Leader of a Blango pack, it is twice as large and recognized by its glant fangs and whiskers. It sends its pack to attack any trespassers. Its jumping power allows it great mobility in its home ranae of the snowy mountains.",
        "image": "/public/images/ico_blangonga.png"
    },
    {
        "name": "Copper Blangonga",
        "type": "Pelagus",
        "description": "Leader of a Blango pack, it is twice as large and recognized by its glant fangs and whiskers. It sends its pack to attack any trespassers. Its jumping power allows it great mobility in its home ranae of the snowy mountains.",
        "image": "/public/images/ico_copper_blangonga.png"
    },
    {
        "name": "Rajang",
        "type": "Pelagus",
        "description": "Ultra-aggressive creature that is rarely sighted and seldom survived. Survivors report it exhibits a strange attack, The Rajang is said to be a loner, and this isolated life has made it difficult to pin down its territorial leaninas.",
        "image": "/public/images/ico_rajang.png"
    },
    {
        "name": "Furious Rajang",
        "type": "Pelagus",
        "description": "Ultra-aggressive creature that is rarely sighted and seldom survived. Survivors report it exhibits a strange attack, The Rajang is said to be a loner, and this isolated life has made it difficult to pin down its territorial leaninas.",
        "image": "/public/images/ico_furious_rajang.png"
    },
    {
        "name": "Kirin",
        "type": "Elder Dragon",
        "description": "The Kirin is said to glow a faint blue, but so few have seen it that details are scarce, It Is apparently capable of calling forth Lightning at will. Kirin material is very valuable.",
        "image": "/public/images/ico_kirin.png"
    },
    {
        "name": "Kushala Daora",
        "type": "Elder Dragon",
        "description": "A metal plated dragon known as the tempest of wind. It is said that if Kushala Daora is poisoned, its wind abilities decrease. Eyewitnesses report violent storms alongside the dragon, and its wide range means towns may be attacked.",
        "image": "/public/images/ico_kushala_daora.png"
    },
    {
        "name": "Rusted Kushala Daora",
        "type": "Elder Dragon",
        "description": "A metal plated dragon known as the tempest of wind. It is said that if Kushala Daora is poisoned, its wind abilities decrease. Eyewitnesses report violent storms alongside the dragon, and its wide range means towns may be attacked.",
        "image": "/public/images/ico_rusted_kushala_daora.png"
    },
    {
        "name": "Chameleos",
        "type": "Elder Dragon",
        "description": "Eyewitness sightings of this elder dragon are extremely rare due to its ability to literally vanish; however, details of this are unclear. It is thought that shocking it may make it reappear, but this ls unproven.",
        "image": "/public/images/ico_chameleos.png"
    },
    {
        "name": "Lunastra",
        "type": "Elder Dragon",
        "description": "A brutal female elder dragon with breath of flame and expert control over fire. It is said that this control comes from the crown-like horns on its head, but this has not been confirmed.",
        "image": "/public/images/ico_lunastra.png"
    },
    {
        "name": "Teostra",
        "type": "Elder Dragon",
        "description": "A brutal male elder dragon with breath of flame and expert control over fire. Its vile temperament means anyone who approaches is subject to fire and brimstone. Known to attack towns, the Guild keeps tabs on its movements.",
        "image": "/public/images/ico_teostra.png"
    },
    {
        "name": "Lao-Shan Lung",
        "type": "Elder Dragon",
        "description": "A giant dragon few have seen and lived to tell the tale about. When on the rampage it wreaks havoc on all in its path. The Guild has built a fortress to repel the beast, but will it hold?Felyne",
        "image": "/public/images/ico_lao_shan_lung.png"
    },
    {
        "name": "Ashen Lao-Shan Lung",
        "type": "Elder Dragon",
        "description": "A giant dragon few have seen and lived to tell the tale about. When on the rampage it wreaks havoc on all in its path. The Guild has built a fortress to repel the beast, but will it hold?Felyne",
        "image": "/public/images/ico_ashen_lao_shan_lung.png"
    },
    {
        "name": "Yama Tsukami",
        "type": "Elder Dragon",
        "description": "An elder dragon that floats throught the sky. A bite of earth, a drink of forest. It's a veritable god of the sky made of the richest soil. Ancient trees grow thick on its back like on a mountain. It's rumored to live near a forlorn, remote tower.",
        "image": "/public/images/ico_yama_tsukami.png"
    },
    {
        "name": "Fatalis",
        "type": "Elder Dragon",
        "description": "A legendary black dragon said to have prowled these lands from the days of old. Many skilled hunters have sought to challenge it, but none ever return. A monster shrouded in mystery...",
        "image": "/public/images/ico_fatalis.png"
    },
    {
        "name": "Crimson Fatalis",
        "type": "Elder Dragon",
        "description": "A legendary black dragon said to have prowled these lands from the days of old. Many skilled hunters have sought to challenge it, but none ever return. A monster shrouded in mystery...",
        "image": "/public/images/ico_crimson_fatalis.png"
    },
    {
        "name": "White Fatalis",
        "type": "Elder Dragon",
        "description": "A legendary black dragon said to have prowled these lands from the days of old. Many skilled hunters have sought to challenge it, but none ever return. A monster shrouded in mystery...",
        "image": "/public/images/ico_white_fatalis.png"
    }
];

module.exports = monsters;