import React, { useEffect } from 'react'
import { useState } from 'react'

const Products = ({dispatch}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {

        async function getProducts() {

            try {
                const response = await fetch(
                    "https://dummyjson.com/products"
                )

                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();
                setProducts(data.products)

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        getProducts();

    }, [])

    if (loading) {
        return <p className="text-center text-lg">Loading products...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }


    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <section>
            <h2 className="mb-5 text-2xl font-semibold">
                Products
            </h2>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-6 w-full rounded-lg border border-gray-300 bg-white p-3 outline-none 
                focus:border-blue-500"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-xl bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="mb-3 h-48 w-full object-contain"
                        />

                        <h3 className="mb-2 font-semibold">
                            {product.title}
                        </h3>

                        <p className="mb-4 text-lg font-bold text-blue-700">
                            ${product.price}
                        </p>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "ADD",
                                    product,
                                })
                            }
                            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition
                             hover:bg-blue-700"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}

                {filteredProducts.length === 0 && (
                    <p className="text-gray-500">No products found.</p>
                )}
            </div>
        </section>
    )
}

export default Products