# Déclaration des personnages
define r = Character("Rakoto", color="#1d0bb9")
define s = Character("Rasoa", color="#d60879")
define a = Character("Agent", color="#0fc408")
define n      = Character(None, color="#dddddd", what_slow_cps=40, what_italic=True)
define g = Character("Grand-père", color="#c8ffc8", what_slow_cps=30)

# Images
image bg village_day = "images/bg/village_day.png"
image rakoto_1 = "images/characters/rakoto.png"
image rakoto_2 = "images/characters/rakoto_triste.png"
image rakoto_3 = "images/characters/body_rakoto_triste.png"
image rasoa = "images/characters/rasoa.png"
image bg ferme_vide = "images/bg/ferme_vide.png"
image bg banque = "images/bg/banque.png"
image agent = "images/characters/agent.png"
# =============================================
# IMAGES @Kevin
# =============================================

image bg village   = "images/prologue/intro1.png"
image bg maison    = "images/prologue/intro2.png"
image bg cimetiere = "images/prologue/intro3.png"
image bg testament = "images/prologue/intro4.png"
image bg ferme     = "images/prologue/intro5.png"
image bg route     = "images/prologue/intro6.png"
# =============================================
# TRANSFORMS @Kevin
# =============================================



transform fill_screen:
    xysize (1920, 1080)
    align (0.5, 0.5)

transform a_gauche:
    xalign 0.2 yalign 1.0

transform a_droite:
    xalign 0.8 yalign 1.0

transform au_centre:
    xalign 0.5 yalign 1.0
#################################################
################################################
#Transform Agent à gauche
transform left:
    xalign 0.2
    yalign 1.0
# Transform Rakoto (plus grand)
transform right_rakoto:
    xalign 0.8
    yalign 1.0
    zoom 1.1   # 👈 plus grand

# Transform Rasoa (plus petite)
transform right_rasoa:
    xalign 0.8
    yalign 1.0
    zoom 0.9   # 👈 plus petite
#Transform place au centre
transform center:
    xalign 0.5
    yalign 0.5

# =========================
# VARIABLES JEU
# =========================
default argent = 10000
default a_regarde_poches = False
default a_regarde_poulailler = False

# =========================
# POCHES
# =========================
label check_poches:

    if not a_regarde_poches:
        $ a_regarde_poches = True
        r "Presque vide…"
    else:
        r "Toujours rien…"

    call screen scene1_interactions
    return
# =========================
# SCENE BANQUE
# =========================
label scene_banque:

    scene bg banque   # 👈 à créer (image)
    show rakoto_2 at right_rakoto
    r "Je dois trouver une solution…"
    hide rakoto_2
    show agent at center  # 👈 optionnel si tu as une image
    a "Un prêt peut être une opportunité… ou un piège."
    hide agent
    show rakoto_2 at right_rakoto
    r "Je dois avancer, même avec le risque."
    

    return

# =========================
# POULAILLER
# =========================
label check_poulailler:

    if not a_regarde_poulailler:
        $ a_regarde_poulailler = True
        r "Peut-être que l’élevage est le début."
    else:
        r "Je devrais vraiment commencer ici…"

    call screen scene1_interactions
    return
# =============================================
# PROLOGUE
# =============================================

label prologue:

    # --- IMAGE 1 : Le bonheur ---
    scene bg village with fade

    n "Il était une fois un vieux grand-père..."
    n "Pas riche. Pas puissant."
    n "Mais il avait deux petits-enfants qui l'aimaient."

    pause 0.5

    # --- IMAGE 2 : La maladie ---
    scene bg maison with fade

    n "Mais un matin, le grand-père ne se leva pas."

    g"Ne vous inquiétez pas... je suis juste fatigué."
    r "Grand-père..."
    s "S'il te plaît, repose-toi."

    n "Les jours passèrent. Sa voix se fit de plus en plus faible."
    n "Puis un soir, il ferma les yeux pour la dernière fois."

    pause 1.5

    # --- IMAGE 3 : L'enterrement ---
    scene bg cimetiere with fade

    n "Il pleuvait ce jour-là."
    n "Comme si le ciel lui aussi voulait pleurer."

    pause 2.0

    n "Ils restèrent longtemps devant la tombe."
    n "Sans rien dire."

    pause 1.0

    # --- IMAGE 4 : Le testament ---
    scene bg testament with fade

    n "Une semaine plus tard..."
    n "Un vieil homme se présenta avec une enveloppe jaunie."

    r "C'est quoi ça ?"
    n "Rakoto ouvrit l'enveloppe lentement."
    n "À l'intérieur — un testament écrit de la main du grand-père."
    n "« Je lègue la totalité de mes biens à mes deux petits-enfants ici présents. »"

    s"Ses biens... c'est quoi exactement ?"

    # --- IMAGE 5 : L'héritage ---
    scene bg ferme with fade

    n "Ils découvrirent leur héritage le lendemain matin."
    n "Une terre sèche, craquelée sous le soleil."
    n "Une ferme vide, dont le toit s'effondrait."
    n "Aucune source d'eau. Aucune énergie."
    n "Et 20 000 ariary en poche."

    r "C'est... tout ?"
    s "On fait quoi avec ça ?"

    pause 1.0

    r "On se bat. C'est ce qu'on fait."

    # --- IMAGE 6 : La séparation ---
    scene bg route with fade

    n "Ils décidèrent de se séparer."
    n "Chacun partirait de son côté avec ses 10 000 ariary."
    n "Et prouverait qu'il était le meilleur entrepreneur."

    r "Je reviendrai avec bien plus que ça."
    s "On verra bien qui réussit le mieux."

    pause 1.0
    n "Le challenge commence."
    n "Qui de Rakoto ou Rasoa transformera rien en tout ?"

    pause 2.0
    return


# Script
label start:
    scene bg village at fill_screen
    with fade

    n "KARATAKA"
    n "L'Héritage de la Terre Rouge"

    pause 2.0

    call prologue
    play music "karataka_song.mp3"
    scene bg ferme_vide
    show rakoto_2 at right_rakoto
    r "Je ne peux rien construire sans argent…"
    call screen scene1_interactions
    return
