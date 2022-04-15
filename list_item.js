var list_item =
{
	GetListItemHTML: function(image_file_name, item_text)
	{
		return `<div style='clear:both'><p class='list_item_text'><img class='list_item_image' src='Images/${image_file_name}'/>${item_text}</p></span></div>`;
	},
	
	AddListItemToRow: function(row_name, column, image_file_name, item_text)
	{
		$(document.getElementById(row_name)).children().eq(column).append(
			this.GetListItemHTML(image_file_name, item_text));
	}
};