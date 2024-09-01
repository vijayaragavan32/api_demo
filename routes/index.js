const express = require('express');
const router = express.Router();
router.use(express.json());
const names = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
    { id: 4, name: 'Emily Davis' },
    { id: 5, name: 'Aldrin Titus' }
]
// Example API route
router.get('/data', (req, res) => {
    res.json({
        names
    }
    );
});

router.post('/data',async (req, res) => {
   var cldata = await  req.body.data
   names.push({id:names.length+1,name:cldata})
    res.json({
        names: names[names.length-1].name,
        ststes:true
    }
    );
});
module.exports = router;
