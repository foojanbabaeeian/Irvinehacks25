import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import  {db}  from './firebase.js';  // Importing the db instance
import { getFirestore } from "firebase-admin/firestore";
dotenv.config();

const express = require('express');
const housingRoutes = require('./routes/housingRoutes');
const app = express();

app.use(cors()); 
app.use(express.json()); // Middleware for parsing JSON
app.use('/api/housing', housingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get("/property", async (req, res) => {
    const { address } = req.query;

    if (!address) {
        return res.status(400).json({ error: "Address is required" });
    }

    const melissaPropURL = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    const params = {
        id: process.env.MELISSA_API_KEY,
        cols: "GrpAll",
        format: "json",
        ff: address,
    };

    try {
        const response = await axios.get(melissaPropURL, {params});
        
        res.json(response.data);
        console.log('success finding property data!')
    } catch (error) {
        console.error('Could not fetch data from Melissa');
        res.status(500).json({error: 'An error occurred'});
    }
});


app.get('/verify', async (req, res) => {
    const address = req.query.address;
    const key = req.query.key;
    console.log(address, key)
    if (!address || !key) {
        return res.status(400).json({ error: "Address and key are required" });
    }

    try {
        console.log(address, key)
        const keysRef = db.collection('keys');
        const q = await keysRef.where('address','==',address).where('key','==', key).get();

        if (q.empty) {
            res.status(404).json({ message: "Key not found for the specified address" });
        } else {
            res.status(200).json({ message: "Key found for the specified address" });
            q.forEach(doc => {
                console.log(doc.id, '=>', doc.data())
            })
        }

    } catch (error) {
        console.error('Error verifying key:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});