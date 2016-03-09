var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Link = ReactRouter.Link;

var Header = React.createClass({
    render: function() {
        return (
            <header>
                <div>
                    <h1>ヘッダです</h1>
                </div>
                <div>
                    <Link to="/portal">ポータル</Link>
                    <Link to="/userbox">ユーザリスト</Link>
                    <button>ログアウト</button>
                </div>
            </header>
        )
    }
});

module.exports = Header;