'use strict';
//26/07/22

include('..\\helpers\\callbacks_xxx.js');

/*
	Callbacks-XXX Framework example:
		Load file into a panel
		- L. Button click: Outputs to console log a message
		- R. Button click: Enables/disables L. button click functionality
*/

window.DefineScript('Callbacks-Framework-SMP');
fb.ShowPopupMessage('- L. Button click: Outputs to console log a message\n- R. Button click: Enables/disables L. button click functionality', window.ScriptInfo.Name);

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