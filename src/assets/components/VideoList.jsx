import React from "react";
import { useSelector } from "react-redux";

function VideoList() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      {/* Implement your video list component, makach vids*/}
    </div>
  );
}

export default VideoList;
