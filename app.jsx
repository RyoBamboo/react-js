var React = require('react');
var ReactDOM = require('react-dom');
var AppBar = require('material-ui/lib/app-bar');

const style = {
    margin: 0,
};

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Container />
                <Footer />
            </div>
        )
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <AppBar
                    title="Title"
                />
            </div>
        )
    }
});

var Container = React.createClass({
    render: function() {
        return (
            <div>
            </div>
        )
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <div className="footer">
            </div>
        )
    }
});

var Hello = React.createClass({
    render: function() {
        return(
            <div>
                <RaisedButton label="START" secondary={true} style={style} />
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));