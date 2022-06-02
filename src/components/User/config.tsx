import { FieldTypes } from "@components/TemplateComponent/constants/config";

export const COLUMNS_TABLE_USER = [
    { title: "No.", dataIndex: "no" },
    { title: "Name", dataIndex: "name" },
    { title: "Date of Birth", dataIndex: "dob" },
    { title: "Email", dataIndex: "email" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Actions", dataIndex: "actions" },
];

export const MODULE_FORMS_USER = [
    {
        type: FieldTypes.TEXT,
        label: "Name",
        dataIndex: "name",
    },
    {
        type: FieldTypes.DATEPICKER,
        label: "Date of Birth",
        dataIndex: "dob",
    },
];
