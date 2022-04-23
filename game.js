var game =
{
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
	},
	
	//saves a list of key-value pairs
	save: function(save_list)
	{
		var path = "path=\;";
		const d = new Date();
		d.setTime(d.getTime() + (365*24*60*1000));
		var expires = "expires=" + d.toUTCString() + ";";
		
		for (let i = 0; i < save_list.length; i += 1)
		{
			var new_cookie += save_list[i].key + "=" +  save_list[i].value + "; ";
			new_cookie += path;
			new_cookie ++ expires;
			document.cookie = new_cookie;
		}
	}
};