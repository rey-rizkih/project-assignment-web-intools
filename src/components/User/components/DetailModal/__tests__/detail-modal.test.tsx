import { PROPS } from "@components/User/constants/interface";
import { shallow } from "enzyme";
import React from "react";
import DetailModal from "..";

const mockDetailModalProps: PROPS = {
    id: 3,
    open: true,
    handleCloseModal: jest.fn(),
};

const mockUsersData = {
    createdAt: "2022-06-02T18:11:12.038Z",
    name: "Elisa Hyatt",
    address: "6385 Parisian Parkways",
    dob: "2021-06-24T18:37:57.483Z",
    phone: "901-600-9413 x58546",
    email: "Blaise_Conroy@hotmail.com",
    updatedAt: 1654222277,
    username: "Elisa.Hyatt3",
    id: "3",
};

let wrapper;

jest.mock("@material-ui/core", () => ({
    Modal: (props) => <div data-testid="Modal" {...props} />,
    Button: (props) => <div data-testid="Button" {...props} />,
    Grid: (props) => <div data-testid="Grid" {...props} />,
}));

jest.mock("@components/InstantTemplate/context");
jest.mock("@components/InstantTemplate");

afterEach(() => {
    jest.clearAllMocks();
});

describe("<DetailModal/>", () => {
    describe("rendering when loading ", () => {
        beforeEach(() => {
            wrapper = shallow(<DetailModal {...mockDetailModalProps} />);
        });

        it("should render <Modal/> once", () => {
            expect(wrapper.find("Modal").length).toBe(1);
        });

        it("should open modal when props.open is true", () => {
            expect(wrapper.find("Modal").prop("open")).toBe(true);
        });

        it("should close modal when props.open is false", () => {
            wrapper.setProps({ open: false });
            expect(wrapper.find("Modal").prop("open")).toBe(false);
        });

        it("should render <Loading/> once", () => {
            expect(wrapper.find("Loading").length).toBe(1);
        });
    });

    describe("rendering when loading is false ", () => {
        beforeEach(() => {
            React.useState = jest
                .fn()
                .mockReturnValueOnce([false, {}])
                .mockReturnValueOnce([mockUsersData, {}]);

            wrapper = shallow(<DetailModal {...mockDetailModalProps} />);
        });

        it("should render <Grid/>", async () => {
            expect(wrapper.find("Grid").length).toBe(20);
        });

        it("should render content correctly", () => {
            expect(wrapper.find({ children: mockUsersData.name }).length).toBe(
                1,
            );
            expect(
                wrapper.find({ children: mockUsersData.username }).length,
            ).toBe(1);
            expect(
                wrapper.find({ children: mockUsersData.address }).length,
            ).toBe(1);
            expect(wrapper.find({ children: mockUsersData.phone }).length).toBe(
                1,
            );
            expect(wrapper.find({ children: mockUsersData.email }).length).toBe(
                1,
            );
        });

        it("should render <Button/> once", () => {
            expect(wrapper.find("Button").length).toBe(1);
        });

        describe("Interactions", () => {
            it("should call handleCloseModal when button is clicked", () => {
                wrapper.find("Button").simulate("click");

                expect(
                    mockDetailModalProps.handleCloseModal,
                ).toHaveBeenCalled();
            });
        });
    });
});
