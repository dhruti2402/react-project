
import React, {
    useRef,
    useImperativeHandle,
    forwardRef
} from "react";

const UseImperativeHandle = forwardRef((props, ref) => {

    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        },

        clearInput: () => {
            inputRef.current.value = "";
        }
    }));

    return (
        <input
            type="text"
            ref={inputRef}
            placeholder="Enter your name"
        />
    );
});

export default UseImperativeHandle;
