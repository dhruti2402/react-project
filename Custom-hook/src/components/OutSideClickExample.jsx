import React from 'react'
import { useState , useRef} from 'react'
import useOutsideClick from '../hooks/useOutsideClick'

const OutSideClickExample = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuRef = useRef(null);

    useOutsideClick(menuRef, () => {
        setIsOpen(false);
    });


    return (
        <div>

            <h1>Outside Click Example</h1>

            <button onClick={() => setIsOpen(!isOpen)}>
                Open Menu
            </button>

            {isOpen && (
                <div
                    ref={menuRef}
                    style={{
                        border: "1px solid black",
                        padding: "20px",
                        width: "200px",
                        marginTop: "10px"
                    }}
                >
                    <h3>Menu</h3>

                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            )}

        </div>
    );

}

export default OutSideClickExample