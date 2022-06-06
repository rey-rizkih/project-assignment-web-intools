import { PROPS } from "@components/User/constants/interface";
import { mount, shallow } from "enzyme";
import DetailModal from "..";

const mockDetailModalProps: PROPS = {
    id: 1,
    open: true,
    handleCloseModal: () => {},
};

let wrapper;

jest.mock("@material-ui/core", () => ({
    Modal: () => <div data-testid="Modal" />,
}));

describe("<DetailModal/> rendering", () => {
    beforeEach(() => {
        wrapper = shallow(<DetailModal {...mockDetailModalProps} />);
    });

    it("should render <Modal/>", () => {
        expect(wrapper.find("Modal").length).toBe(1);
    });

    it("should open modal when props.open is true", () => {
        expect(wrapper.find("Modal").prop("open")).toBe(true);
    });

    it("should close modal when props.open is false", () => {
        wrapper.setProps({ open: false });
        expect(wrapper.find("Modal").prop("open")).toBe(false);
    });
});
