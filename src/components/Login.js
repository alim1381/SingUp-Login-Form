import React, { useEffect, useState } from 'react'
import { Validation } from './validation'
import { notify } from './notify';
import { ToastContainer } from 'react-toastify';
import styles from './Singup.module.css';
import { Link } from 'react-router-dom';

export default function Login() {

    const [data , setData] = useState({
        email : "",
        password : "",
        
    })
    const [errors , setErrors] = useState({});
    const [showErr , setShowErr] = useState({});

    const changeHandler = event => {
        setData({
            ...data , [event.target.name] : event.target.value
        })
  
    }
    const focusHandler = e => {
        if (e.target.name !== "checkbox") {
            setShowErr({...showErr , [e.target.name] : true})

        }
    }

    useEffect(() => {
        setErrors(Validation(data , "login"))
    } , [data ])
    
    const subHandler = e => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            notify("SUCCESS" , "Singin Success")
            
        } else {
            notify("ERROR" , "Wow a Problem !")
            setShowErr({
                email : true,
                password : true,
                
            })
            
        }
    }

    return (
    <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={subHandler}>
            <h1 className={styles.header}>Login</h1>
            <div className={styles.inputDiv}>
                <label>Email</label>
                <input 
                    className={(errors.email && showErr.email) ? styles.inputUncomplate : styles.inputComp}
                    type="email" 
                    name='email' 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                {errors.email && showErr.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.inputDiv}>
                <label>Password</label>
                <input 
                    className={(errors.password && showErr.password) ? styles.inputUncomplate : styles.inputComp}
                    type="password" 
                    name='password' 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                {errors.password && showErr.password && <span>{errors.password}</span>}
            </div>
            

            <div className={styles.buttonContainer}>
                <Link to="/singup">Sing up</Link>
                <button type='submit'>Login</button>
            </div>
        </form>
        <ToastContainer />

    </div>
  )
}
