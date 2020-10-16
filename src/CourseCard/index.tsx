import * as React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { timeStringMap } from "../util";

import RefreshIcon from "@material-ui/icons/Cached";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import AddIcon from "@material-ui/icons/AddCircle";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import IconButton from "@material-ui/core/IconButton";

// import { withStyles } from "@material-ui/styles";

// import "./styles.scss";

/*
Classes:
{
  "metadata": {},
  "data": {
    "subjectCode": "CSE",
    "courseCode": "101",
    "departmentCode": "CSE",
    "courseTitle": "Design & Analysis of Algorithm",
    "unitsMin": 4,
    "unitsMax": 4,
    "unitsInc": 0,
    "academicLevel": "UD",
    "sections": [
      {
        "sectionId": "849795",
        "termCode": "FA15",
        "subterm": "01",
        "sectionCode": "A00",
        "instructionType": "LE",
        "sectionStatus": "NC",
        "subtitle": "Section specific subtitle.",
        "startDate": "2015-12-09",
        "endDate": "2015-12-15",
        "enrolledQuantity": 0,
        "capacityQuantity": 105,
        "stopEnrollmentFlag": false,
        "planCode": "ST",
        "meetings": [
          {
            "dayCode": "MWF",
            "startTime": "1500",
            "endTime": "1759",
            "buildingCode": "PCYNH",
            "roomCode": "106"
          }
        ],
        "additionalMeetings": [
          {
            "meetingType": "FI",
            "meetingDate": "2015-12-09",
            "dayCode": "MO",
            "startTime": "1500",
            "endTime": "1759",
            "buildingCode": "PCYNH",
            "roomCode": "106"
          }
        ],
        "instructors": [
          {
            "pid": "A12345678",
            "instructorName": "Smith, John",
            "primaryInstructorFlag": true,
            "workloadUnits": 0,
            "workloadPercent": 0
          }
        ]
      }
    ]
  }
}

Meetings:
{
  "dayCode": "MWF",
  "startTime": "1500",
  "endTime": "1759",
  "buildingCode": "PCYNH",
  "roomCode": "106"
}
*/

type SectionType = {
  section: string;
  type?: string;
  schedule: string;
  time: Array<number> | string;
  location: string;
};

type SectionsType = Array<SectionType>;

enum DisplayOption {
  Card = "card",
  List = "list",
}

enum StatusOption {
  Enrolled = "enrolled",
  Waitlist = "waitlist",
  Planned = "planned",
}
interface CourseCardProps {
  title: string;
  description: string;
  units: Number;
  professor: string;
  sectionId: Number;
  sectionInfo: SectionsType;
  action: string;
  onOptionChange?: (value: string) => void;
  onActionClick?: () => void;
  onRefresh?: () => void;
  onDelete?: () => void;
  onAdd?: () => void;
  display: DisplayOption;
  status: StatusOption;
  statusText: string;
}

interface ThemeProps {
  display: DisplayOption;
  status?: StatusOption;
}

const useStyles = makeStyles((theme) => ({
  root: ({ display, status }: ThemeProps) => {
    const style: any = {
      padding: theme.spacing(0),
      borderRadius: 12,
      maxWidth: 600,
    };
    if (display === DisplayOption.List) {
      let borderType: string = "solid";
      let color: string = "#034263";
      if (status === StatusOption.Waitlist) {
        borderType = "dashed";
      }
      if (status === StatusOption.Planned) {
        color = "rgba(97,97,97,0.5)";
      }
      style.border = `3px ${borderType} ${color}`;
    }
    return style;
  },
  header: ({ display }: ThemeProps) => {
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
  avatar: ({ display }: ThemeProps) => ({
    backgroundColor: "#EAEAEA",
    color: "#000",
    marginRight:
      display === DisplayOption.Card ? theme.spacing(2) : theme.spacing(0),
  }),
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
  listActions: () => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    borderLeft: "1px solid rgba(3,66,99,0.1)",
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
  }),
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
}));

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

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  units,
  professor,
  sectionId,
  sectionInfo,
  action,
  onOptionChange,
  onActionClick,
  onRefresh,
  onDelete,
  onAdd,
  display,
  status,
  statusText,
}) => {
  const props = { display, status };
  const classes = useStyles(props);

  const [gradingOption, setGradingOption] = React.useState<string | null>(
    "pnp"
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newOption: string
  ) => {
    setGradingOption(newOption);
    onOptionChange!(newOption);
    event.preventDefault();
  };

  let TitleFragment = (
    <Typography
      align="left"
      variant="h6"
      color="textPrimary"
      className={classes.title}
    >
      {title}
    </Typography>
  );

  if (display === DisplayOption.List && status) {
    TitleFragment = (
      <Box className={classes.status}>
        <Typography
          align="left"
          variant="h6"
          color="textPrimary"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography component="span" className={classes[status]}>
          {statusText}
        </Typography>
      </Box>
    );
  }

  const CourseFragment = (
    <React.Fragment>
      <CardContent className={classes.header}>
        <Grid container>
          <Grid item className={classes.avatarContainer}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              {units}
            </Avatar>
          </Grid>
          <Grid item xs container direction="column">
            {TitleFragment}
            <Typography align="left" variant="h6" color="textSecondary">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Box className={classes.professor}>
          <Typography>{professor}</Typography>
          <Typography component="span">
            <Typography component="span" color="textSecondary">
              Section ID{" "}
            </Typography>
            {sectionId}
          </Typography>
        </Box>
        <Grid
          container
          spacing={1}
          alignItems="center"
          className={classes.sectionContainer}
        >
          {sectionInfo.map(
            ({ section, type, schedule, time, location }, idx) => (
              <React.Fragment key={`section-${idx}`}>
                <Grid sm={1} xs={1} item>
                  <Typography color="textSecondary">{section}</Typography>
                </Grid>
                <Grid
                  sm={1}
                  xs={1}
                  item
                  className={classes.classType}
                  container
                  justify="center"
                >
                  {type}
                </Grid>
                <Grid sm={3} xs={3} item container justify="center">
                  {type &&
                    Array.from(Array(7).keys()).map((index) => (
                      <Typography
                        key={`date-${index}`}
                        component="span"
                        style={{
                          marginLeft: 1,
                          color: (time as Array<number>).includes(index)
                            ? "#034263"
                            : "#EAEAEA",
                        }}
                      >
                        {timeStringMap[index]}
                      </Typography>
                    ))}

                  {!type && (
                    <Typography
                      component="span"
                      style={{
                        marginLeft: 1,
                        color: "#034263",
                      }}
                    >
                      {time}
                    </Typography>
                  )}
                </Grid>
                <Grid sm={4} xs={4} item container justify="center">
                  {schedule}
                </Grid>
                <Grid
                  sm={3}
                  xs={3}
                  item
                  container
                  justify="flex-end"
                  className={classes.classLocation}
                >
                  {location}
                </Grid>
              </React.Fragment>
            )
          )}
        </Grid>
      </CardContent>
    </React.Fragment>
  );

  const ContentFragment = (
    <React.Fragment>
      {CourseFragment}
      {display === DisplayOption.Card && (
        <CardContent className={classes.actions}>
          <ToggleButtonGroup
            value={gradingOption}
            exclusive
            onChange={handleAlignment}
            aria-label="grading options"
            className={classes.toggleButton}
          >
            <ToggleButton
              disabled={gradingOption === "pnp"}
              value="pnp"
              aria-label="pass non-pass"
            >
              P/NP
            </ToggleButton>
            <ToggleButton
              disabled={gradingOption === "letter"}
              value="letter"
              aria-label="letter grade"
            >
              Letter
            </ToggleButton>
          </ToggleButtonGroup>
          <Button onClick={onActionClick} className={classes.actionButton}>
            {action}
          </Button>
        </CardContent>
      )}
    </React.Fragment>
  );

  const ListActions = (
    <React.Fragment>
      <Box className={classes.listActions}>
        <IconButton onClick={onRefresh}>
          <RefreshIcon className={classes.icon}></RefreshIcon>
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon className={classes.icon}></DeleteIcon>
        </IconButton>
        <IconButton onClick={onAdd}>
          <AddIcon className={classes.addIcon}></AddIcon>
        </IconButton>
      </Box>
    </React.Fragment>
  );

  switch (display) {
    case DisplayOption.List:
      return (
        <Card className={classes.root}>
          <Grid container>
            <Grid item xs>
              {ContentFragment}
            </Grid>
            <Grid item>{ListActions}</Grid>
          </Grid>
        </Card>
      );
    case DisplayOption.Card:
    default:
      return <Card className={classes.root}>{ContentFragment}</Card>;
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
  onOptionChange: () => {},
  onActionClick: () => {},
  onRefresh: () => {},
  onDelete: () => {},
  onAdd: () => {},
  display: DisplayOption.Card,
  status: StatusOption.Enrolled,
  statusText: 'Enrolled - Letter',
};
