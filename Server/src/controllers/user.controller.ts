import express from "express";
export const FirstAPI = (req: express.Request, res: express.Response) => {
    console.log("hii i m first API")
    const data = {
        firstname: "John Doe",
        lastname: "Doe"
      };
    
      res.json(data);
      console.log(data,"data")
}
