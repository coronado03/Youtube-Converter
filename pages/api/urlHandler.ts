// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
var YoutubeMp3Downloader = require("youtube-mp3-downloader");


type Data = {
  filePath: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.body;
  
  console.log(url)

  const YD = new YoutubeMp3Downloader({
    "ffmpegPath": "/path/to/ffmpeg",        // Where is the FFmpeg binary located?
    "outputPath": "/path/to/output/folder", // Where should the downloaded and encoded files be stored?
    "youtubeVideoQuality": "highest",       // What video quality should be used?
    "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
    "progressTimeout": 2000                 // How long should be the interval of the progress reports
  });

  YD.download(url);

  YD.on("finished", function(err, data) {
    console.log(JSON.stringify(data));
    res.status(200).json({ filePath: data.file });
  });

  YD.on("error", function(error) {
    console.log(error);
    res.status(500).json({ error });
  });
}
