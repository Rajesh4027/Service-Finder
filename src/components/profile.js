import React,{useEffect,useState} from 'react'
import {auth,db} from "./firebase"
import {doc,getDoc} from "firebase/firestore"
import { toast } from 'react-toastify';


function profile() {
  return (
    <div>profile page</div>
  )
}
import { Form } from 'react-router-dom'

export default profile