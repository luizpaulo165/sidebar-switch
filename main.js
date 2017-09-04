/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Simple extension that adds a "File > Hello World" menu item. Inserts "Hello, world!" at cursor pos. */
define(function (require, exports, module) {
    'use strict';
    
//   var CommandManager = brackets.getModule("command/CommandManager"),
//        EditorManager  = brackets.getModule("editor/EditorManager"),
//        Menus          = brackets.getModule("command/Menus");
    
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
    
    ExtensionUtils.loadStyleSheet(module, 'sidebar-switch.css');
});