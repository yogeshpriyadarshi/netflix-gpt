import React from 'react'

export default function validation(email, password) {

const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!isValidEmail) return "Email Id is not validation."

if(!isValidPassword) return "Password is not strong"

return null;


}
