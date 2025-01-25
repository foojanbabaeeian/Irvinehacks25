import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import  {db}  from './firebase.js';  // Importing the db instance
import { getFirestore } from "firebase-admin/firestore";
dotenv.config();

const app = express()
const port = 3000;

app.use(cors()); 
app.use(express.json());

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

// app.get('/verify', async (req, res) =>{
//     const { seller } = req.query;

//     if (!seller) {
//         return res.status(400).json({ error: "Seller is required" });
//     }

//     const melissaNameURL = "https://globalname.melissadata.net/V3/WEB/GlobalName/doGlobalName/";
//     const params ={
//         'id': process.env.MELISSA_API_KEY,
//         'format': "json",
//         'full': seller
//     };

//     try {
//         const response = await axios.get(melissaNameURL, {params});
//         res.json(response.data);
//         console.log('success finding name data!');
//     } catch (error) {
//         console.error('Could not fetch data from Melissa');
//         res.status(500).json({erro: 'An error occurred'});
//     }
// })

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

app.get('/create_key', async (req, res) => {
    const ssn = req.query.ssn;
    const address = req.query.address;
    const name = req.query.name;
    // actual SSN look up, uncomment in actual code

    // const params = new URLSearchParams({
    //     'id': process.env.MELISSA_API_KEY,
    //     'SSN': ssn,
    //     'full': name,
    // });

    // const urlWithParams = baseURL + '?' + params.toString();

    // try {
    //     const response = await axios.get(urlWithParams);    
    // 
    //     const verificationResult = response.data.Records[0].Results;
    //     const isSSNVerified = verificationResult === 'SN04'; // 'SN04' means valid match
    //     
    // if (!isSSNVerified){
    //     res.send('Your SSN does not match!')

    // }
    // } catch (error) {
    //     console.error("Error during SSN verification:", error);
    //     return false;
    // }
    console.log(address,name,ssn);
    const melissaPropURL = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    const params = {
        id: process.env.MELISSA_API_KEY,
        cols: "GrpAll",
        format: "json",
        ff: address,
    };

    try {
        console.log('success finding property data!')
        const response = await axios.get(melissaPropURL, {params});
        res.json(response.data);
    } catch (error) {
        console.error('Could not fetch data from Melissa');
        res.status(500).json({error: 'An error occurred'});
    }
   
})

app.post('/upload_key', async (req, res) => {
    const { address, key } = req.body;

    if (!address || !key) {
        return res.status(400).json({ error: "Address and key are required" });
    }
    try {
        const keyRef = db.collection('keys');
        await keyRef.doc(key).set({
                key: key,
                address: address,
                timestamp: new Date()
            });
        res.status(200).json({ message: "Key uploaded successfully" });
    } catch (error) {
        console.error("Error uploading key to Firestore:", error);
        res.status(500).json({ error: "An error occurred while uploading the key" });
    }
});

app.listen(port, () => {console.log("server started port 3000")});

