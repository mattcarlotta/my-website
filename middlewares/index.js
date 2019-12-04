import cors from "cors";
import morgan from "morgan";
import moment from "moment-timezone";
import compression from "compression";

const { CLIENT, NODE_ENV } = process.env;
const inTesting = NODE_ENV === "testing";

moment.tz.setDefault("America/Los_Angeles");

//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
export default app => {
  morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a"));
  if (!inTesting) {
    app.use(
      morgan(
        ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]",
      ),
    );
  } // logging framework
  app.set("trust proxy", true);
  app.use(
    cors({
      origin: CLIENT,
    }),
  ); // allows requests from front-end
  app.use(
    compression({
      level: 6, // set compression level from 1 to 9 (6 by default)
      filter: (req, res) => (req.headers["x-no-compression"] ? false : compression.filter(req, res)),
    }),
  );
  app.set("json spaces", 2); // sets JSON spaces for clarity
};
