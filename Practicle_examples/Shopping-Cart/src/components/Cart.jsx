import React from 'react'

const Cart = ({ cart, dispatch }) => {

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <section className="mt-12 rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">
                Your Cart ({totalItems} items)
            </h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">
                    Your cart is empty.
                </p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="h-20 w-20 object-contain"
                                    />

                                    <div>
                                        <h3 className="font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-500">
                                            ${item.price} × {item.quantity}
                                        </p>

                                        <p className="font-medium">
                                            Subtotal: $
                                            {(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "DECREMENT",
                                                id: item.id,
                                            })
                                        }
                                        className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                                    >
                                        -
                                    </button>

                                    <span className="font-semibold">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "INCREMENT",
                                                id: item.id,
                                            })
                                        }
                                        className="rounded bg-gray-200 px-3 py-1 hover:bg-gray-300"
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE",
                                                id: item.id,
                                            })
                                        }
                                        className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <h2 className="text-2xl font-bold text-blue-700">
                            Total: ${total.toFixed(2)}
                        </h2>

                        <button
                            onClick={() => dispatch({ type: "CLEAR" })}
                            className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}

export default Cart;