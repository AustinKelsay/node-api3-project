

module.exports = () => {
    return (req, res, next) => {
        if(!req.body){
            res.status(400).json({
                message: "Missing request body"
            })
        }
        else if (req.body.id !== req.params.id){
            res.status(400).json({
                message: "The ID in request body does not match this post ID"
            })
        }
        
        next()
    };
};