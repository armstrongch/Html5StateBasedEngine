var game =
{
	title_state:
		['title'],
	test_state_1:
		['list_of_stuff',
		'list_of_stuff_three_cols',
		'test_row1',
		'test_row3',
		'test_row4',
		'update_list'],
	
	load_game: function()
	{
		this.LoadState('title_state');
		lists.initialize();
		list_item.AddListItemsToRow('list_of_stuff', lists.list_of_people);
		list_item.AddListItemsToRow('list_of_stuff_two_cols', lists.list_of_places);
		list_item.AddListItemsToRow('list_of_stuff_three_cols', lists.list_of_things);
		
		list_item.AppendHTMLItemToRow(
			'update_list', 0, lists.generate_dropdown_from_list(lists.list_of_things,'things_value_increment_selector'));
		list_item.AppendHTMLItemToRow(
			'update_list', 0, lists.generate_dropdown_submission_button('things_value_increment_selector', 'Submit', 'button_functions.increment_thing_count'));
				
	},
	
	LoadState: function(state)
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