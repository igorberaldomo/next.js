import { cookies } from "next/headers"

export default function aboutPage(){
    const cookieStore = cookies()
    const theme = cookieStore.get("theme")
    console.log(theme)
    console.log('Server component')
    return <h1>About Page{new Date().toLocaleTimeString()}</h1>
}