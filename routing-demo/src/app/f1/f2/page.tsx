import Link from "next/link"
export default function f2(){
    return (
    <>
    <h1>F2</h1>
    <div>
        <Link href="/f1">f1</Link>
    </div>
    <div>
        <Link href="/f1/f4">f4</Link>
    </div>
    </>)
}