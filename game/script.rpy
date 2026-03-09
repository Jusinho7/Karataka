# game/script.rpy

# --- PERSONNAGES ---
define r = Character("Rakoto", color="#c8ffc8", what_slow_cps=30)
define n = Character(None, color="#ffffff", what_slow_cps=40)

# --- TRANSFORM SIMPLE ET EFFICACE ---
transform fill_screen:
    xysize (1920, 1080)
    align (0.5, 0.5)

# --- IMAGE (chemin exact requis) ---
image bg hills = "images/bg/bg_welcome.png"

# --- JEU ---
label start:
    scene bg hills at fill_screen
    with fade
    
    n "KARATAKA"
    n "L'Héritage de la Terre Rouge"
    
    r "Grand-père… tu me laisses ce terrain…"
    r "… et une responsabilité immense."
    
    menu:
        "Appuie pour continuer":
            pass
    
    r "Je vais transformer ce peu en abondance."
    
    return
