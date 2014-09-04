Meteor.startup(function() {
	// Add polyfills.
	// require("famous-polyfills");
	famous.polyfills;     // why does this work?
	famous.core.famous;   // what do these two lines actually do?

	// Add the default CSS file.
	require("famous/core/famous");

	// Add everything to window for simplicity's sake.
	window.Engine = require('famous/core/Engine');

	window.View = require('famous/core/View');

	// going to try rendering with raix's special surface
	window.Surface = require('library/meteor/core/Surface');
	// window.Surface = require('famous/core/Surface');

	window.Modifier = require('famous/core/Modifier');
	window.Transform = require('famous/core/Transform');
	// window.Deck = require('famous/views/Deck');
	// window.Group = require('famous/core/Group');
	// window.Utility = require('famous/utilities/Utility');
	// window.Draggable = require('famous/modifiers/Draggable');
	// window.StateModifier = require('famous/modifiers/StateModifier');
	// window.ScrollContainer = require('famous/views/ScrollContainer');
	// window.RenderController = require('famous/views/RenderController');

	// window.Scrollview = require('famous/views/Scrollview');
	window.HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
	window.GridLayout = require("famous/views/GridLayout");

	// window.Easing = require('famous/transitions/Easing');
	// window.Transitionable = require('famous/transitions/Transitionable');
	// window.SnapTransition = require('famous/transitions/SnapTransition');
	// window.SpringTransition = require('famous/transitions/SpringTransition');


	// Initialize two basic transitions.
	// Transitionable.registerMethod('snap', SnapTransition);
	// Transitionable.registerMethod('spring', SpringTransition);
});