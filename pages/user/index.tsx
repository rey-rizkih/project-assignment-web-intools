import FilterView from "@components/InstantTemplate";
import InstantTemplateProvider from "@components/InstantTemplate/context";
import DetailModal from "@components/User/components/DetailModal";
import {
    COLUMNS_TABLE_USER,
    MODULE_FORMS_USER,
} from "@components/User/constants/config";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";

const Users: React.FC = () => {
    const [openDetailModal, setOpenDetailModal] = React.useState(false);
    const [userId, setUserId] = React.useState(null);

    const handleListResponseTransform = (response) => {
        let temp = response;
        temp = temp.map((item, i) => ({
            ...item,
            no: i + 1,
            dob: new DateFnsUtils().format(new Date(item.dob), "dd MMMM yyyy"),
        }));

        return temp;
    };

    const handleShowDetail = (id: number) => {
        setOpenDetailModal((prev) => !prev);
        setUserId(id);
    };

    return (
        <InstantTemplateProvider>
            <FilterView
                menuName="Users"
                elementTagPrefix="Users"
                pageTitle="User Management"
                showAddButton
                apiURL="/api/user"
                moduleTable={COLUMNS_TABLE_USER({ handleShowDetail })}
                moduleForms={MODULE_FORMS_USER}
                apiListResponseTransform={handleListResponseTransform}
                exportFilename="user"
            />
            <DetailModal
                open={openDetailModal}
                handleCloseModal={() => setOpenDetailModal(false)}
                id={userId}
            />
        </InstantTemplateProvider>
    );
};

export default Users;
