const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "ERROR FROM BACKEND";

    return res.status(status).json({msg: message, extraDetails: extraDetails});
};


module.exports = errorMiddleware;