const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req,res)=>{

    db.query(
        "SELECT * FROM students",
        (err,result)=>{

            if(err)
                return res.status(500).json(err);

            res.json(result);
        }
    );
});

router.post("/", (req,res)=>{

    const {
        student_id,
        name,
        section
    } = req.body;

    db.query(
        `INSERT INTO students
        (student_id,name,section)
        VALUES(?,?,?)`,
        [
            student_id,
            name,
            section
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

router.put("/:id",(req,res)=>{

    const {
        student_id,
        name,
        section
    } = req.body;

    db.query(
        `UPDATE students
        SET student_id=?,
        name=?,
        section=?
        WHERE id=?`,
        [
            student_id,
            name,
            section,
            req.params.id
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

router.delete("/:id",(req,res)=>{

    db.query(
        "DELETE FROM students WHERE id=?",
        [req.params.id],
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