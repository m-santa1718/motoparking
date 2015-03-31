var React = require("react"),
    _ = require("lodash");

require("./style.css");

var Avatar = require("../Avatar"),
    moment = require('moment');


moment.locale("ru");


var Comment = React.createClass({

    propTypes: {
        comment: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <div className="Comment">
                <div className="Comment__AvatarWrapper">
                    <Avatar user={ this.props.comment.user } />
                </div>
                <div className="Comment__Data">
                    <div className="Comment__Username">
                         { _.capitalize(this.props.comment.user.firstName) } { _.capitalize(this.props.comment.user.lastName) }
                    </div>
                    <div className="Comment__Date">
                        { moment(this.props.comment.created).fromNow() }
                    </div>
                    <div className="Comment__Text">
                        { this.props.comment.text }
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Comment;
