import products from './ProductsArray'
import { ShoppingContext } from '../context/ShoppingContext'
import { useContext } from 'react'
export default function Products() {
    const { addToCart, cartItems } = useContext(ShoppingContext)
    
    return (
        <div className=" bg-black py-16 lg:px-24 xsm: px-8 border-b">
            <div className="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 h-full gap-6">
                {products.map((product) => {
                    const cartItemsAmount = cartItems[product.id]
                    return (
                        <div key={product.id} className="bg-black border-2 rounded-2xl flex flex-col items-center gap-4 justify-between p-2 shadow-white shadow-sm">
                            <img src={product.image} className='w-64 h-64 rounded-2xl flex justify-center' />
                            <div>
                                <div className='flex flex-row justify-between items-end'>
                                    <h1 className="text-white font-bold text-lg">{product.name}</h1>
                                    <p className='text-white font-semibold select-none hover:cursor-pointer' 
                                    onClick={() => addToCart(product.id)}>Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</p>
                                </div>
                                <p className='text-white font-semibold text-base'>Price: ${product.price}</p>
                                <p className="text-white font-semibold text-base">{product.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}