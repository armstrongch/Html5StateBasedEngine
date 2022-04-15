var game =
{
	title_state:
		['title'],
	test_state_1:
		['list_of_stuff','test_row1', 'test_row3'],
	
	load_game: function()
	{
		this.load_state('title_state');
		list_item.AddListItemToRow(
			'list_of_stuff', 0,
			'Placeholder.png',
			'Test Text'
		);
		list_item.AddListItemToRow(
			'list_of_stuff', 0,
			'Placeholder.png',
			'Different Test Text.'
		);
		list_item.AddListItemToRow(
			'list_of_stuff', 0,
			'Placeholder.png',
			'Text With Line Breaks<br/>More Stuff<br/>Additional Info'
		);
		
		list_item.AddListItemToRow(
			'list_of_stuff', 1,
			'Placeholder.png',
			'Test Text'
		);
		list_item.AddListItemToRow(
			'list_of_stuff', 1,
			'Placeholder.png',
			'Different Test Text.'
		);
		list_item.AddListItemToRow(
			'list_of_stuff', 1,
			'Placeholder.png',
			'Text With Line Breaks<br/>More Stuff<br/>Additional Info'
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