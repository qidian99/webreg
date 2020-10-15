

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');

var useStyles = styles.makeStyles(function (theme) { return ({
    root: {
        padding: theme.spacing(2),
    },
    avatar: {
        backgroundColor: "#EAEAEA",
        color: '#000',
    },
}); });
var CourseCard = function (_a) {
    var title = _a.title, description = _a.description, units = _a.units;
    var props = {};
    var classes = useStyles(props);
    return (React.createElement(core.Card, { className: classes.root },
        React.createElement(core.CardContent, null,
            React.createElement(core.Grid, { container: true },
                React.createElement(core.Grid, { item: true },
                    React.createElement(core.Avatar, { "aria-label": "recipe", className: classes.avatar }, units)),
                React.createElement(core.Grid, { item: true, xs: true, container: true, direction: "column" },
                    React.createElement(core.Typography, { color: "textPrimary" }, title),
                    React.createElement(core.Typography, { color: "textSecondary" }, description)))),
        React.createElement(core.CardContent, null,
            React.createElement(core.Button, { color: "primary" }, "Drop Course"))));
};
CourseCard.defaultProps = {
    title: "CSE 100",
    description: "Advanced Data Structures",
    units: 4,
    professor: "Gillespie, Gary N",
    sectionId: 983761,
    sectionInfo: [{
            section: "A00",
            type: "LE",
            schedule: "3:30p - 4:50p",
            time: [1, 3, 5],
            location: "PCYHN 106",
        }]
};

exports.CourseCard = CourseCard;
//# sourceMappingURL=index.js.map
