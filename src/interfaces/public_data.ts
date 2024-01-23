export interface PublicData {
  about_video: string;
}

export function getAboutVideoThumbnailLink(d: PublicData) {
  var videoId: string = "";
  const l = d.about_video;

  if (l.includes("youtu.be/")) {
    videoId = l.replace("https://youtu.be/", "").split("?")[0];
  } else if (l.includes("/watch?v")) {
    videoId = l.replace("https://www.youtube.com/watch?v=", "").split("&")[0];
  }

  // console.log(videoId);
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
}
