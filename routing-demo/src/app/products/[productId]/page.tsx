// todas as paginas no browser recebem {parametros} como prop, você passa esses parametros para a função para desestruturar os dados, como estamos usando typescript precisamos definir o tipo de parametro. usamos {params:{productId:string}} para passar que parametros é um objeto e que a key é productId tem o tipo de string
export default function Productdetails({params}:{params:{productId:string}}){
    return <h1>Product details {params.productId}</h1>
}
