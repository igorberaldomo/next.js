// todas as paginas no browser recebem {parametros} como prop, você passa esses parametros para a função para desestruturar os dados, como estamos usando typescript precisamos definir o tipo de parametro. usamos {params:{productId:string}} para passar que parametros é um objeto e que a key é productId tem o tipo de string
import { Metadata } from "next"
type Props = {
    params: {
        productId: string
    }
}
export const generateMetadata = async ({params,}: Props): Promise<Metadata>=> {
    const title = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iphone ${params.productId}`)
        },100)
    })
    return {
        title: `Product ${params.productId}`
    }
}


export default function Productdetails({params}:Props) {
    return <h1>Product details {params.productId}</h1>
}
