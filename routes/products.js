const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    const product = [
        {
            id: 1,
            name: "milk",
            date: "01.01.2022",
            company: "ROMOL"
        },
        {
            id: 2,
            name: "milk",
            date: "02.01.2022",
            company: "Prostokvashino"
        }
    ]
    res.json(product);
  });

module.exports = router;

