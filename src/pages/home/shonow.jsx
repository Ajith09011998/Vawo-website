import { Button } from '@nextui-org/button'

function ShopNow() {

    const products = [
        { id: 1, name: "Elegant Watch", price: 199.99, image: "https://kzmk0uu2bm958l3dtf16.lite.vusercontent.net/placeholder.svg?height=200&width=200" },
        { id: 2, name: "Leather Wallet", price: 49.99, image: "https://kzmk0uu2bm958l3dtf16.lite.vusercontent.net/placeholder.svg?height=200&width=200" },
        { id: 3, name: "Sunglasses", price: 79.99, image: "https://kzmk0uu2bm958l3dtf16.lite.vusercontent.net/placeholder.svg?height=200&width=200" },
    ]

    return (
        <div className='max-w-6xl mx-auto px-4'>
            <h1 className='text-3xl text-center font-bold mb-5'>Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col gap-3">
                        <div className="flex-grow">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-md"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-bold">{product.name}</p>
                                <p className="text-md font-semibold">${product.price.toFixed(2)}</p>
                            </div>
                            <Button>Shop Now</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ShopNow