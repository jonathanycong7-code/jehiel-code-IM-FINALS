const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req,res)=>{

    db.query(
        "SELECT * FROM subjects",
        (err,result)=>{

            if(err)
                return res.status(500).json(err);

            res.json(result);
        }
    );
});

router.post("/", (req,res)=>{

    const {
        subject_code,
        subject_name
    } = req.body;

    db.query(
        `INSERT INTO subjects
        (subject_code,subject_name)
        VALUES(?,?)`,
        [
            subject_code,
            subject_name
        ],
        (err,result)=>{

            if(err)
                return res.status(500).json(err);

            res.json({
                success:true
            });
        }
    );
});

module.exports = router;