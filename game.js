var game =
{
	title_state:
		['title'],
	pet_selection_state:
		['instructional_text',
		'list_of_pets',
		'pet_picker'],
	
	load_game: function()
	{
		pet_picker_content.init_states();
		pet_picker_content.setup_page();	
	},
	
	load_state: function(state)
	{
		$('table').css('display', '');
		$('tr').css('visibility', 'hidden');
		$('tr').css('display', 'none');
		for (let i = 0; i < this[state].length; i += 1)
		{
			$(document.getElementById(this[state][i])).css('visibility', 'visible');
			$(document.getElementById(this[state][i])).css('display', '');
		}			
	}
};