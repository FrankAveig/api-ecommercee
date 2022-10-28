const { expressjwt: jwt } = require("express-jwt");

/**
 * If the authorization header is present, split it into an array of two elements, the first being the
 * type of authorization and the second being the token. If the type is Bearer or Token, return the
 * token. Otherwise, return null.
 */
const getToken = (req) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return null;
  }

  const [type, token] = authorization.split(" ");

  return type === "Bearer" || type === "Token" ? token : null;
};

/* Using the express-jwt library to create a middleware function that will be used to authenticate the user. */
const auth = jwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  requestProperty: "user",
  getToken,
});


module.exports = auth;