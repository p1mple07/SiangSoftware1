const express = require('express');
const router = express.Router();
const {db} = require('../firebase/fireConfig')
const { collection, doc, getDoc, addDoc, getDocs } = require('firebase/firestore');

const usersCollection = collection(db, 'projects');

router.post('/addproject', async(req, res) => {
    const data = req.body;
    const docRef = await addDoc(usersCollection, dataFromFrontend);
})

module.exports = router;