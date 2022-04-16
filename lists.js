var lists =
{
	initialize: function()
	{
		this.init_list_of_things();
	},
	
	list_of_people: [
		{image_file_name: 'placeholder.png', item_text: 'Bobby'},
		{image_file_name: 'placeholder.png', item_text: 'Jimmy'},
		{image_file_name: 'placeholder.png', item_text: 'Suzy'},
		{image_file_name: 'placeholder.png', item_text: 'Sally'},
	],
	
	list_of_places: [
		{image_file_name: 'placeholder.png', item_text: 'home'},
		{image_file_name: 'placeholder.png', item_text: 'school'},
		{image_file_name: 'placeholder.png', item_text: 'supermarket'},
		{image_file_name: 'placeholder.png', item_text: 'gazebo'},
		{image_file_name: 'placeholder.png', item_text: 'park'},
		{image_file_name: 'placeholder.png', item_text: 'factory'},
		{image_file_name: 'placeholder.png', item_text: 'zoo'},
	],
	
	list_of_things: [],
	
	init_list_of_things: function()
	{
		var thing_names = [
			'duck', 'book', 'suit', 'rock', 'bucket', 'shirt',
			'sandwich', 'magnet', 'goose', 'fire extinguisher', 'dog',
			'mailbox', 'elephant', 'applsauce', 'bowling ball'];
		for (let i = 0; i < thing_names.length; i += 1)
		{
			var item = {
				item_name: thing_names[i],
				item_count: 0,
				image_file_name: 'placeholder.png',
				item_text_gen: function()
				{
					return this.item_name + ': ' + this.item_count;
				}
			};
			item.item_text = item.item_text_gen();
			this.list_of_things.push(item);
		}
	},
	
	generate_dropdown_from_list: function(array_list, select_id)
	{
		var return_html = "<select id='" + select_id + "'>";
		for (let i = 0; i < array_list.length; i += 1)
		{
			var temp_item = array_list[i];
			return_html += "<option value='" + temp_item.item_name + "'>";
			return_html += temp_item.item_name;
			return_html += "</option>";
		}
		return_html += "</select";
		
		return return_html;
	}
};