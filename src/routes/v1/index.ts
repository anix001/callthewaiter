import { Router } from "express";
import userRoutes from "./user.routes";
import resturantroutes from "./resturant.routes";
import tableRoutes from "./table.routes";

import { authenticateToken } from "../../middleware/auth";

const router = Router();

//[v1 Routes]
router.use("/user", userRoutes);
router.use("/resturant", authenticateToken, resturantroutes);
router.use("/table", authenticateToken, tableRoutes);

export default router;