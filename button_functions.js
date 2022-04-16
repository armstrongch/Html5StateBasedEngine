var button_functions = 
{
	increment_thing_count: function(select_id)
	{
		for (let i = 0; i < lists.list_of_things.length; i += 1)
		{
			var test_thing = lists.list_of_things[i];
			if (test_thing.item_name == $('#' + select_id)[0].value)
			{
				test_thing.item_count += 1;
				test_thing.item_text = test_thing.item_text_gen();
				i = lists.list_of_things.length;
			}
		}
		list_item.AddListItemsToRow('list_of_stuff_three_cols', lists.list_of_things);
	}
};