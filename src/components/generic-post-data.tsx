import usePostData from "../hooks/use-post-data";
import IPostData from "../types/i-post-data";

function GenericPostData<BodyType>(props: IPostData<BodyType>) {
  const { url, body, successComponent, loadingComponent, errorComponent } =
    props;
  const [result, isLoading, error] = usePostData<BodyType | undefined>(
    url,
    body
  );

  if (isLoading) {
    return loadingComponent;
  }

  if (error) {
    return errorComponent;
  }

  if (!result) {
    // --- not ready
    return <></>;
  }

  return successComponent;
}

export default GenericPostData;
