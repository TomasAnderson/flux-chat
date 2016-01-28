var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ChatWebAIPUtils = require('../utils/ChatWebAPIUtils');
var ChatMessageUtils = require('../utils/ChatMessageUtils');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

	createMessage: function (text, currentThreadID) {
		ChatAppDispatcher.dispatch({
			type: ActionTypes.CREATE_MESSAGE,
			text: text,
			currentThreadID: currentThreadID
		});
		var message = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
		ChatWebAIPUtils.createMessage(message);
	}

};