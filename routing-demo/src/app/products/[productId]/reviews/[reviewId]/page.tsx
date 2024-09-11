import { notFound } from "next/navigation";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
export default function reviewDetail(
    { params }:
     { params: {
        productId: string;
        reviewId: string; } 
    }) {
    const random = getRandomInt(2)
    if (parseInt(params.reviewId) > 1000){
       notFound()
    }
    // exemplificando tratamento de erro
    // if (random ===1){
    //     throw new Error("Error loading review")
    // }
    return <h1>Review {params.reviewId} for product {params.productId} </h1>
}