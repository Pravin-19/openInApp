"use client";
import React from "react";
import style from "./Schedulecard.module.css"
import { downarrow, leftarrow } from "@/Assets/commonsvg";
function Schedulecard(){

    const datas = [
        {
            "border" : "5px solid #9BDD7C",
            "title"  : "Meeting with suppliers from Kuta Bali",
            "time"   : "14.00-15.00",
            "address" : "at Sunset Road, Kuta, Bali"
        },
        {
            "border" : "5px solid #6972C4",
            "title"  : "Check operation at Giga Factory 1",
            "time"   : "18.00-20.00",
            "address" : "at Central Jakarta"
        }
    ]
    return(
            <div className={style.chartmainDiv}>
                <div className={style.topsecDiv}>
                    <b>Today’s schedule</b>
                    <span>See All {leftarrow}</span>
                </div>

                <div className={style.schedulesDiv}>
                {datas?.map((item,id)=>{
                    return(
                        <div className={style.card} style={{borderLeft:`${item?.border}`}}>
                        <span>{item?.title}</span><br/>
                        <small>{item?.time}</small><br/>
                        <small>"{item?.address}</small>
                        </div>
                    )
                })}
                </div>
            </div>
    )
}
export default Schedulecard;