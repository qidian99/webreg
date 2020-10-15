import * as React from "react";
import { Button, Typography, Card, CardContent, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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

type SectionInfoType = [
  {
    section: string;
    type: string;
    schedule: string;
    time: Array<Number>;
    location: string;
  }
];

interface CourseCardProps {
  title: string;
  description: string;
  units: Number;
  professor: string;
  sectionId: Number;
  sectionInfo: SectionInfoType;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: "#EAEAEA",
    color: '#000',
  },
}));
export const CourseCard: React.FC<CourseCardProps> = ({ title, description, units }) => {
  const props = {};
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item>
            <Avatar aria-label="recipe" className={classes.avatar}>
              {units}
            </Avatar>
          </Grid>
          <Grid item xs container direction="column">
            <Typography color="textPrimary">{title}</Typography>
            <Typography color="textSecondary">{description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Button color="primary">Drop Course</Button>
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
  sectionInfo: [{
    section: "A00",
    type: "LE",
    schedule: "3:30p - 4:50p",
    time: [1,3,5],
    location: "PCYHN 106",
  }]
};

