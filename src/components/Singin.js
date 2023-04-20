import React, { useEffect, useState } from 'react'
import { Validation } from './validation'
import { notify } from './notify';
import { ToastContainer } from 'react-toastify';
import styles from './Singin.module.css';

export default function Singin() {

    const [data , setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        checkbox : false,
    })
    const [errors , setErrors] = useState({});
    const [showErr , setShowErr] = useState({});

    const changeHandler = event => {

        if (event.target.name === "checkbox") {
            setData({
                ...data , [event.target.name] : event.target.checked
            })
        } else {
            setData({
                ...data , [event.target.name] : event.target.value
            })
        }
        
    }
    const focusHandler = e => {
        console.log(typeof(e.target.name));
        if (e.target.name !== "checkbox") {
            setShowErr({...showErr , [e.target.name] : true})

        }
    }

    useEffect(() => {
        setErrors(Validation(data))
    } , [data ])
    
    const subHandler = e => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            notify("SUCCESS" , "Singin Success")
            
        } else {
            notify("ERROR" , "Wow a Problem !")
            setShowErr({
                name : true,
                email : true,
                password : true,
                confirmPassword : true,
                checkbox : true,
            })
            
        }
    }

    return (
    <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={subHandler}>
            <h1 className={styles.header}>Singin</h1>
            <div className={styles.inputDiv}>
                <label>Name</label>
                <input 
                    className={(errors.name && showErr.name) ? styles.inputUncomplate : styles.inputComp}
                    type="text" 
                    name='name' 
                    value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                {errors.name && showErr.name && <span>{errors.name}</span>}
            </div>
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
            <div className={styles.inputDiv}>
                <label>Confirm Password</label>
                <input 
                    className={(errors.confirmPassword && showErr.confirmPassword) ? styles.inputUncomplate : styles.inputComp}type="password" 
                    name='confirmPassword' 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler}/>
                {errors.confirmPassword && showErr.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <div className={styles.checkContainer}>
                <div className={styles.checkItem}>
                    <label>Accept the rules</label>
                    <input 
                        type="checkbox" 
                        name='checkbox' 
                        value={data.checkbox} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>

                </div>
                {errors.checkbox && showErr.checkbox && <span>{errors.checkbox}</span>}
            </div>

            <div className={styles.buttonContainer}>
                <a href="#">Login</a>
                <button type='submit'>Submit</button>
            </div>
        </form>
        <ToastContainer />

    </div>
  )
}
