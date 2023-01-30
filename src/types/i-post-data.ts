import { ReactElement } from "react";

export default interface IPostData<BodyType> {
    url: string;
    body : BodyType;
    successComponent: ReactElement;
    errorComponent: ReactElement;
    loadingComponent: ReactElement;
  }