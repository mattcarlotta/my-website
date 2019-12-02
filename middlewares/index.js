import cors from "cors";
import morgan from "morgan";
import compression from "compression";

//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
export default app => {
  morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a"));
  if (!inTesting)
    app.use(
      morgan(
        ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]",
      ),
    ); // logging framework
  app.set("trust proxy", true);
  app.use(
    cors({
      credentials: true,
      origin: CLIENT,
    }),
  ); // allows receiving of cookies/tokens from front-end
  app.use(
    compression({
      level: 6, // set compression level from 1 to 9 (6 by default)
      filter: (req, res) =>
        req.headers["x-no-compression"] ? false : compression.filter(req, res),
    }),
  );
  app.set("json spaces", 2); // sets JSON spaces for clarity
};
