import * as React from "react";
import {
  CalendarCard,
  CalendarCardBody,
  CalendarCardHeader,
  CalendarCardTitle,
} from "styled/index";
import { calculateCardPosition } from "util/index";

interface CalendarCardProps {
  startTime: string;
  endTime: string;
  dayOfWeek: number;
  type: string;
  title: string;
  location: string;
  datePrefix: string;
  focused?: Boolean;
}


// startTime / endTime format: hh:mm
// dayOfWeek format: [1,7]
// datePrefix format: yyyy-mm-ddT
const CalendarCourseCard: React.FC<CalendarCardProps> = ({
  startTime,
  endTime,
  dayOfWeek,
  type,
  title,
  location,
  datePrefix = "2020-10-20T",
  focused = false,
}) => (
  <CalendarCard
    focused={focused}
    style={{
      ...calculateCardPosition(startTime, endTime, dayOfWeek, datePrefix),
    }}
  >
    <CalendarCardHeader>{type}</CalendarCardHeader>
    <CalendarCardBody>
      <CalendarCardTitle>{title}</CalendarCardTitle>
      <div>{location}</div>
    </CalendarCardBody>
  </CalendarCard>
);


CalendarCourseCard.defaultProps = {
  datePrefix: "2020-06-06T",
  startTime: "10:00:00",
  endTime: "10:50:00",
  dayOfWeek: 1,
  type: "DI",
  title: "CSE 123",
  location: "PCYNH 112",
};

export default CalendarCourseCard;
