import { VehicleConvoy } from "./VehicleConvoy";
import { MiniVan } from "./MiniVan";
import { BatMobile } from "./BatMobile";
import { TucTuc } from "./TucTuc";
const convoy = new VehicleConvoy();

const batMobile = new BatMobile(20, "BAT-001", true);
convoy.addVehicle(batMobile);

const miniVan = new MiniVan(30, "MV-001", 5, 3);
convoy.addVehicle(miniVan);

const tucTuc = new TucTuc(500, "TT-001", 2);
convoy.addVehicle(tucTuc);

console.log("Max speed of the convoy:", convoy.getMaxSpeed());