import * as React from "react";
declare type SectionInfoType = [{
    section: string;
    type: string;
    schedule: string;
    time: Array<Number>;
    location: string;
}];
interface CourseCardProps {
    title: string;
    description: string;
    units: Number;
    professor: string;
    sectionId: Number;
    sectionInfo: SectionInfoType;
}
export declare const CourseCard: React.FC<CourseCardProps>;
export {};
