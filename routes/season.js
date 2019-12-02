import {
  createSeason,
  deleteManySeasons,
  deleteSeason,
  getAllSeasons,
  getAllSeasonIds,
  getSeason,
  updateSeason,
} from "controllers/season";
import { requireStaffRole } from "services/strategies";

export default app => {
  app.post("/api/season/create", requireStaffRole, createSeason);
  app.delete("/api/seasons/delete-many", requireStaffRole, deleteManySeasons);
  app.delete("/api/season/delete/:id", requireStaffRole, deleteSeason);
  app.get("/api/seasons/all/ids", requireStaffRole, getAllSeasonIds);
  app.get("/api/seasons/all", requireStaffRole, getAllSeasons);
  app.get("/api/season/edit/:id", requireStaffRole, getSeason);
  app.put("/api/season/update", requireStaffRole, updateSeason);
};
