import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import ActivityItem from "./ActivityItem";
import {
  collection,
  getDocs,
  type DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import Loading from "./Loading";
import type { Activity } from "../interfaces/activity";

export function ActivityView({ loadingLabel }: { loadingLabel: string }) {
  var [items, setItems] = useState<Array<Activity>>([]);

  useEffect(() => {
    loadAndDisplayActivities().then((v) => {
      setItems(
        v.docs.map((v) => {
          return v.data() as Activity;
        })
      );
    });

    console.log(
      " ====================  CALLED USE EFFECT ===================="
    );
  }, []);

  return (
    <div>
      <div className=" flex flex-row items-stretch justify-stretch">
        {items.length < 1
          ? Loading({ label: loadingLabel })
          : items.map((e) => ActivityItem(e))}
      </div>
    </div>
  );
}

async function loadAndDisplayActivities(): Promise<
  QuerySnapshot<DocumentData, DocumentData>
> {
  const activitiesCollection = collection(firestore, "activities");

  const querySnapshot = await getDocs(activitiesCollection);

  // Process the querySnapshot and display the activities
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    // You can process and display the activities here
  });

  return querySnapshot;
}
