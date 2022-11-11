import React from 'react'
import logo from '../assets/logo.png'
import {BiHomeAlt, BiGridAlt, BiCreditCardAlt, BiUser, BiCalculator} from 'react-icons/bi'
import {RiSettings5Line} from 'react-icons/ri'

const Sidebar = () => {
    const menu = [
        {name:"Dashboard", icon:<BiHomeAlt />},
        {name:"Report", icon:<BiCreditCardAlt />},
        {name:"Contacts", icon:<BiUser />},
        {name:"Loan Calculator", icon:<BiCalculator />},
        {name:"Account", icon:<BiGridAlt />},
        {name:"Settings", icon:<RiSettings5Line />},
    ]
  return (
    <div className="h-screen border-r border-gray-200 w-80 px-9 space-y-24">
        <div className="flex flex-row items-center pt-9">
            <img src={logo} alt="logo" className="w-9 h-9 mr-3"/>
            <h1>SULTAN BANTILAN</h1>
        </div>
        <div className="space-y-24">
            <ul>
                {
                    menu.map((val, index) => {
                        return (
                            <li key={index} className="mb-7 flex flex-row items-center text-gray-500">
                                <div className="mr-3">{val.icon}</div>
                                <div>{val.name}</div>
                            </li>
                        ) 
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar