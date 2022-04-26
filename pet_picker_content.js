var pet_picker_content =
{

	setup_game: function()
	{
		this.init_states();
		this.setup_page();
	},
	
	init_states: function()
	{
		game.loading_state = ['loading'];
		game.title_state = ['title', 'settings'];
		game.pet_selection_state = ['instructional_text', 'list_of_pets', 'pet_picker', 'settings'];
		game.post_pick_state = ['post_pick', 'settings'];
	},
	
	setup_page: function()
	{
		game.load_state('loading_state');
		save.initialize_save('pet_picker');
		this.setup_pet_list();
		this.load_pet_picks();
		
		list_item.AddListItemsToRow('list_of_pets', this.list_of_pets);
		list_item.AppendHTMLItemToRow(
			'pet_picker', 0, lists.generate_dropdown_from_list(this.list_of_pets,'pet_picker_select'));
		list_item.AppendHTMLItemToRow(
			'pet_picker', 0, lists.generate_dropdown_submission_button('pet_picker_select', 'Pick', 'pet_picker_content.pick_pet'));
			
		this.load_audio(this.complete_setup);
	},
	
	load_audio: function(complete_setup_function)
	{
		var audio_list = [];
		audio_list.push({
			name: 'music_track_1', file_name: 'placeholder_song.mp3', is_music: true
		});
		audio_list.push({
			name: 'music_track_2', file_name: 'placeholder_song2.mp3', is_music: true
		});
		audio_list.push({
			name: 'click', file_name: 'placeholder_sound.wav', is_music: false
		});
		
		sound_manager.load_audio(audio_list, complete_setup_function);
		//sound_manager.music_toggle_change();
	},
	
		
	complete_setup: function()
	{
		clearInterval(sound_manager.load_fail_interval);
		sound_manager.load_fail_interval = null;
		game.load_state('title_state');
	},
	
	setup_pet_list: function()
	{
		var pet_names = [
			'Frank', 'Suzy', 'Sally', 'Boopsie', 'Dolly', 'Truck', 'Kevin'];
		var pet_types = [
			'Dog', 'Cat', 'Fish', 'Horse', 'Lizard', 'Ferret', 'Frog'];
			
		for (let i = 0; i < pet_names.length; i += 1)
		{
			var pet = {
				item_name: pet_names[i],
				pet_type: pet_types[i],
				pet_picks: 0,
				image_file_name: 'placeholder.png',
				item_text: "",
				text_gen: function()
				{
					this.item_text = this.item_name + " the " + this.pet_type + '<br/>"I hope you pick me!"<br/>Total picks: ' + this.pet_picks;
				},
			};
			pet.text_gen();
			this.list_of_pets.push(pet);
		}
	},
	
	load_pet_picks: function()
	{
		var load_list = save.load();
		for (let i = 0; i < load_list.length; i += 1)
		{
			var pet_name = load_list[i].key;
			var pet_picks = load_list[i].value;
			
			for (let j = 0; j < this.list_of_pets.length; j += 1)
			{
				if (this.list_of_pets[j].item_name == pet_name)
				{
					this.list_of_pets[j].pet_picks = parseInt(pet_picks);
					this.list_of_pets[j].text_gen();
					j = load_list.length;
				}
			}
		}
	},
	
	save_pet_picks: function()
	{
		var save_list = [];
		for (let i = 0; i < this.list_of_pets.length; i += 1)
		{
			save_list.push({ key: this.list_of_pets[i].item_name, value: this.list_of_pets[i].pet_picks });
		}
		save.save(save_list);
	},
	
	list_of_pets: [],
	
	pick_pet: function(select_id)
	{
		for (let i = 0; i < this.list_of_pets.length; i += 1)
		{
			var test_pet = this.list_of_pets[i];
			if (test_pet.item_name == $('#' + select_id)[0].value)
			{
				test_pet.pet_picks += 1;
				test_pet.text_gen();
				$('#picked_pet_name').text(test_pet.item_name);
				i = this.list_of_pets.length;
			}
		}
		list_item.AddListItemsToRow('list_of_pets', this.list_of_pets);
		sound_manager.play_sound_by_name('click');
		this.save_pet_picks();
		
		game.load_state('post_pick_state');
	},
	
	begin_game_button: function()
	{
		this.load_pet_picks();
		list_item.AddListItemsToRow('list_of_pets', this.list_of_pets);
		game.load_state('pet_selection_state');
	},
};