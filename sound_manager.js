var sound_manager =
{
	music_tracks: [],
	sounds: [],
	current_music_index: 0,
	
	//note - although the itch web player supports mp3, the itch desktop app only supports wav, as far as I know.
	load_audio: function(name, file_name, is_music)
	{
		var audio_element = document.createElement('audio');
		audio_element.src = './Sounds/' + file_name;
		var sound = {
			name: name,
			audio_element: audio_element
		};
		if (is_music)
		{
			sound.audio_element.addEventListener('ended', sound_manager.cycle_music);
			this.music_tracks.push(sound);
		}
		else
		{
			this.sounds.push(sound);
		}
	},
	
	play_sound_by_name: function(name)
	{
		if ($('#sound_checkbox').is(':checked'))
		{
			for (let i = 0; i < this.sounds.length; i += 1)
			{
				if (this.sounds[i].name == name)
				{
					if (this.sounds[i].audio_element.paused)
					{
						this.sounds[i].audio_element.play();
					}
				}
			}
		}
	},
	
	play_cycling_music: function()
	{
		if ($('#music_checkbox').is(':checked'))
		{
			for (let i = 0; i < this.music_tracks.length; i += 1)
			{
				if (i == this.current_music_index)
				{
					this.music_tracks[i].audio_element.play();
				}
				else
				{
					this.music_tracks[i].audio_element.pause();
				}
			}
		}
	},
	
	//this function uses "sound_manager" insead of "this" so it can be used in an event listener for audio elements
	cycle_music: function()
	{
		sound_manager.current_music_index += 1;
		if (sound_manager.current_music_index >= sound_manager.music_tracks.length)
		{
			sound_manager.current_music_index = 0;
		}
		sound_manager.play_cycling_music();
	},
	
	music_toggle_change: function()
	{
		if ($('#music_checkbox').is(':checked'))
		{
			this.play_cycling_music();
		}
		else
		{
			for (let i = 0; i < this.music_tracks.length; i += 1)
			{
				this.music_tracks[i].audio_element.pause();
			}
		}
	}
};