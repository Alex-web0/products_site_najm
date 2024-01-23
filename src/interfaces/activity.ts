import type { Timestamp } from "firebase/firestore";

export interface Activity {
  title: string;
  register_link: string;
  full_description: string;
  image_link: string;
  from: Timestamp;
  to: Timestamp;
  id?: string;
}
