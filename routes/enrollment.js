const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req,res)=>{

    const {
        student_id,
        subject_id
    } = req.body;

    db.query(
        `INSERT INTO enrollments
        (student_id,subject_id)
        VALUES(?,?)`,
        [
            student_id,
            subject_id
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

router.get("/", (req,res)=>{

    db.query(
        `
        SELECT
        enrollments.id,
        students.name,
        students.section,
        subjects.subject_name

        FROM enrollments

        JOIN students
        ON students.id=
        enrollments.student_id

        JOIN subjects
        ON subjects.id=
        enrollments.subject_id
        `,
        (err,result)=>{

            if(err)
                return res.status(500).json(err);

            res.json(result);
        }
    );
});

module.exports = router;