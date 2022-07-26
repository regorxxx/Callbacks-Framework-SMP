# Callbacks-Framework-SMP
[![version][version_badge]][changelog]
[![CodeFactor][codefactor_badge]](https://www.codefactor.io/repository/github/regorxxx/Callbacks-Framework-SMP/overview/main)
[![CodacyBadge][codacy_badge]](https://www.codacy.com/gh/regorxxx/Callbacks-Framework-SMP/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=regorxxx/Callbacks-Framework-SMPP&amp;utm_campaign=Badge_Grade)
![GitHub](https://img.shields.io/github/license/regorxxx/Callbacks-Framework-SMP)  
A helper script for [Spider Monkey Panel](https://theqwertiest.github.io/foo_spider_monkey_panel) and [foobar2000](https://www.foobar2000.org) which allows to easily attach and manage event listeners associated to SMP callbacks without wrapping or repeating code.  A lifesaver. 

## The problem with current SMP callbacks
Complex scripts, like those with UI, usually have interactive items at multiple places which must be linked to a callback to perform actions at certain events. While SMP allows modularization using include(), callbacks must be placed within a main file since redefinition of the function simply overwrites the previous one. That clearly limits the ability to just mix modules and or add event listeners to non-final scripts.
![carbon(5)](https://user-images.githubusercontent.com/83307074/181040854-b05abb1d-c49e-42c8-83c2-94b847485a57.png)
![carbon(6)](https://user-images.githubusercontent.com/83307074/181041496-78448af2-8147-443e-a0f0-2f0109b71658.png)

Using this framework it would translate into this:

![carbon(7)](https://user-images.githubusercontent.com/83307074/181042039-6813117b-ea2c-485e-a131-86c7565fd695.png)

## Features
- Adds event listeners to SMP callbacks.
- Removes event listeners on demand.
- Allows to find if an event listener is active.
- Mimics [mozilla implementation](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener).
- Bypasess common limitation of including files with existing callbacks, wrapping, etc.

## Usage
Just add an event listener to an specific event/callback.
```javascript
const listener = () => {console.log('Hello world!');}
addEventListener('on_mouse_lbtn_up', listener);
```

That's all. To remove it just do:
```javascript
removeEventListener('on_mouse_lbtn_up', listener);
```

Multiple listeners can be attached to the same event:
```javascript
addEventListener('on_mouse_lbtn_up', () => {console.log('1!');});
addEventListener('on_mouse_lbtn_up', () => {console.log('2!');});
addEventListener('on_mouse_lbtn_up', () => {console.log('3!');});
addEventListener('on_mouse_lbtn_up', () => {console.log('14!');});
```

Listener removal may be done using their UUID or function:
```javascript
const listener = () => {console.log('Hello world!');}
const uuid = addEventListener('on_mouse_lbtn_up', listener);
removeEventListener('on_mouse_lbtn_up', null, uuid);
```

There are more usage examples on the 'examples' folder.

## Installation
Since the framework only requires 1 file, i.e. the main one, you can simply include it along any other script where you usually need a callback.

![carbon(1)](https://user-images.githubusercontent.com/83307074/181011693-6f737dc4-0a86-4e2a-be2a-aa168128f1b1.png)

[changelog]: CHANGELOG.md
[version_badge]: https://img.shields.io/github/release/regorxxx/Callbacks-Framework-SMP.svg
[codacy_badge]: https://api.codacy.com/project/badge/Grade/3e59f8dccd204721a7801197d6c336ed
[codefactor_badge]: https://www.codefactor.io/repository/github/regorxxx/Callbacks-Framework-SMP/badge/main
