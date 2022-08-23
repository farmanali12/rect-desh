import React, { useEffect, useState } from 'react'
import "./Sectionapi.css"
function Sectionapi(){
    const[data, setMydata] = useState([])
    useEffect(() => {
        fetch("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01")
            .then((responce) => responce.json())
            .then((datas) => {
                console.log(datas)
                setMydata(datas)
            }).catch((err)=>{
                console.log(err)
            })
    }, [])
    return (
        <div className='contsection2'>
            <div className='contoption'>
                <div>
                    <label htmlFor="cars">Show</label>
                    <select name="cars" id="cars">
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">100</option>
                    </select>
                    <span>Entries</span>
                </div>
                <div>
                    <input type="date" />
                </div>
            </div>
            <div className='tables'>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Day installs</th>
                            <th>plateform</th>
                            <th>Day Unistalls</th>
                            <th>Plateform</th>
                            <th>churn Rate</th>
                            <th>plateform</th>
                            <th>churn Plateform</th>
                        </tr>
                       {/* {
                        data.map((val)=>{
                            return(
                           <tr>
                            <td>{val.android_churn}</td>
                           </tr>
                            )
                        })
                       } */}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sectionapi