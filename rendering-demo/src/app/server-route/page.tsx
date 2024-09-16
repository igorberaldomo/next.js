import { serverSideFunction } from "../utils/server-utils";
import ImageSlider from "../@components/imageSlider"
export default function ServerRoutePage() {
    const result = serverSideFunction()
    return (
    <div>
        <div>Server rout page</div>
        <p>{result}</p>
        <ImageSlider/>
    </div>
    );
}