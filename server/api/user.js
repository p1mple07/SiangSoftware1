const express = require('express');
const router = express.Router();
const { jwtDecode } = require("jwt-decode");
const {db} = require('../firebase/fireConfig');
const { collection, doc, getDoc, addDoc, getDocs } = require('firebase/firestore');
const jwt = require('jsonwebtoken');

const jwtSecret = "thisisajwtsecretforkritisoftwareps";

router.get('/user-info', async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwtDecode(token);
    // console.log(decoded.user.id);
    
    if(!token){
        return res.status(403).json({message: 'No token provided'});
    }
    const docRef = doc(db, 'users', decoded.user.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return res.status(404).json({message: 'user not found'});
    } 
    else{
        // console.log(docSnap.data());
        res.json({message:'successful authentication', name: docSnap.data().name, email: docSnap.data().email});
    }

    // console.log(token);
})

module.exports = router;