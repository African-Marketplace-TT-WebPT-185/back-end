function checkRoleMiddleware(role) {
    return function (req, res, next) {
        console.log('This here', role)
        console.log('yo', req.decodedToken)
        if (req.decodedToken.role && req.decodedToken.role === role) {
            next();
        } else {

            res.status(403).json({ message: 'No permissions!', role });

        }
    }
}

module.exports = checkRoleMiddleware;