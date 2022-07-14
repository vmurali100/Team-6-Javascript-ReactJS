import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUser, updateUser } from '../slices/userSlice';

export const Users = () => {
    const dispatch = useDispatch();

    const [user, setuser] = useState({
        university: "",
        institute: "",
        branch: "",
        degree: "",
        experience: ""
    });

    const userobj = useSelector((state) => state.userInfo);

    useEffect(() => {
        if (userobj.isEdit) {
            setuser(userobj.users[userobj.editIndex])
        }
    }, [userobj])
    const handleChange = (e) => {
        let newUser = { ...user };
        let fieldName = e.target.name;
        newUser[fieldName] = e.target.value;
        setuser(newUser)
    };
    const handleSubmit = () => {
        console.log(user)
        dispatch(addUser(user))
        handleClear()
    };
    const handleClear = () => {
        setuser({
            university: "",
            institute: "",
            branch: "",
            degree: "",
            experience: ""
        })
    }
    const handleUpdateUser = () => {
        let updateObjct = {
            data: user,
            index: userobj.editIndex,
            isEdit: false
        }
        dispatch(updateUser(updateObjct))
        handleClear()
    }
    return (
        <div>
            <form>
                <label htmlFor="university">University</label>
                <input type="text" name="university" value={user.university} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="institute">Institute</label>
                <input type="text" name="institute" value={user.institute} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="branch">Branch</label>
                <input type="text" name="branch" value={user.branch} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" value={user.degree} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="experience">Experience</label>
                <input type="text" name="experience" value={user.experience} onChange={(e) => { handleChange(e) }} /><br />
                <button type="button" onClick={userobj.isEdit ? handleUpdateUser : handleSubmit}>{userobj.isEdit ? 'Update User' : 'Add User'}</button>

            </form>
        </div>
    )
}
