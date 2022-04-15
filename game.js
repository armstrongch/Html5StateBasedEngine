var game =
{
	title_state:
		['title'],
	test_state_1:
		['list_of_stuff', 'list_of_stuff_two_cols', 'test_row1', 'test_row3'],
	
	load_game: function()
	{
		this.load_state('title_state');
		
		list_item.AddListItemToRow(
			'list_of_stuff', 0,
			'placeholder.png',
			'Different Test Text.'
		);
		list_item.AddListItemToRow(
			'list_of_stuff', 0,
			'placeholder.png',
			'Text With Line Breaks<br/>More Stuff<br/>Additional Info'
		);
		
		list_item.AddListItemToRow(
			'list_of_stuff_two_cols', 0,
			'placeholder.png',
			'Test Text'
		);
		list_item.AddListItemToRow(
			'list_of_stuff_two_cols', 0,
			'placeholder.png',
			'Different Test Text.'
		);
		list_item.AddListItemToRow(
			'list_of_stuff_two_cols', 1,
			'placeholder.png',
			'Text With Line Breaks<br/>More Stuff<br/>Additional Info'
		);
		
		list_item.AddListItemToRow(
			'list_of_stuff_two_cols', 1,
			'placeholder.png',
			'Test Text'
		);
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