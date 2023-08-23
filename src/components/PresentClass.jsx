import React from 'react'

const PresentClass = ({data}) => {

    data.map((row)=>{
        row.map((sub)=>{
            if (sub.subject === "SUNDAY") {
                console.log(sub)
                return (
                    <div>{sub.subject}</div>
                )
            }
        })
    })

}

export default PresentClass