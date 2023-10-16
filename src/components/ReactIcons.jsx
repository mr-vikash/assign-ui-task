import { FaArrowUp, FaArrowDown } from "react-icons/fa"
const ReactIcons = ({ id }) => {
    switch (id) {
        case 1:
            return (
                <FaArrowUp />
            )
        case 2:
            return (
                <FaArrowDown />
            )
        case 3:
            return (
                <FaArrowDown />
            )
        case 4:
            return (
                <FaArrowUp />
            )
        default:
            return (
                <FaArrowUp />
            )

    }


};
export default ReactIcons;