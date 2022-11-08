import express from "express";

const congigViewEngine = (app) => {
  app.use(express.static("./src/public"));
  //   cau hinh file co the xem duoc tu client
  //
  // cau hinh viewengine va noi luu tru code cua viewengine
  app.set("view engine", "ejs");
  app.set("views ", "./src/views");
};

export default congigViewEngine;
