var messageProvider = require('../../lib/messageProvider');


var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello { messageProvider.getMessage() }</div>;
    }
});

module.exports = HelloMessage;