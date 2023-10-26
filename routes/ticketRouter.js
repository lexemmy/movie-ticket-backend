const express = require("express");
const ticketController = require("../controllers/ticketController");
const router = express.Router();

const Authentication = require("../middleware/auth.js");

router.use(Authentication.hasAuth);
router.get("/", ticketController.getTickets);
router.get("/ticketcode:",ticketController.getTicketById)
router.post("/", ticketController.createTicket);
router.put("/:ticketCode", ticketController.editTicket);
router.delete("/:ticketCode",ticketController.deleteTicket);

module.exports = router;