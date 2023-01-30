import { Alert, CircularProgress } from "@mui/material";
import { isEmpty } from "lodash";
import { useState } from "react";
import GenericPostData from "./components/generic-post-data";

interface IBodyData {
  title: string;
  body: string;
  userId: number;
}

function App() {
  const [body, setBody] = useState<IBodyData | undefined>(undefined);
  return (
    <div>
      <button
        onClick={() => {
          setBody({ title: "foo", body: "bar", userId: 1 });
        }}
      >
        set body
      </button>
      {!isEmpty(body) && (
        <GenericPostData
          url="https://jsonplaceholder.typicode.com/posts"
          body={body}
          successComponent={
            <Alert severity="success">
              This is an auccess alert — check it out!
            </Alert>
          }
          loadingComponent={
            <>
              Loading ...
              <CircularProgress />
            </>
          }
          errorComponent={
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
          }
        />
      )}
    </div>
  );
}

export default App;
