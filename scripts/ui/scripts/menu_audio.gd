extends Control

func _ready() -> void:
	var current_scene = get_tree().current_scene.scene_file_path if get_tree().current_scene else ""
	
	# Lance la musique du menu si on n'est pas dans la banque
	if not "main_scene_bank.tscn" in current_scene:
		AudioManager.play_music(AudioManager.MENU_MUSIC_BASENAME)
