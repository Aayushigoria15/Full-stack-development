// useEffect :- function side effect (api call inter)
// re-redner compoent display one time
// useEffect : - 1) fucntion logic api /data 
// 2) paramter optional / 

import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [name, setname] = useState("IUC")

    // 1) re- rerding
    // useEffect(()=>{
    //     console.log("hello this reder data")
    //     return(()=>{
    //         console.log("Hello out of render")
    //     })
    // })

    // 2) api data render ing
    // useEffect(()=>{
    //     console.log("hello this reder data")
    //         return(()=>{
    //             console.log("Hello out aof render")
    //         })
    // },[])

    // 3) state via data

    useEffect(() => {
        console.log("hello this reder data")
        return (() => {
            console.log("Hello out aof render")
        })
    }, [name])



    return (
        <div>
            <h1>Hello This USeEffect call</h1>

            <h1>hello name :- {name}</h1>

            <button onClick={() => setname("name data")}>Change name</button>
        </div>
    )
}

export default UseEffect