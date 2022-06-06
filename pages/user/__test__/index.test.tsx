import { shallow } from "enzyme";
import Users from "..";

jest.mock("@components/InstantTemplate/context", () => {
    const InstantTemplateProvider = () => <div data-testid="InstantTemplate" />;
    return InstantTemplateProvider;
});

jest.mock("@components/InstantTemplate", () => {
    const FilterView = () => <div data-testid="InstantTemplate" />;
    return FilterView;
});

let wrapper;

describe("<Users/> rendering", () => {
    beforeEach(() => {
        wrapper = shallow(<Users />);
    });

    it("should render <InstantTemplateProvider/>", () => {
        expect(wrapper.find("InstantTemplateProvider").length).toBe(1);
    });

    it("should render <FilterView/>", () => {
        expect(wrapper.find("FilterView").length).toBe(1);
    });
});
