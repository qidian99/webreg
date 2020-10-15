

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

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var ToggleButton = _interopDefault(require('@material-ui/lab/ToggleButton'));
var ToggleButtonGroup = _interopDefault(require('@material-ui/lab/ToggleButtonGroup'));

var timeStringMap = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
//# sourceMappingURL=index.js.map

var useStyles = styles.makeStyles(function (theme) { return ({
    root: {
        padding: theme.spacing(0),
        borderRadius: 12,
    },
    header: {
        backgroundColor: "#BAE1FF",
        "& > *:first-child": {
            fontWeight: 800,
        },
    },
    avatarContainer: {
        padding: theme.spacing(1.5),
        display: "flex",
        alignItems: "center",
    },
    avatar: {
        backgroundColor: "#EAEAEA",
        color: "#000",
        marginRight: theme.spacing(2),
    },
    professor: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
    },
    sectionContainer: {
        marginBottom: theme.spacing(1),
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
    },
    actionButton: {
        borderRadius: theme.spacing(0.5),
        backgroundColor: "#034263",
        color: "#FFF",
        "&:hover": {
            backgroundColor: "#034263",
        },
    },
    toggleButton: {
        "& .Mui-selected": {
            backgroundColor: "#034263",
            color: "#FFF",
            "&:hover": {
                backgroundColor: "#034263",
            },
        },
    },
}); });
// const ActionButton = withStyles({
//   root: {
//     background: "034263",
//     borderRadius: 4,
//     border: 0,
//     color: "#FFF",
//   },
//   label: {
//     textTransform: "none",
//   },
// })(Button);
var CourseCard = function (_a) {
    var title = _a.title, description = _a.description, units = _a.units, professor = _a.professor, sectionId = _a.sectionId, sectionInfo = _a.sectionInfo;
    var props = {};
    var classes = useStyles(props);
    var _b = React.useState("pnp"), gradingOption = _b[0], setGradingOption = _b[1];
    var handleAlignment = function (event, newOption) {
        setGradingOption(newOption);
        event.preventDefault();
    };
    return (React.createElement(core.Card, { className: classes.root },
        React.createElement(core.CardContent, { className: classes.header },
            React.createElement(core.Grid, { container: true },
                React.createElement(core.Grid, { item: true, className: classes.avatarContainer },
                    React.createElement(core.Avatar, { "aria-label": "recipe", className: classes.avatar }, units)),
                React.createElement(core.Grid, { item: true, xs: true, container: true, direction: "column", justify: "center" },
                    React.createElement(core.Typography, { variant: "h6", color: "textPrimary" }, title),
                    React.createElement(core.Typography, { variant: "h6", color: "textSecondary" }, description)))),
        React.createElement(core.CardContent, null,
            React.createElement(core.Box, { className: classes.professor },
                React.createElement(core.Typography, null, professor),
                React.createElement(core.Typography, null,
                    React.createElement(core.Typography, { display: "inline", color: "textSecondary" },
                        "Section ID",
                        " "),
                    sectionId)),
            React.createElement(core.Grid, { container: true, spacing: 1, alignItems: "center", className: classes.sectionContainer }, sectionInfo.map(function (_a) {
                var section = _a.section, type = _a.type, schedule = _a.schedule, time = _a.time, location = _a.location;
                return (React.createElement(React.Fragment, null,
                    React.createElement(core.Grid, { xs: 1, item: true }, section),
                    React.createElement(core.Grid, { xs: 1, item: true }, type),
                    React.createElement(core.Grid, { xs: 3, item: true }, Array.from(Array(7).keys()).map(function (index) { return (React.createElement(core.Typography, { component: "span", color: time.includes(index) ? "textPrimary" : "textSecondary", style: { marginLeft: 1 } }, timeStringMap[index])); })),
                    React.createElement(core.Grid, { xs: 4, item: true }, schedule),
                    React.createElement(core.Grid, { xs: 3, item: true }, location)));
            })),
            React.createElement(core.Box, { className: classes.actions },
                React.createElement(ToggleButtonGroup, { value: gradingOption, exclusive: true, onChange: handleAlignment, "aria-label": "grading options", className: classes.toggleButton },
                    React.createElement(ToggleButton, { value: "pnp", "aria-label": "pass non-pass" }, "P/NP"),
                    React.createElement(ToggleButton, { value: "letter", "aria-label": "letter grade" }, "Letter")),
                React.createElement(core.Button, { className: classes.actionButton }, "Drop Course")))));
};
CourseCard.defaultProps = {
    title: "CSE 100",
    description: "Advanced Data Structures",
    units: 4,
    professor: "Gillespie, Gary N",
    sectionId: 983761,
    sectionInfo: [
        {
            section: "A00",
            type: "LE",
            schedule: "3:30p - 4:50p",
            time: [1, 3, 5],
            location: "PCYHN 106",
        },
        {
            section: "A01",
            type: "DI",
            schedule: "7:30p - 8:20p",
            time: [2],
            location: "PCYHN 106",
        },
        {
            section: "FINAL",
            type: "LE",
            schedule: "3:00p - 5:59p",
            time: [1],
            location: "TBA",
        },
    ],
};

exports.CourseCard = CourseCard;
//# sourceMappingURL=index.js.map
