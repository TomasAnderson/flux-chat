var React = require('react');
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./utils/ChatWebAPIUtils');
var ChatApp = require('./components/ChatApp.react');

ChatExampleData.init();

ChatWebAPIUtils.getAllMessages();

React.render(
	<ChatApp />,
	document.getElementById('chatapp')
);