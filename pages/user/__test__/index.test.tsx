import { shallow } from "enzyme";
import React from "react";
import Users from "..";

jest.mock("@components/InstantTemplate/context");
jest.mock("@components/InstantTemplate");
jest.mock("@components/User/components/DetailModal");

let wrapper;

describe("<Users/>", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("<Users/> rendering correctly", () => {
        beforeEach(() => {
            wrapper = shallow(<Users />);
        });

        it("should render <InstantTemplateProvider/> once", () => {
            expect(wrapper.find("InstantTemplateProvider").length).toBe(1);
        });

        it("should render <InstantTemplate/> once", () => {
            expect(wrapper.find("InstantTemplate").length).toBe(1);
        });

        it("should render <DetailModal/> once", () => {
            expect(wrapper.find("DetailModal").length).toBe(1);
        });
    });

    describe("<User/> rendering when openDetailModal is true", () => {
        beforeEach(() => {
            React.useState = jest
                .fn()
                .mockReturnValueOnce([true, {}])
                .mockReturnValueOnce([1, {}]);

            wrapper = shallow(<Users />);
        });

        it("should <DetailModal/> props open is true", () => {
            expect(wrapper.find("DetailModal").prop("open")).toBe(true);
        });
    });
});
