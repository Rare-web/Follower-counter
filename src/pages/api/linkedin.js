import axios from "axios";

export default async (req, res) => {
  try {
    // Get data submitted in request's body.
    const { id } = req.query;
    console.log(id);
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=AIzaSyBcty42aWiTVeXeYW09Gu1DP_OBmipqbHQ`,
    );
    const json = await response.json();

    // if (!followers) {
    //   // Sends a HTTP bad request error code
    //   return res.status(400).json({ data: "followers not found" });
    // }
    return res.status(200).json({ subscribers: subscriberCount });
    // return res.status(200).subscriberCount
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "ERROR",
    });
  }
};
