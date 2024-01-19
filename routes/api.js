// import News Controller
const NewsController = require("../controllers/NewsController");

// import express
const express = require("express");

// make an object router
const router = express.Router();

// make home routing
router.get("/", (req, res) => {
    res.send("Hello Isma");
});

// Routing for Students
router.get("/news", NewsController.index);
router.post("/news", NewsController.store);
router.put("/news/:id", NewsController.update);
router.delete("/news/:id", NewsController.destroy);
router.get("/news/:id", NewsController.show);

// export routing
module.exports = router;