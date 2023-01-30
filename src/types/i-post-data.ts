import { ReactElement } from "react";

export default interface IPostData<Data> {
    url: string;
    body : Data;
    successComponent: ReactElement;
    errorComponent: ReactElement;
    loadingComponent: ReactElement;
  }