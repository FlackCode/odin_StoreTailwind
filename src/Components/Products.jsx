import products from './ProductsArray'
export default function Products() {

    return (
        <div className=" bg-gray-950 py-16 lg:px-24 xsm: px-8">
            <div className="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 h-full gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-gray-800 rounded-2xl flex flex-col p-2">
                        <img src={product.image} className='w-full rounded-2xl' />
                        <div className='flex flex-row justify-between items-end'>
                            <h1 className="text-white font-bold text-xl">{product.name}</h1>
                            <p className='text-white font-semibold select-none hover:cursor-pointer'>Add to cart</p>
                        </div>
                        <p className='text-white font-semibold text-base'>Price: ${product.price}</p>
                        <p className="text-white font-semibold text-base">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}