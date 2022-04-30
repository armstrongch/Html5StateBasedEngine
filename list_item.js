var list_item =
{
	GetListItemHTML: function(image_file_name, item_text, image_onclick)
	{
		var onclick_html = '';
		if (image_onclick)
		{
			onclick_html = 'onclick="' + image_onclick + '"';
		}
		
		return `<div style='clear:both'><p class='list_item_text'><img class='list_item_image' src='./Images/${image_file_name}' ${onclick_html}/>${item_text}</p></span></div>`;
	},
	
	AppendHTMLItemToRow: function(row_name, column, html_to_add)
	{
		$(document.getElementById(row_name)).children().eq(column).append("<p>" + html_to_add + "</p>");
	},
	
	//for itch compatibility, file names are CASE SENSITIVE!
	AddListItemToRow: function(row_name, column, image_file_name, item_text)
	{
		$(document.getElementById(row_name)).children().eq(column).append(
			this.GetListItemHTML(image_file_name, item_text, ""));
	},
	
	AddListItemsToRow: function(row_name, list_item_array)
	{
		var column_count = this.GetColumnCount(row_name);
		for (let i = 0; i < column_count; i += 1)
		{
			$(document.getElementById(row_name)).children().eq(i).html('');
		}
		for (let i = 0; i < list_item_array.length; i += 1)
		{
			this.AddListItemToRow(
				row_name, i % column_count,
				list_item_array[i].image_file_name,
				list_item_array[i].item_text
			);
		}
	},
	
	GetColumnCount: function(row_name)
	{
		return $(document.getElementById(row_name)).children('td').length;
	}
};