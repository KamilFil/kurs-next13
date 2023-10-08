"use client"
import { type ReactNode, useState } from "react"

export const ProductCounter = ({ children} : {children: ReactNode}) => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
              <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
              <input readOnly value={counter}
              className="border border-slate-200" min={0}/>
            <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
          {children}
        </div>
    )
}