import { FieldTypes } from "@components/TemplateComponent/constants/config";
import type { ModuleTable } from "@components/TemplateComponent/constants/interface";

export const COLUMNS_TABLE_JOB: ModuleTable[] = [
    { dataIndex: "title", title: "Title" },
    { dataIndex: "startDate", title: "Start Date" },
    { dataIndex: "endDate", title: "End Date" },
    { dataIndex: "actions", title: "Actions" },
];

export const MODULE_FORMS_JOB = [
    {
        type: FieldTypes.TEXT,
        label: "Title",
        dataIndex: "title",
    },
    {
        type: FieldTypes.DATEPICKER,
        label: "Start Date",
        dataIndex: "startDate",
    },
    {
        type: FieldTypes.DATEPICKER,
        label: "End Date",
        dataIndex: "endDate",
    },
];
