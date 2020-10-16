import * as React from "react";
declare type SectionType = {
    section: string;
    type?: string;
    schedule: string;
    time: Array<number> | string;
    location: string;
};
declare type SectionsType = Array<SectionType>;
declare enum DisplayOption {
    Card = "card",
    List = "list"
}
declare enum StatusOption {
    Enrolled = "enrolled",
    Waitlist = "waitlist",
    Planned = "planned"
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
export declare const CourseCard: React.FC<CourseCardProps>;
export {};
