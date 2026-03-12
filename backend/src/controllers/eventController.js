import eventService from "../services/eventService.js";

const getTicketTypes = async (req, res, next) => {
  try {
    const { eventId, secret } = req.body;

    const result = await eventService.getTicketTypes({
      eventId,
      secret
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getTicketTypes
};