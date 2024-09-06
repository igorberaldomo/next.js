export default function Docs({params}:{params:{slug:string[];}}) {
    if (params.slug?.length === 2){
        return (<h1>
            viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>)
    }else if (params.slug?.length === 1){
        return (<h1>
            viewing docs for feature {params.slug[0]}
        </h1>)
    }
    // para que seja lida a pagina 'home/docs/' você tem que renomear [..slug] para [[..slug]] e passar params.slug para opcional colocando ? entre slug e .lenght ficando assim params.slug?.lenght
    return (<h1>  Docs home page </h1>)
}