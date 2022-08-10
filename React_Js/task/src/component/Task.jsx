import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Task = () => {
    const [showEmailPhone, setShowEmailPhone] = useState(false);
    const [userDetails, setUserDetails] = useState({
        first_name: "",
        last_name: "",
        telephone: "",
        email: "",
        dob: "",
        visitor_id: ""
    })
    const [dob, setdob] = useState({
        dayOfBirth: "",
        monthOfBirth: "",
        yearOfBirth: ""
    })
    const [userDetailsSubmitted, setuserDetailsSubmitted] = useState(false);
    const [isPrevAddress, setIsPrevAddress] = useState(null);
    const [addresses, setaddresses] = useState([
        {
            Addressline1: "",
            Addressline2: "",
            Addressline3: ""
        }
    ])
    const [isUserExistError, setisUserExistError] = useState("");
    const [valueSubmittedError, setvalueSubmittedError] = useState("");
    const [addressOptions, setaddressOptions] = useState(true);
    const [userId, setuserId] = useState(null);
    const [errors, seterrors] = useState({
        telephone: "",
        email: ""
    })
    let headerOptions = {
        headers: {
            Authorization: 'Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28'
        }
    }
    let payLoad = {
        "ip_address": "90.194.40.83",
        "device_type": "Android",
        "browser_type": "Chrome",
        "user_agent": "Mozilla/5.0 (Linux; Android 10; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36"
    }

    useEffect(() => {
        let api_url = "https://dev.api.klaim.yousted.org/api/visitor/store";
        axios.post(api_url, payLoad, headerOptions).then(res => {
            let newUser = { ...userDetails }
            newUser.visitor_id = res.data.data.visitorId;
            setUserDetails(newUser)
        })
    }, [])

    const hanldeChange = (e) => {
        console.log(e.target.value)
        let newUser = { ...userDetails }
        newUser[e.target.name] = e.target.value
        setUserDetails(newUser)
    }

    const handleDOBChange = (e) => {
        let newDob = { ...dob }
        newDob[e.target.name] = e.target.value
        setdob(newDob)
    }

    let validate = (newUserDetails) => {
        let isValid = true;
        let errorsObj = { ...errors }
        for (let a in newUserDetails) {
            if (a != "email" && a !== "telephone") {
                if (newUserDetails[a] == "") {
                    isValid = false
                }
            } else if (a == "email") {
                var emailPattern = /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;
                if (emailPattern.test(newUserDetails[a])) {
                    errorsObj[a] = ""
                } else {
                    errorsObj[a] = "Invalid Email .. "
                }
            } else if (a == "telephone") {
                var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
                if (pattern.test(newUserDetails[a])) {
                    errorsObj[a] = ""
                } else {
                    errorsObj[a] = "Mobile No is Invalid"
                }
            }

        }
        seterrors(errorsObj)
        return isValid
    }

    const checkDuplicate = (newUserDetails) => {
        if(validate(newUserDetails)){
            var api_url = "https://dev.api.klaim.yousted.org/api/duplicate-check";
            let user = {
                email: userDetails.email,
                telephone: userDetails.telephone
            }
            axios.post(api_url, user, headerOptions).then((res) => {
                if (res.data.status == "Success") {
                        setisUserExistError("")
                        let api_url = "https://dev.api.klaim.yousted.org/api/user/store";
                        axios.post(api_url, newUserDetails, headerOptions).then((res) => {
                            console.log(res.data.data.userId)
                            setuserId(res.data.data.userId)
                            setuserDetailsSubmitted(true)
                            setvalueSubmittedError("")
    
                        })
                    
                } else {
                    setisUserExistError(res.data.response)
                }
            })
        }
       
    }

    const handleSubmit = () => {
        let newUserDetails = { ...userDetails }
        newUserDetails.dob = dob.dayOfBirth + "/" + dob.monthOfBirth + "/" + dob.yearOfBirth
        console.log(newUserDetails)
        checkDuplicate(newUserDetails)
    }

    const handleAddress = (address) => {
        setIsPrevAddress(address)
        setaddressOptions(false)
    }

    const addAddress = () => {
        let addressObj = {
            Addressline1: "",
            Addressline2: "",
            Addressline3: ""
        }
        let newAddress = [...addresses]
        newAddress.push(addressObj)
        setaddresses(newAddress)
    }

    const handleAddressChange = (i, e) => {
        let allAddresses = [...addresses]
        allAddresses[i][e.target.name] = e.target.value
        setaddresses(allAddresses)
    }

    const resetAll = () => {
        window.location.href = "/"
    }
    const handleSubmitAddresses = () => {
        let api_url = "https://dev.api.klaim.yousted.org/api/prev-user/store"
        let payLoad = {
            "user_id": userId,
            "previousAddress": {}
        }
        addresses.forEach((add, i) => {
            payLoad.previousAddress[i] = add
        })
        axios.post(api_url, payLoad, headerOptions).then((res) => {
            console.log("Address Added")
            resetAll()
        })
    }
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 text-center">
                            <img src="./img/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
            <section className="bnrsection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <img src="./img/bnr.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        {!userDetailsSubmitted ? <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                            <div className="formpart">
                                <form>
                                    {!showEmailPhone ? <div id="slide01">
                                        <h3>Enter Your Personal Details</h3>
                                        <div className="mb-3 text-start">
                                            <label htmlFor="FormControlInput1" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="FormControlInput1" placeholder="First Name" name='first_name' value={userDetails.first_name} onChange={(e) => { hanldeChange(e) }} />
                                        </div>
                                        <div className="mb-3 text-start">
                                            <label htmlFor="FormControlInput2" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="FormControlInput2" placeholder="Last Name" name='last_name' value={userDetails.last_name} onChange={(e) => { hanldeChange(e) }} />
                                        </div>
                                        <div className="mb-3 text-start">
                                            <label htmlFor="FormControlInput3" className="form-label">Enter Your Date of Birth</label>
                                            <fieldset>
                                                <legend> Date Of Birth</legend>
                                                <div className="row">
                                                    <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12 ">
                                                        <select name="dayOfBirth" id="lstDobDay" value={dob.dayOfBirth} className="form-control watermark" onChange={(e) => { handleDOBChange(e) }}>
                                                            <option value="">Day </option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                        </select>
                                                        <i className="validate" aria-hidden="true"></i>
                                                        <span id="dobDay_err" className="error_msg error"></span>
                                                    </div>
                                                    <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12 ">
                                                        <select name="monthOfBirth" id="lstDobMonth" value={dob.monthOfBirth} className="form-control watermark" onChange={(e) => { handleDOBChange(e) }}>
                                                            <option value="">Month </option>
                                                            <option value="1">January</option>
                                                            <option value="2">February</option>
                                                            <option value="3">March</option>
                                                            <option value="4">April</option>
                                                            <option value="5">May</option>
                                                            <option value="6">June</option>
                                                            <option value="7">July</option>
                                                            <option value="8">August</option>
                                                            <option value="9">September</option>
                                                            <option value="10">October</option>
                                                            <option value="11">November</option>
                                                            <option value="12">December</option>
                                                        </select>
                                                        <i className="validate " aria-hidden="true" style={{ display: "none" }}></i>
                                                        <span id="dobMonth_err" className="error_msg"></span>
                                                    </div>
                                                    <div className="form-group col-lg-4 col-md-4 col-sm-4 col-12">
                                                        <select name="yearOfBirth" id="lstDobYear" className="form-control" onChange={(e) => { handleDOBChange(e) }}>
                                                            <option value="">Year</option>
                                                            <option value="2002">2002</option>
                                                            <option value="2001">2001</option>
                                                            <option value="2000">2000</option>
                                                            <option value="1999">1999</option>
                                                            <option value="1998">1998</option>
                                                            <option value="1997">1997</option>
                                                            <option value="1996">1996</option>
                                                            <option value="1995">1995</option>
                                                            <option value="1994">1994</option>
                                                            <option value="1993">1993</option>
                                                            <option value="1992">1992</option>
                                                            <option value="1991">1991</option>
                                                            <option value="1990">1990</option>
                                                            <option value="1989">1989</option>
                                                            <option value="1988">1988</option>
                                                            <option value="1987">1987</option>
                                                            <option value="1986">1986</option>
                                                            <option value="1985">1985</option>
                                                            <option value="1984">1984</option>
                                                            <option value="1983">1983</option>
                                                            <option value="1982">1982</option>
                                                            <option value="1981">1981</option>
                                                            <option value="1980">1980</option>
                                                            <option value="1979">1979</option>
                                                            <option value="1978">1978</option>
                                                            <option value="1977">1977</option>
                                                            <option value="1976">1976</option>
                                                            <option value="1975">1975</option>
                                                            <option value="1974">1974</option>
                                                            <option value="1973">1973</option>
                                                            <option value="1972">1972</option>
                                                            <option value="1971">1971</option>
                                                            <option value="1970">1970</option>
                                                            <option value="1969">1969</option>
                                                            <option value="1968">1968</option>
                                                            <option value="1967">1967</option>
                                                            <option value="1966">1966</option>
                                                            <option value="1965">1965</option>
                                                            <option value="1964">1964</option>
                                                            <option value="1963">1963</option>
                                                            <option value="1962">1962</option>
                                                            <option value="1961">1961</option>
                                                            <option value="1960">1960</option>
                                                            <option value="1959">1959</option>
                                                            <option value="1958">1958</option>
                                                            <option value="1957">1957</option>
                                                            <option value="1956">1956</option>
                                                            <option value="1955">1955</option>
                                                            <option value="1954">1954</option>
                                                            <option value="1953">1953</option>
                                                            <option value="1952">1952</option>
                                                            <option value="1951">1951</option>
                                                            <option value="1950">1950</option>
                                                            <option value="1949">1949</option>
                                                            <option value="1948">1948</option>
                                                            <option value="1947">1947</option>
                                                            <option value="1946">1946</option>
                                                            <option value="1945">1945</option>
                                                            <option value="1944">1944</option>
                                                            <option value="1943">1943</option>
                                                            <option value="1942">1942</option>
                                                            <option value="1941">1941</option>
                                                            <option value="1940">1940</option>
                                                            <option value="1939">1939</option>
                                                            <option value="1938">1938</option>
                                                            <option value="1937">1937</option>
                                                            <option value="1936">1936</option>
                                                            <option value="1935">1935</option>
                                                            <option value="1934">1934</option>
                                                            <option value="1933">1933</option>
                                                            <option value="1932">1932</option>
                                                            <option value="1931">1931</option>
                                                            <option value="1930">1930</option>
                                                            <option value="1929">1929</option>
                                                            <option value="1928">1928</option>
                                                            <option value="1927">1927</option>
                                                            <option value="1926">1926</option>
                                                            <option value="1925">1925</option>
                                                            <option value="1924">1924</option>
                                                            <option value="1923">1923</option>
                                                            <option value="1922">1922</option>
                                                            <option value="1921">1921</option>
                                                            <option value="1920">1920</option>
                                                            <option value="1919">1919</option>
                                                            <option value="1918">1918</option>
                                                            <option value="1917">1917</option>
                                                            <option value="1916">1916</option>
                                                            <option value="1915">1915</option>
                                                            <option value="1914">1914</option>
                                                            <option value="1913">1913</option>
                                                            <option value="1912">1912</option>
                                                            <option value="1911">1911</option>
                                                            <option value="1910">1910</option>
                                                        </select>
                                                        <i className="validate " aria-hidden="true" style={{ display: "none" }}></i>
                                                        <span id="dobYear_err" className="error_msg"></span>
                                                    </div>
                                                    <span id="dob_final_err" className="error_msg"></span>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="mb-3 text-center">
                                            <button type="button" className="btn btn-warning next01" onClick={() => { setShowEmailPhone(true) }}>Next</button>
                                        </div>
                                    </div> : <div id="slide02" >
                                        <h3>Enter Your Contact Details</h3>
                                        <div className="mb-3 text-start">
                                            <label htmlFor="FormControlInput4" className="form-label">Email Address</label>
                                            <input type="email" name='email' className="form-control" id="FormControlInput4" placeholder="Email Address" value={userDetails.email} onChange={(e) => { hanldeChange(e) }} />
                                            <p style={{ color: 'red' }}>{errors.email}</p>
                                        </div>
                                        <div className="mb-3 text-start">
                                            <label htmlFor="FormControlInput5" className="form-label">Phone Number</label>
                                            <input type="mobile" name='telephone' className="form-control" id="FormControlInput5" placeholder="Phone Number" value={userDetails.telephone} onChange={(e) => { hanldeChange(e) }} />
                                            <p style={{ color: 'red' }}>{errors.telephone}</p>

                                        </div>
                                        {isUserExistError.length > 0 && <p style={{ color: "red" }}>{isUserExistError}</p>}
                                        <div className="mb-3 text-center">
                                            <button type="button" className="btn btn-success" id="submit_claim" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>}


                                </form>
                            </div>
                        </div> : <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                            {addressOptions && <div className="formpart">
                                <div id="slide03" >
                                    <h3>Do you have a Previous Address?</h3>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label next02" htmlFor="flexRadioDefault1" onClick={() => { handleAddress(true) }}>
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label tothank" htmlFor="flexRadioDefault2" onClick={() => { handleAddress(false) }}>
                                            No
                                        </label>
                                    </div>
                                </div>

                            </div>}
                        </div>}
                        {
                            !addressOptions && <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
                                <div className="formpart">
                                    <form action="">
                                        {isPrevAddress ?
                                            <div id="slide04" >
                                                <h3>Enter your Previous Address</h3>
                                                {addresses.map((add, i) => {
                                                    return <div className="mb-3 text-start">
                                                        <label className="form-label">Previous Address {i + 1}</label>
                                                        <input type="text" className="form-control mb-3" name='Addressline1' value={add.Addressline1} placeholder="Address line 1" onChange={(e) => { handleAddressChange(i, e) }} />
                                                        <input type="text" className="form-control mb-3" name='Addressline2' value={add.Addressline2} placeholder="Address line 2" onChange={(e) => { handleAddressChange(i, e) }} />
                                                        <input type="text" className="form-control mb-3" name='Addressline3' value={add.Addressline3} placeholder="Address line 3" onChange={(e) => { handleAddressChange(i, e) }} />
                                                        <br />
                                                    </div>
                                                })}

                                                <div className="mb-3 text-center" id="submitoradd01">
                                                    <button type="button" className="btn btn-success tothank" onClick={handleSubmitAddresses}>Submit</button>
                                                    <p><a href="#" id="showadrs2" onClick={addAddress}>Add Another Address</a></p>
                                                    <p><a href="#" id="back02"> Back</a></p>
                                                </div>



                                            </div> : <div class="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                                                <h2>Thankyou...</h2>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                            </div>}
                                    </form>

                                </div>
                            </div>

                        }


                    </div>
                </div>
            </section>
        </div>
    )
}
