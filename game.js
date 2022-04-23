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
		var same_site = "SameSite=None;";
		
		for (let i = 0; i < save_list.length; i += 1)
		{
			var new_cookie = save_list[i].key + "=" +  save_list[i].value + ";";
			new_cookie += path;
			new_cookie += expires;
			new_cookie += same_site;
			document.cookie = new_cookie;
		}
	},
	
	load: function()
	{
		var load_list = [];
		var split_cookies = document.cookie.split(';');
		for (let i = 0; i < split_cookies.length; i += 1)
		{
			var key_value_array = split_cookies[i].split('=');
			if (key_value_array.length > 1)
			{
				load_list.push(
					{ 
						key: key_value_array[0].slice().trim(),
						value: key_value_array[1].slice().trim()
					}
				);
			}
		}
		return load_list;
	}
};
