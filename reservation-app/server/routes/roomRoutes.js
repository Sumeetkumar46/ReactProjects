const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    return res.json({mesage: "get rooms"});
});

module.exports = router;