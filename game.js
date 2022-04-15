var game =
{
	title_state:
		['title'],
	test_state_1:
		['test_row1', 'test_row3'],
	test_state_2:
		['test_row1', 'test_row2', 'test_row4'],
	test_state_3:
		['test_row1', 'test_row5'],
	
	load_state: function(state)
	{
		
		$('tr').css('visibility', 'hidden');
		$('tr').css('display', 'none');
		for (let i = 0; i < this[state].length; i += 1)
		{
			$(document.getElementById(this[state][i])).css('visibility', 'visible');
			$(document.getElementById(this[state][i])).css('display', '');
		}			
	}
};