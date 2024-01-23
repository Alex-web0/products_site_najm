import { getAboutVideoThumbnailLink } from "./interfaces/public_data";

export async function sendMessageThroughEmail(message: string) {
  console.log("Hello");
  console.log(message);

  window.open(message, "_blank");
  return;
}

export const getAboutVideoThumbnail = getAboutVideoThumbnailLink;
