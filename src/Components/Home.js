import React from 'react'
import './Home.css'
import { useNavigate } from "react-router-dom";


function Home() {
    let navigator = useNavigate()
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [isValid, setIsValid] = React.useState(false)
    const [isValidName, setIsValidName] = React.useState(false)
    const [isValidNo, setIsValidNo] = React.useState(false)

    let isVal = false

    function submit() {
        // let name = document.getElementById("user_name").value
        // let description = document.getElementById("description").value
        if (name === '') {
            alert("Please Enter the name")
            isVal = false
        }
        else {
            isVal = true
        }
        if (number === 0 || number.length < 10) {
            alert("Please Enter the Valid Phone No")
            isVal = false
        }
        else {
            isVal = true
        }

        // window.sessionStorage.setItem("name", name)
        // window.sessionStorage.setItem("description", description)
        // window.location.href = "./Gif";
        if (isVal) {
            navigator('/Gif', { state: { 'name': name, 'des': number } })
            console.log("submit")
        }
        else {
            console.log("not submit" + isValidName + " " + isValidNo)
        }
    }
    return (
        <div className='mainBackGround'>
            <div className='home vh-100 container '>
                <div 
                className="d-flex align-items-center  justify-content-center h-100"
                >
                    <div className='formCustom boxImage '>
                        {/* col-md-12 */}
                    </div>
                    <div className="formCustom " id="formId">
                        {/* col-md-12 */}
                        {/* <form action="" method="post"> */}
                        <input type="text" onChange={(e) => {
                            if (e.target.value.length == 20)
                                return false;

                            setName(e.target.value)
                        }} value={name} className="form-control inputCustomName" id="user_name" placeholder="Enter your store name" />
                        {/* <br /> */}
                        <input type="number" size="10" maxLength="10" onChange={(e) => {
                            if (e.target.value.length == 11)
                                return false;
                            const re = /^[0-9\b]+$/;
                            if (re.test(e.target.value)) {
                                setNumber(e.target.value)
                            }
                            else {
                                setNumber('')
                            }
                        }}  value={number}
                            maxlength="10" className="form-control inputCustomNo" rows="1" cols="10" id="description"
                            placeholder="Enter your phone number"></input>
                        {/* <br /> */}
                        {/* <br /> */}
                        <div className="col-md-12 text-center">
                            <button onClick={submit} type="submit" className="submitButton ">Submit</button>
                            {/* <button onclick="clearField()" className="btn btn-warning">Clear</button> */}
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home