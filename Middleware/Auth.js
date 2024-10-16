const adminData = (req, res, next) => {
  const token = "xyz";
  const isAuthorization = token === "xyz";
  if (!isAuthorization) {
    res.status(401).send("Not authorization");
  } else {
    next();
  }
}
  module.exports = {
    adminData,
  };

