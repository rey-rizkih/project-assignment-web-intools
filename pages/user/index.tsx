import { FC } from "react";
import DateFnsUtils from "@date-io/date-fns";
import InstantTemplateProvider from "@components/InstantTemplate/context";
import FilterView from "@components/InstantTemplate";
import { COLUMNS_TABLE_USER, MODULE_FORMS_USER } from "@components/User/config";

const Users: FC = () => {
    const handleListResponseTransform = (response) => {
        let temp = response;
        temp = temp.map((item, i) => ({
            ...item,
            no: i + 1,
            dob: new DateFnsUtils().format(new Date(item.dob), "dd MMMM yyyy"),
        }));

        return temp;
    };

    return (
        <InstantTemplateProvider>
            <FilterView
                menuName="Users"
                elementTagPrefix="Users"
                pageTitle="User Management"
                showAddButton
                apiURL="/api/user"
                moduleTable={COLUMNS_TABLE_USER}
                moduleForms={MODULE_FORMS_USER}
                apiListResponseTransform={handleListResponseTransform}
                exportFilename="user"
            />
        </InstantTemplateProvider>
    );
};

export default Users;
