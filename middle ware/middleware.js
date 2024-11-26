const auth = (req, res, next) => {
    const sentData = req.bady
    const login = sentData.logIn
    
    if (logIn) {
        re.json({
            "status": "DENIED",
            "message": "please signup to access this site",
            
       })
    } else {
        next()
    }
}
module.exports = {
    auth
}