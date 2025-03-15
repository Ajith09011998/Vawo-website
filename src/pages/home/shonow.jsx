import { Button } from '@nextui-org/button'
import Shop1 from '../../assets/shop/shop-1.jpg';
import Shop2 from '../../assets/shop/shop-2.jpg';
import Shop3 from '../../assets/shop/shop-3.jpg';

function ShopNow() {

    const products = [
        { id: 1, name: "MADI kATHI", price: 400, image: Shop1 },
        { id: 2, name: "DASA PARAI", price: 6000, image: Shop2 },
        { id: 3, name: "PAYIRCHI VAAL", price: 850, image: Shop3 },
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
                                className="w-full h-[530px] object-cover rounded-md"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-bold">{product.name}</p>
                                <p className="text-md font-semibold">Rs.{product.price.toFixed(2)}</p>
                            </div>
                            <Button className='font-semibold'>Shop Now</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ShopNow