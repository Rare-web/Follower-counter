import axios from "axios";

export default async (req, res) => {
  try {
    const id = req.body;

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=AIzaSyBcty42aWiTVeXeYW09Gu1DP_OBmipqbHQ`,
    );
    const json = await response.json();
    const subscriberCount = json.items[0].statistics.subscriberCount;

    return res.status(200).json({ subscribers: subscriberCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "ERROR",
    });
  }
};
