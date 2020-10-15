import * as React from "react";
declare type SectionType = {
    section: string;
    type?: string;
    schedule: string;
    time: Array<number> | string;
    location: string;
};
declare type SectionsType = Array<SectionType>;
interface CourseCardProps {
    title: string;
    description: string;
    units: Number;
    professor: string;
    sectionId: Number;
    sectionInfo: SectionsType;
}
export declare const CourseCard: React.FC<CourseCardProps>;
export {};
