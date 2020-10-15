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

import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
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
  type: string;
  schedule: string;
  time: Array<number>;
  location: string;
};

type SectionsType = Array<SectionType>;

interface CourseCardProps {
  title: string;
  description: string;
  units: Number;
  professor: string;
  sectionId: Number;
  sectionInfo: SectionsType;
}

const useStyles = makeStyles((theme) => ({
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
}) => {
  const props = {};
  const classes = useStyles(props);

  const [gradingOption, setGradingOption] = React.useState<string | null>(
    "pnp"
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newOption: string | null
  ) => {
    setGradingOption(newOption);
    event.preventDefault();
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.header}>
        <Grid container>
          <Grid item className={classes.avatarContainer}>
            <Avatar aria-label="recipe" className={classes.avatar}>
              {units}
            </Avatar>
          </Grid>
          <Grid item xs container direction="column" justify="center">
            <Typography variant="h6" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Box className={classes.professor}>
          <Typography>{professor}</Typography>
          <Typography>
            <Typography display="inline" color="textSecondary">
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
          {sectionInfo.map(({ section, type, schedule, time, location }) => (
            <React.Fragment>
              <Grid xs={1} item>
                {section}
              </Grid>
              <Grid xs={1} item>
                {type}
              </Grid>
              <Grid xs={3} item>
                {Array.from(Array(7).keys()).map((index) => (
                  <Typography
                    component="span"
                    color={
                      time.includes(index) ? "textPrimary" : "textSecondary"
                    }
                    style={{ marginLeft: 1 }}
                  >
                    {timeStringMap[index]}
                  </Typography>
                ))}
              </Grid>
              <Grid xs={4} item>
                {schedule}
              </Grid>
              <Grid xs={3} item>
                {location}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        <Box className={classes.actions}>
          <ToggleButtonGroup
            value={gradingOption}
            exclusive
            onChange={handleAlignment}
            aria-label="grading options"
            className={classes.toggleButton}
          >
            <ToggleButton value="pnp" aria-label="pass non-pass">
              P/NP
            </ToggleButton>
            <ToggleButton value="letter" aria-label="letter grade">
              Letter
            </ToggleButton>
          </ToggleButtonGroup>
          <Button className={classes.actionButton}>Drop Course</Button>
        </Box>
      </CardContent>
    </Card>
  );
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
