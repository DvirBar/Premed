const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');

// Path model
const Path = require('../../models/Path');
const modelName = 'path';

// Errors
const pathsMessage = require('../../messages/paths');
const { NotExist, SuccessDelete } = pathsMessage;

// @route   GET api/paths/:id
// @desc    Get path by id
// @access  Public
router.get('/:id', (req, res, next) => {
    Path.findById(req.params.id)
            .then(path => {
                if(!path) return res.status(NotExist.status).json(NotExist.msg);
                
                return res.json(path);
            })
            .catch(next)
})

// @route   GET api/paths
// @desc    Get all paths
// @access  Public
router.get('/', (req, res, next) => { 
    Path.find()
        .then(path => res.json(path))
        .catch(err => {throw err});
})
 
// @route   POST api/paths
// @desc    Create new path
// @access  Admin
router.post('/', [auth, authAdmin], (req, res, next) => {
    const { name } = req.body;

    res.locals.model = modelName;

    // Create new path
    const newPath = new Path({
        name: name
    })

    newPath.save()
            .then(path => {
                return res.json(path)
            })
            .catch(next);
})

// @route   PUT api/paths/:id
// @desc    Update path
// @access  Admin
router.put('/:id', [auth, authAdmin], (req, res, next) => {
    const { name } = req.body;

    res.locals.model = modelName;

    const pathId = req.params.id;

    Path.findById(pathId)
              .then(path => {
                if(!path) return res.status(NotExist.status).send(NotExist.msg)
                    
                path.name = name;

                path.save()
                    .then(path => {
                        return res.json(path)              
                    })
                    .catch(next);
                })
              .catch(next);
});


// @route   DELETE api/paths/:id
// @desc    Delete path
// @access  Admin
router.delete('/:id', [auth, authAdmin], (req, res, next) => {

    const pathId = req.params.id;

    Path.findById(pathId)
              .then(path => {
                if(!path) return res.status(NotExist.status).send(NotExist.msg);

                path.remove()
                    .then(() => {
                        return res.send(SuccessDelete.msg)
                    })
                    .catch(next);
              })
              .catch(next);
})

module.exports = router;
