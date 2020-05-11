
module.exports = () => {
    return (req, res, next) => {
        if(!req.body){
            res.status(400).json({
                message: "Missing request body"
            })
        }
        else if (!req.body.text){
            res.status(400).json({
                message: "Missing text property inside of request body"
            })
        }
        
        next()
    };
};