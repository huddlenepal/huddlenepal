const eventData = require("./../model/eventRegisterModel");

exports.register = async (req, res) => {
  const data = await eventData.create({
    name: req.body.name,
    location: req.body.location,
    banner: req.body.banner,
    date: req.body.date,
    time: req.body.time,
  });

  res.status(201).json({
    message: "data created",
    data,
  });
  
};
