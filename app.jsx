var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.History;
var ReactDOM = require('react-dom');

var Header = require('./header.jsx');
var Body = require('./body.jsx');
var UserBox = require('./userbox.jsx');

var hashHistory = ReactRouter.hashHistory;

var Index = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

var Top = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div>
                <div className="main">
                    <h1>ログイン</h1>
                    <form>
                        <input placeholder="userid" />
                        <input placeholder="password" />
                        <button type="submit">ログイン</button>
                    </form>
                </div>
            </div>
        )
    }
});


var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

var Routes = (
    <Route path="/" component={Index}>
        <IndexRoute component={Top} />
        <Route path="/top" component={Top}/>
        <Route path="/portal" component={Main}>
            <IndexRoute component={Body} />
            <Route path="/userbox" component={UserBox}/>
        </Route>
    </Route>
);

ReactDOM.render(
    <Router history={hashHistory}>{Routes}</Router>,
    document.getElementById('app')
);
