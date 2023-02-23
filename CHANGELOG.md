# Changelog

## [Table of Contents]
- [Unreleased](#unreleased)
- [1.2.2](#122---2023-02-23)
- [1.2.1](#121---2022-10-01)
- [1.2.0](#120---2022-09-28)
- [1.1.0](#110---2022-08-12)
- [1.0.0](#100---2022-07-26)

## [Unreleased][]
### Added
### Changed
### Removed
### Fixed

## [1.2.2] - 2023-02-23
### Added
### Changed
### Removed
### Fixed
- Fix to on_mouse_rbtn_up disable default menu behavior.

## [1.2.1] - 2022-10-01
### Added
### Changed
### Removed
### Fixed
- Crash due to non defined this when adding a single listener to the stack.

## [1.2.0] - 2022-09-28
### Added
- parentWindow.eventListener: added new property to 'this' within event listeners scope. It may be used to remove itself after executing it once for ex. Contains name of the callback (event) and listener id.
- removeEventListenerSelf: shorthand to 'removeEventListener(this.eventListener.event, null, this.eventListener.id)' within event listeners scope.
### Changed
### Removed
### Fixed

## [1.1.0] - 2022-08-12
### Added
- removeEventListeners: new function 'removeEventListeners(event)' to remove all listeners attached to a callback. Event may be a string or array of strings with the name of callbacks to remove, i.e. 'on_playlists_changed' or  ['on_playlists_changed', 'on_script_unload'].
### Changed
### Removed
### Fixed

## [1.0.0] - 2022-07-26
### Added
- First release.
### Changed
### Removed
### Fixed

[Unreleased]: https://github.com/regorxxx/Callbacks-Framework-SMP/compare/v1.2.2...HEAD
[1.2.2]: https://github.com/regorxxx/Callbacks-Framework-SMP/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/regorxxx/Callbacks-Framework-SMP/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/regorxxx/Callbacks-Framework-SMP/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/regorxxx/Callbacks-Framework-SMP/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/regorxxx/Callbacks-Framework-SMP/compare/997dd95...v1.0.0