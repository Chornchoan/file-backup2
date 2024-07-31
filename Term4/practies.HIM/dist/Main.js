"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleConvoy_1 = require("./VehicleConvoy");
const MiniVan_1 = require("./MiniVan");
const BatMobile_1 = require("./BatMobile");
const TucTuc_1 = require("./TucTuc");
const convoy = new VehicleConvoy_1.VehicleConvoy();
const batMobile = new BatMobile_1.BatMobile(20, "BAT-001", true);
convoy.addVehicle(batMobile);
const miniVan = new MiniVan_1.MiniVan(30, "MV-001", 5, 3);
convoy.addVehicle(miniVan);
const tucTuc = new TucTuc_1.TucTuc(500, "TT-001", 2);
convoy.addVehicle(tucTuc);
console.log("Max speed of the convoy:", convoy.getMaxSpeed());