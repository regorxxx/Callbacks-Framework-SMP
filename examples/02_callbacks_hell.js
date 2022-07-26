'use strict';
//26/07/22

include('..\\helpers\\callbacks_xxx.js');

/*
	Callbacks-XXX Framework example:
		Load file into a panel
		- L. Button click: Outputs to console log a message
		- R. Button click: Enables/disables L. button click functionality
		
	How manual callbacks and event listeners may work in conjunction ...
*/

window.DefineScript('Callbacks-Framework-SMP');
fb.ShowPopupMessage('- L. Button click: Outputs to console log a message\n- R. Button click: Enables/disables L. button click functionality\n\nNote in this example the R. button switch only affects a part of the message.', window.ScriptInfo.Name);

// Standard callback
function on_mouse_lbtn_up() {
	console.log('Hey!');
}

// Event listener
const listener = () => {console.log('Hello world!');}

addEventListener('on_mouse_lbtn_up', listener);

addEventListener('on_mouse_rbtn_up', () => {
	console.log('Pressed R. Button');
	if (findEventListener('on_mouse_lbtn_up', listener) !== -1) {
		console.log('Disabled L. Button listener');
		removeEventListener('on_mouse_lbtn_up', listener);
		return true;
	} else {
		console.log('Enabled L. Button listener');
		addEventListener('on_mouse_lbtn_up', listener); 
		return true;
	}
});

// Wrapped callback when we are unsure other files add their own manually
// In this use-case, the previously defined callback will be wrapped
function on_mouse_lbtn_up_second() {
	console.log('Ho!');
}
if (typeof on_mouse_lbtn_up !== 'undefined') {
	const oldFunc = on_mouse_lbtn_up;
	on_mouse_lbtn_up = function() {
		oldFunc.apply(this, arguments);
		on_mouse_lbtn_up_second.apply(this, arguments);
	}
} else {
	on_mouse_lbtn_up = on_mouse_lbtn_up_second;
}