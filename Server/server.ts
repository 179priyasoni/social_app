import UserRoutes from "../Server/src/routes/user.routes"

import {app} from "../Server/src/app"
// const app: Express = express();
const port = process.env.PORT || 3000;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });
app.use("/api", UserRoutes);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});