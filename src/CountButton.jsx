import {MinusIcon, PlusIcon} from "@radix-ui/react-icons";

// eslint-disable-next-line react/prop-types
export default function CountButton ({ type, setCount, locked }) {
    const handleClick = (event) => {
        setCount((prev) => {
        if (type === "mines") {
            const newCount = prev - 1;
            if (newCount < 0) {
                return 0;
            }
            return newCount;
        } else {
            const newCount = prev + 1;
            if (newCount > 5) {
                return 5;
            }
            return newCount;
        }
        });
        event.currentTarget.blur();
    };
    return (
        <button disabled={locked} onClick={handleClick} className="count-btn">
            {type === 'mines' && <MinusIcon className="count-btn-icon"/>}
            {type === 'plus' && <PlusIcon className="count-btn-icon" />}
        </button>
    )}

