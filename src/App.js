import { useState } from "react";
import useOnlineStatus from "./utils/useOnlineStatus";

export const App = () => {
  const [user, setUser] = useState(null);
  const onlineStatus = useOnlineStatus();
  console.log("rendering");
  if (onlineStatus === false) {
    return <h1>Looks like you're offline</h1>;
  }
  return (
    <>
      <p>Hello</p>
    </>
  );
};

export default App;
