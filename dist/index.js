

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
var moment_ = require('moment');
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var RefreshIcon = _interopDefault(require('@material-ui/icons/Cached'));
var DeleteIcon = _interopDefault(require('@material-ui/icons/DeleteForever'));
var AddIcon = _interopDefault(require('@material-ui/icons/AddCircle'));
var ToggleButton = _interopDefault(require('@material-ui/lab/ToggleButton'));
var ToggleButtonGroup = _interopDefault(require('@material-ui/lab/ToggleButtonGroup'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

/* Theme */
var COLOR_SECONDARY = '#BAE1FF';
var COLOR_LIGHT_GREY = '#EAEAEA';
var COLOR_GREY = '#c5c5c5';

var styled = require('styled-components').default;
/* Components */
var CALENDAR_TIME_COL_WIDTH = '35px';
var CALENDAR_ROW_HEIGHT = '56px';
var CALENDAR_HORIZONTAL_PADDING = '10px';
var FlexContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n"])));
var CalendarContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: 50px 1fr;\n"], ["\n  height: 100%;\n  overflow: hidden;\n  display: grid;\n  grid-template-rows: 50px 1fr;\n"])));
var CalendarHeader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  margin: 0 ", ";\n  padding: 20px 0 15px 0;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  margin: 0 ", ";\n  padding: 20px 0 15px 0;\n  border-bottom: 1px solid ", ";\n"])), CALENDAR_HORIZONTAL_PADDING, COLOR_GREY);
var CalendarHeaderItem = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nfont-size: 10px;\ntext-align: center;\nletter-spacing: -0.02em;\n", "\n"], ["\nfont-size: 10px;\ntext-align: center;\nletter-spacing: -0.02em;\n",
    "\n"])), function (props) { return (props.time
    ? "width: " + CALENDAR_TIME_COL_WIDTH + ";"
    : 'flex: 1;'); });
var CalendarBody = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  overflow-y: scroll;\n  height: 100%;\n  padding: 0 ", ";\n  display: grid;\n  grid-template-columns: ", " 1fr;\n"], ["\n  overflow-y: scroll;\n  height: 100%;\n  padding: 0 ", ";\n  display: grid;\n  grid-template-columns: ", " 1fr;\n"])), CALENDAR_HORIZONTAL_PADDING, CALENDAR_TIME_COL_WIDTH);
var CalendarGrid = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: grid;\n  grid-template-rows: repeat(15, ", ");\n"], ["\n  display: grid;\n  grid-template-rows: repeat(15, ", ");\n"])), CALENDAR_ROW_HEIGHT);
var CalendarGridItem = styled(FlexContainer)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n"], ["\n  height: 100%;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n"])), COLOR_LIGHT_GREY);
var CalendarTimeline = styled(CalendarGrid)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 10px;\n  letter-spacing: -0.02em;\n"], ["\n  font-size: 10px;\n  letter-spacing: -0.02em;\n"])));
var CalendarTimelineItem = CalendarGridItem;
var CalendarSchedule = styled(CalendarGrid)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var CalendarScheduleItem = CalendarGridItem;
var CalendarCourseContainer = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  display: grid;\n  column-gap: 1px;\n  padding: 0 1px;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(90, 1fr);\n  grid-template-columns: repeat(7, 1fr);\n"], ["\n  position: absolute;\n  display: grid;\n  column-gap: 1px;\n  padding: 0 1px;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(90, 1fr);\n  grid-template-columns: repeat(7, 1fr);\n"])));
var CalendarCardHeader = styled(FlexContainer)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 9px;\n  background-color: ", ";\n"], ["\n  font-weight: bold;\n  font-size: 9px;\n  background-color: ", ";\n"])), COLOR_SECONDARY);
var CalendarCardBody = styled(FlexContainer)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  flex-direction: column;\n  font-size: 8px;\n  height: 100%;\n  letter-spacing: -0.02em;\n"], ["\n  flex-direction: column;\n  font-size: 8px;\n  height: 100%;\n  letter-spacing: -0.02em;\n"])));
var CalendarCardTitle = styled(FlexContainer)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 9px;\n  font-weight: bold;\n"], ["\n  font-size: 9px;\n  font-weight: bold;\n"])));
var CalendarCard = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 15px 1fr;\n  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.25), -1px 1px 2.5px rgba(0, 0, 0, 0.25);\n  border-radius: 2px;\n  background-color: white;\n  text-transform: uppercase;\n  overflow: hidden;\n  box-sizing: border-box;\n\n  ", "\n"], ["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 15px 1fr;\n  box-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.25), -1px 1px 2.5px rgba(0, 0, 0, 0.25);\n  border-radius: 2px;\n  background-color: white;\n  text-transform: uppercase;\n  overflow: hidden;\n  box-sizing: border-box;\n\n  ",
    "\n"])), function (props) { return (props.focused
    && "border: 1px solid #034263;\n  " + CalendarCardHeader + " {\n  border-bottom: 1px solid #034263;\n  }\n  "); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;

var moment = moment_;
var timeStringMap = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
var getCourseTimeString = function (time) {
    var res = [];
    time.forEach(function (date) { return timeStringMap[date]; });
    return res;
};
var CALENDAR_TIMES = [
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
    '10pm',
];
var DATE_PREFIX = '2020-10-20T';
var calcDuration = function (start, end) { return moment.duration(moment(end).diff(moment(start))).asMinutes(); };
// height
var calcRowSpan = function (startTime, endTime, datePrefix) {
    if (datePrefix === void 0) { datePrefix = DATE_PREFIX; }
    // Calculate the duration of class in minutes
    var classDuration = calcDuration(startTime, endTime);
    // The earlist class starts from 8am in the morning
    var classStart = calcDuration(datePrefix + "08:00:00", startTime);
    // Calculate the offset in multiple of ten minutes
    var rowStart = Math.floor(classStart / 10) + 1;
    // grid-row-start / grid-row-end
    return rowStart + "/" + (rowStart + Math.floor(classDuration / 10));
};
var calcColSpan = function (dayOfWeek) { return dayOfWeek + "/" + (dayOfWeek + 1); };
var calculateCardPosition = function (startTime, endTime, dayOfWeek, datePrefix) {
    if (dayOfWeek === void 0) { dayOfWeek = 1; }
    if (datePrefix === void 0) { datePrefix = DATE_PREFIX; }
    return ({
        gridRow: calcRowSpan(datePrefix + startTime, datePrefix + endTime, datePrefix),
        gridColumn: calcColSpan(dayOfWeek),
    });
};

// startTime / endTime format: hh:mm
// dayOfWeek format: [1,7]
// datePrefix format: yyyy-mm-ddT
var CalendarCourseCard = function (_a) {
    var startTime = _a.startTime, endTime = _a.endTime, dayOfWeek = _a.dayOfWeek, type = _a.type, title = _a.title, location = _a.location, _b = _a.datePrefix, datePrefix = _b === void 0 ? "2020-10-20T" : _b, _c = _a.focused, focused = _c === void 0 ? false : _c;
    return (React.createElement(CalendarCard, { focused: focused, style: __assign({}, calculateCardPosition(startTime, endTime, dayOfWeek, datePrefix)) },
        React.createElement(CalendarCardHeader, null, type),
        React.createElement(CalendarCardBody, null,
            React.createElement(CalendarCardTitle, null, title),
            React.createElement("div", null, location))));
};
CalendarCourseCard.defaultProps = {
    datePrefix: "2020-06-06T",
    startTime: "10:00:00",
    endTime: "10:50:00",
    dayOfWeek: 1,
    type: "DI",
    title: "CSE 123",
    location: "PCYNH 112",
};

var DisplayOption;
(function (DisplayOption) {
    DisplayOption["Card"] = "card";
    DisplayOption["List"] = "list";
})(DisplayOption || (DisplayOption = {}));
var StatusOption;
(function (StatusOption) {
    StatusOption["Enrolled"] = "enrolled";
    StatusOption["Waitlist"] = "waitlist";
    StatusOption["Planned"] = "planned";
})(StatusOption || (StatusOption = {}));
var useStyles = styles.makeStyles(function (theme) { return ({
    root: function (_a) {
        var display = _a.display, status = _a.status;
        var style = {
            padding: theme.spacing(0),
            borderRadius: 12,
            maxWidth: 600,
        };
        if (display === DisplayOption.List) {
            var borderType = "solid";
            var color = "#034263";
            if (status === StatusOption.Waitlist) {
                borderType = "dashed";
            }
            if (status === StatusOption.Planned) {
                color = "rgba(97,97,97,0.5)";
            }
            style.border = "3px " + borderType + " " + color;
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
    status: {
        display: "flex",
        justifyContent: "space-between",
    },
    enrolled: {
        color: "#034263",
        marginRight: theme.spacing(1),
    },
    waitlist: {
        color: "#D27070",
        marginRight: theme.spacing(1),
    },
    planned: {
        color: "#979797",
        marginRight: theme.spacing(1),
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
    var title = _a.title, description = _a.description, units = _a.units, professor = _a.professor, sectionId = _a.sectionId, sectionInfo = _a.sectionInfo, action = _a.action, onOptionChange = _a.onOptionChange, onActionClick = _a.onActionClick, onRefresh = _a.onRefresh, onDelete = _a.onDelete, onAdd = _a.onAdd, display = _a.display, status = _a.status, statusText = _a.statusText;
    var props = { display: display, status: status };
    var classes = useStyles(props);
    var _b = React.useState("pnp"), gradingOption = _b[0], setGradingOption = _b[1];
    var handleAlignment = function (event, newOption) {
        setGradingOption(newOption);
        onOptionChange(newOption);
        event.preventDefault();
    };
    var TitleFragment = (React.createElement(core.Typography, { align: "left", variant: "h6", color: "textPrimary", className: classes.title }, title));
    if (display === DisplayOption.List && status) {
        TitleFragment = (React.createElement(core.Box, { className: classes.status },
            React.createElement(core.Typography, { align: "left", variant: "h6", color: "textPrimary", className: classes.title }, title),
            React.createElement(core.Typography, { component: "span", className: classes[status] }, statusText)));
    }
    var CourseFragment = (React.createElement(React.Fragment, null,
        React.createElement(core.CardContent, { className: classes.header },
            React.createElement(core.Grid, { container: true },
                React.createElement(core.Grid, { item: true, className: classes.avatarContainer },
                    React.createElement(core.Avatar, { "aria-label": "recipe", className: classes.avatar }, units)),
                React.createElement(core.Grid, { item: true, xs: true, container: true, direction: "column" },
                    TitleFragment,
                    React.createElement(core.Typography, { align: "left", variant: "h6", color: "textSecondary" }, description)))),
        React.createElement(core.CardContent, null,
            React.createElement(core.Box, { className: classes.professor },
                React.createElement(core.Typography, null, professor),
                React.createElement(core.Typography, { component: "span", variant: "body2" },
                    React.createElement(core.Typography, { component: "span", variant: "body2", color: "textSecondary" },
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
    status: StatusOption.Enrolled,
    statusText: 'Enrolled - Letter',
};

var CALENDAR_TIMES$1 = [
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
];
var Calendar = function () { return (React.createElement(CalendarContainer, null,
    React.createElement(CalendarHeader, null,
        React.createElement(CalendarHeaderItem, { time: true }),
        React.createElement(CalendarHeaderItem, null, "Sun"),
        React.createElement(CalendarHeaderItem, null, "Mon"),
        React.createElement(CalendarHeaderItem, null, "Tues"),
        React.createElement(CalendarHeaderItem, null, "Wed"),
        React.createElement(CalendarHeaderItem, null, "Thurs"),
        React.createElement(CalendarHeaderItem, null, "Fri"),
        React.createElement(CalendarHeaderItem, null, "Sat")),
    React.createElement(CalendarBody, null,
        React.createElement(CalendarTimeline, null, CALENDAR_TIMES$1.map(function (time) { return (React.createElement(CalendarTimelineItem, { key: "course-time-" + time }, time)); })),
        React.createElement(CalendarSchedule, null,
            CALENDAR_TIMES$1.map(function (time) { return (React.createElement(CalendarScheduleItem, { key: "course-grid-row-" + time })); }),
            React.createElement(CalendarCourseContainer, null,
                React.createElement(CalendarCourseCard, { datePrefix: "2020-06-06T", startTime: "09:00", endTime: "09:50", dayOfWeek: 2, type: "LE", title: "CSE 120", location: "PCYNH 112", focused: true }),
                React.createElement(CalendarCourseCard, { datePrefix: "2020-06-06T", startTime: "09:00", endTime: "09:50", dayOfWeek: 4, type: "LE", title: "CSE 121", location: "PCYNH 112" }),
                React.createElement(CalendarCourseCard, { datePrefix: "2020-06-06T", startTime: "09:00", endTime: "09:50", dayOfWeek: 6, type: "LE", title: "CSE 122", location: "PCYNH 112" }),
                React.createElement(CalendarCourseCard, { datePrefix: "2020-06-06T", startTime: "14:00", endTime: "15:20", dayOfWeek: 1, type: "LE", title: "COGS 10", location: "WLH 110" }),
                React.createElement(CalendarCourseCard, { datePrefix: "2020-06-06T", startTime: "10:00:00", endTime: "10:50:00", dayOfWeek: 1, type: "DI", title: "CSE 123", location: "PCYNH 112" })))))); };

exports.CALENDAR_TIMES = CALENDAR_TIMES;
exports.Calendar = Calendar;
exports.CalendarCourseCard = CalendarCourseCard;
exports.CourseCard = CourseCard;
exports.DATE_PREFIX = DATE_PREFIX;
exports.calcColSpan = calcColSpan;
exports.calcDuration = calcDuration;
exports.calcRowSpan = calcRowSpan;
exports.calculateCardPosition = calculateCardPosition;
exports.getCourseTimeString = getCourseTimeString;
exports.timeStringMap = timeStringMap;
//# sourceMappingURL=index.js.map
