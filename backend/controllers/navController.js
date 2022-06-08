exports.home = (req, res, next) => {
  res.status(200).json({
    message: 'this is home'
  })
}

exports.how_we_work = (req, res, next) => {
    res.status(200).json({
        message: 'how we work page'
    })
}

exports.event_listening = (req, res, next) => {
    res.status(200).json({
        message: 'event listening page'
    })
}

exports.contact = (req, res, next) => {
    res.status(200).json({
        message: 'contact page'
    })
}
