import express from "express";
export const FirstAPI = (req: express.Request, res: express.Response) => {
    console.log("hii i m first API")
    const data = {
        firstname: "John",
        lastname: "Doe"
      };
    
      res.json(data);
      console.log(data,"data")
}
