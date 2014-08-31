# sizeof

Calculates the approximate size of Javascript object.

# Example

	var sizeof = require('sizeof'); 
	var anyObject = {
		'key': {
			name: 'abc', 
			age: 123, 
			active: true
		}
	}
	console.log(sizeof.sizeof(anyObject));	// 50
	console.log(sizeof.sizeof(anyObject, true));	// 50B

# APIs

- **sizeof(object, pretty)**
	
	- Gets the approximate size of the given object in bytes.
	- `pretty`: if sets to `true`, returns the size in pretty format (e.g., 35.298K).