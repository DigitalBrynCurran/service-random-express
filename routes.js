const express = require('express');
var router = express.Router();
const service = require('./services');
const { response } = require('./utils');

router.get('/', (req, res) => {
  const data = service.get();

  if (data == null) {
    res.status('404');
    return res.json(response({
      error: {
        message: "no data found"
      }
    }));
  }

  return res.json(response({ data }));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  const data = service.getById(id);

  if (data == null) {
    res.status('404');
    return res.json(response({
      error: {
        message: "no data found"
      }
    }));
  }

  return res.json(response({ data }));
});

router.post('/', (req, res) => {
  const request = req.body;

  const data = service.add(request);

  if (data == null) {
    res.status('500');
    return res.json(response({
      error: {
        message: "interal server error"
      }
    }));
  }

  return res.json(response({ data }));
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const data = service.remove(id);

  if (data == null) {
    res.status('404');
    return res.json(response({
      error: {
        message: "no data found"
      }
    }));
  }

  return res.json(response({ data }));
});

module.exports = router;