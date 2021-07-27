import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Form.css'
export const Form = () => {
    const [fio, setFio] = useState("")
    const [isCorrectFio, setIsCorrectFio] = useState(false);
    const [address, setAddress] = useState("")
    const [isCorrectAddress, setIsCorrectAddress] = useState(false)
    const [userPhone, setUserPhone] = useState("")
    const [isCorrectUserPhone, setIsCorrectUserPhone] = useState(false)
    const [email, setEmail] = useState("")
    const [isCorrectEmail, setIsCorrectEmail] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const handleClick = useCallback(() => {
    
        if (fio.match(/^[а-я\s]*$/)) {
            setIsCorrectFio(true)
        } else {
            setIsCorrectFio(false)
        }
        if(userPhone.length === 11 && userPhone.match(/^[0-9]*$/)) {
            setIsCorrectUserPhone(true)
        }
        else {
            setIsCorrectUserPhone(false)
        }
        if(email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
            setIsCorrectEmail(true)
        } else {
            setIsCorrectEmail(false)
        }
        if (address) {
            setIsCorrectAddress(true)
        } else {
            setIsCorrectAddress(false)
        }
    }, [fio, address, userPhone, email])

    const renderTable = useMemo(() => {
        if (isCorrect) {
            return (
                <table>
                        <tr>
                            <td>
                                ФИО
                            </td>
                            <td>
                                {fio}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Адрес
                            </td>
                            <td>
                                {address}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Телефон
                            </td>
                            <td>
                                {userPhone}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                e-mail
                            </td>
                            <td>
                                {email}
                            </td>
                        </tr>
                    </table>
                
            )
        } else {
            return null
        }
    }

    , [isCorrect])

    useEffect(() => {
        if (
            isCorrectFio && 
            isCorrectAddress && 
            isCorrectUserPhone && 
            isCorrectEmail
        ) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    }, [isCorrectFio, isCorrectAddress, isCorrectUserPhone, isCorrectEmail]) 

    return <div className="form-wrapper">
        <div className="form">
            <div className="form__input">
                <span>ФИО: </span>
                <input className={!isCorrectFio ? "_error" : ""} placeholder="ФИО" onChange={(e) => setFio(e.target.value)}/>
            </div>
            <div className="form__input">
                <span>Адрес: </span>
                <input className={!isCorrectAddress ? "_error" : ""} placeholder="Адрес" onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div className="form__input">
                <span>Телефон: </span>
                <input className={!isCorrectUserPhone ? "_error" : ""} placeholder="Телефон" onChange={(e) => setUserPhone(e.target.value)}/>
            </div>
            <div className="form__input">
                <span>E-mail: </span>
                <input className={!isCorrectEmail ? "_error" : ""} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <button className="form__button" onClick={() => handleClick()}>Сохранить</button>
            {renderTable}
        </div>
    </div>
}