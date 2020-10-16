

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
var RefreshIcon = _interopDefault(require('@material-ui/icons/Cached'));
var DeleteIcon = _interopDefault(require('@material-ui/icons/DeleteForever'));
var AddIcon = _interopDefault(require('@material-ui/icons/AddCircle'));
var ToggleButton = _interopDefault(require('@material-ui/lab/ToggleButton'));
var ToggleButtonGroup = _interopDefault(require('@material-ui/lab/ToggleButtonGroup'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));

var timeStringMap = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
//# sourceMappingURL=index.js.map

var DisplayOption;
(function (DisplayOption) {
    DisplayOption["Card"] = "card";
    DisplayOption["List"] = "list";
})(DisplayOption || (DisplayOption = {}));
var useStyles = styles.makeStyles(function (theme) { return ({
    root: function (_a) {
        var display = _a.display;
        var style = {
            padding: theme.spacing(0),
            borderRadius: 12,
            maxWidth: 600,
        };
        if (display === DisplayOption.List) {
            style.border = "2px solid #034263";
        }
        return style;
    },
    header: function (_a) {
        var display = _a.display;
        if (display === DisplayOption.Card) {
            return {
                backgroundColor: "#BAE1FF",
            };
        }
        return {
            padding: theme.spacing(0),
            paddingTop: theme.spacing(1),
        };
    },
    title: {
        fontWeight: 800,
    },
    avatarContainer: {
        padding: theme.spacing(1.5),
        display: "flex",
        alignItems: "center",
    },
    avatar: function (_a) {
        var display = _a.display;
        return ({
            backgroundColor: "#EAEAEA",
            color: "#000",
            marginRight: display === DisplayOption.Card ? theme.spacing(2) : theme.spacing(0),
        });
    },
    professor: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
        "& > .MuiTypography-root": {
            color: "#034263",
        },
    },
    sectionContainer: {
    // marginBottom: theme.spacing(1),
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
    },
    actionButton: {
        minWidth: 160,
        borderRadius: theme.spacing(0.5),
        backgroundColor: "#034263",
        color: "#FFF",
        "&:hover": {
            backgroundColor: "#034263",
        },
    },
    toggleButton: {
        "& .MuiToggleButton-root": {
            minWidth: 80,
        },
        "& .Mui-selected": {
            backgroundColor: "#034263",
            color: "#FFF",
            "&:hover": {
                backgroundColor: "#034263",
            },
        },
    },
    classType: {
    // marginLeft: theme.spacing(1),
    },
    classLocation: {
    // fontSize: "0.8rem",
    },
    listActions: function () { return ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%",
        borderLeft: "1px solid rgba(3,66,99,0.1)",
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
    }); },
    icon: {
        color: "#034263",
        fontSize: "2.5rem",
    },
    addIcon: {
        color: "rgba(3,66,99,0.3)",
        fontSize: "2.5rem",
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
    var title = _a.title, description = _a.description, units = _a.units, professor = _a.professor, sectionId = _a.sectionId, sectionInfo = _a.sectionInfo, action = _a.action, onOptionChange = _a.onOptionChange, onActionClick = _a.onActionClick, onRefresh = _a.onRefresh, onDelete = _a.onDelete, onAdd = _a.onAdd, display = _a.display;
    var props = { display: display };
    var classes = useStyles(props);
    var _b = React.useState("pnp"), gradingOption = _b[0], setGradingOption = _b[1];
    var handleAlignment = function (event, newOption) {
        setGradingOption(newOption);
        onOptionChange(newOption);
        event.preventDefault();
    };
    var CourseFragment = (React.createElement(React.Fragment, null,
        React.createElement(core.CardContent, { className: classes.header },
            React.createElement(core.Grid, { container: true },
                React.createElement(core.Grid, { item: true, className: classes.avatarContainer },
                    React.createElement(core.Avatar, { "aria-label": "recipe", className: classes.avatar }, units)),
                React.createElement(core.Grid, { item: true, xs: true, container: true, direction: "column", justify: "flex-start" },
                    React.createElement(core.Typography, { variant: "h6", color: "textPrimary", className: classes.title }, title),
                    React.createElement(core.Typography, { variant: "h6", color: "textSecondary" }, description)))),
        React.createElement(core.CardContent, null,
            React.createElement(core.Box, { className: classes.professor },
                React.createElement(core.Typography, null, professor),
                React.createElement(core.Typography, { component: "span" },
                    React.createElement(core.Typography, { component: "span", color: "textSecondary" },
                        "Section ID",
                        " "),
                    sectionId)),
            React.createElement(core.Grid, { container: true, spacing: 1, alignItems: "center", className: classes.sectionContainer }, sectionInfo.map(function (_a, idx) {
                var section = _a.section, type = _a.type, schedule = _a.schedule, time = _a.time, location = _a.location;
                return (React.createElement(React.Fragment, { key: "section-" + idx },
                    React.createElement(core.Grid, { sm: 1, xs: 1, item: true },
                        React.createElement(core.Typography, { color: "textSecondary" }, section)),
                    React.createElement(core.Grid, { sm: 1, xs: 1, item: true, className: classes.classType, container: true, justify: "center" }, type),
                    React.createElement(core.Grid, { sm: 3, xs: 3, item: true, container: true, justify: "center" },
                        type &&
                            Array.from(Array(7).keys()).map(function (index) { return (React.createElement(core.Typography, { key: "date-" + index, component: "span", style: {
                                    marginLeft: 1,
                                    color: time.includes(index)
                                        ? "#034263"
                                        : "#EAEAEA",
                                } }, timeStringMap[index])); }),
                        !type && (React.createElement(core.Typography, { component: "span", style: {
                                marginLeft: 1,
                                color: "#034263",
                            } }, time))),
                    React.createElement(core.Grid, { sm: 4, xs: 4, item: true, container: true, justify: "center" }, schedule),
                    React.createElement(core.Grid, { sm: 3, xs: 3, item: true, container: true, justify: "flex-end", className: classes.classLocation }, location)));
            })))));
    var ContentFragment = (React.createElement(React.Fragment, null,
        CourseFragment,
        display === DisplayOption.Card && (React.createElement(core.CardContent, { className: classes.actions },
            React.createElement(ToggleButtonGroup, { value: gradingOption, exclusive: true, onChange: handleAlignment, "aria-label": "grading options", className: classes.toggleButton },
                React.createElement(ToggleButton, { disabled: gradingOption === "pnp", value: "pnp", "aria-label": "pass non-pass" }, "P/NP"),
                React.createElement(ToggleButton, { disabled: gradingOption === "letter", value: "letter", "aria-label": "letter grade" }, "Letter")),
            React.createElement(core.Button, { onClick: onActionClick, className: classes.actionButton }, action)))));
    var ListActions = (React.createElement(React.Fragment, null,
        React.createElement(core.Box, { className: classes.listActions },
            React.createElement(IconButton, { onClick: onRefresh },
                React.createElement(RefreshIcon, { className: classes.icon })),
            React.createElement(IconButton, { onClick: onDelete },
                React.createElement(DeleteIcon, { className: classes.icon })),
            React.createElement(IconButton, { onClick: onAdd },
                React.createElement(AddIcon, { className: classes.addIcon })))));
    switch (display) {
        case DisplayOption.List:
            return (React.createElement(core.Card, { className: classes.root },
                React.createElement(core.Grid, { container: true },
                    React.createElement(core.Grid, { item: true, xs: true }, ContentFragment),
                    React.createElement(core.Grid, { item: true }, ListActions))));
        case DisplayOption.Card:
        default:
            return React.createElement(core.Card, { className: classes.root }, ContentFragment);
    }
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
            schedule: "3:00p - 5:59p",
            time: "Mon 12/13",
            location: "TBA",
        },
    ],
    action: "Drop Course",
    onOptionChange: function () { },
    onActionClick: function () { },
    onRefresh: function () { },
    onDelete: function () { },
    onAdd: function () { },
    display: DisplayOption.Card,
};

exports.CourseCard = CourseCard;
//# sourceMappingURL=index.js.map
