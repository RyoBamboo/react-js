var React = require('react');
var ReactDOM = require('react-dom');
var RaisedButton = require('material-ui/lib/raised-button');

var Hello = React.createClass( {
    render: function() {
        return(
            <div>
                <RaisedButton label="Primary" secondary={true} />
            </div>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById('app'));