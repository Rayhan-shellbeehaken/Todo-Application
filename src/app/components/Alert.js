import React, { useState } from 'react'

export default function Alert({type, message}) {
    const alertType = {
        "SUCCESS" : {
            "bg" : "bg-green-100",
            "border" : "border-green-500"
        },
        "FAILED" : {
            "bg" : "bg-red-100",
            "border" : "border-red-500"
        }
    }

    let alert;

    type === "SUCCESS" ? alert = alertType.SUCCESS : alert = alertType.FAILED;

    return (
        <div className={`absolute top-[5vh] ${alert.bg} w-[15vw] py-[1.5vh] text-center text-lg rounded-lg
                        ${alert.border} border-2`}>
            {message}
        </div>
    )
}
