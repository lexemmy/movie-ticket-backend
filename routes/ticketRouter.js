const express = require("express");
const ticketController = require("../controllers/ticketController");
const router = express.Router();

const Authentication = require("../middleware/auth.js");
//router.use(Authentication.hasAuth);
router.get("/", ticketController.getTickets);
router.get("/:ticketId",ticketController.getTicketById)
router.post("/", ticketController.createTicket);
router.put("/:ticketId", ticketController.editTicket);
router.delete("/:ticketId",ticketController.deleteTicket);

module.exports = router;