const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req,res)=>{

    const {
        username,
        password
    } = req.body;

    db.query(
        `
        SELECT *
        FROM users
        WHERE username=?
        AND password=?
        `,
        [
            username,
            password
        ],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            if(result.length === 0){

                return res.status(401).json({
                    success:false,
                    message:"Invalid Credentials"
                });

            }

            res.json({
                success:true,
                user:result[0]
            });

        }
    );

});

module.exports = router;