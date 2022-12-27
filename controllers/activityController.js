const db = require('../utils/database');

exports.postActivity = (req, res, next) => {
    db.execute('INSERT INTO activity(sport, area, date, time, access, posted_by) VALUES (?, ?, ?, ?, ?, ?)', [req.body.sport, req.body.area, req.body.date, req.body.time, req.body.access, req.body.posted_by]).then(([rows, fieldData]) => {
        res.status(200).json(
            {
                success: true
            }
        )
    }).catch(err => {
        res.status(400).json(
            {
                success: false,
                error: err
            }
        )
    })
}

exports.getActivity = (req, res, next) => {
    db.execute("SELECT * from activity").then(([rows, fieldData]) => {
        res.status(200).json({
            success: true,
            data: rows[0],
        })
    })
}