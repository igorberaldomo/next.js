"use client"

import { useState } from "react"



export default function dashboardPage() {
    const [name, setName] = useState("")
    console.log('Client component')
    return (
        <div>
            <h1>Dashboard Page</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name}!</p>
        </div>
    )
}