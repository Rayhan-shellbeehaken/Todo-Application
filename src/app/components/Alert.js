"use client"
import React from 'react'
import { useAppContext } from '../store/store';

export default function Alert() {
    const {alert} = useAppContext();
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

    let AlertType;

    alert.type === "SUCCESS" ? AlertType = alertType.SUCCESS : AlertType = alertType.FAILED;

    return (
        <>
            {alert.visible && 
                <div className={`absolute top-[10vh] ${AlertType.bg} w-[15vw] py-[1.5vh] text-center text-lg rounded-lg
                            ${AlertType.border} border-2`}>
                    {alert.message}
                </div>
            }
            
        </>
        
    )
}
