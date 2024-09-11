import Link from "next/link"
export default function Products(){
    const productId =100
    return (
        <>
        <Link href='/'>Home</Link>
        <h1>My products list</h1>
        <h2>
            <Link href='/products/1'>product 1</Link>
        </h2>
        <h2>
            <Link href='/products/2'>product 2</Link>
        </h2>
        <h2>
            <Link href='/products/3'>product 3</Link>
        </h2>
        <h2>
            <Link href={`products/${productId}`}>product {productId}</Link>
        </h2>
        </>
    )
}