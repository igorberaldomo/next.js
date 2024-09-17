type Product ={
    title: string
    price: number
    description: string
}

export default async function ProductsPage(){
    const response = await fetch('http://localhost:3001/products',{next:{revalidate:10}})
    const products = await response.json()
    return (
        <ul className="space-y-4 p-4">
            {products.map((product: Product) => (
                <li
                key={product.title}
                className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                >
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p>{product.description}</p>
                    <div className="text-lg font-medium">R$: {product.price}</div>

                </li>
            ))}      
        </ul>
    )
}