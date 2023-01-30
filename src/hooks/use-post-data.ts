import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function usePostData<BodyType>(
  url: string,
  body: BodyType
): [AxiosResponse | null, boolean, AxiosError | null] {
  const [result, setResult] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(postData, [url, body]);

  function isEmpty<T>(body: T): boolean {
    /*---- todo nath should i check for valid BodyType using dynamic type check??
      ---- because this is done anyway on the form and on the server (both using json schema) */
    return _.isEmpty(body);
  }

  function postData() {
    if (url && !isEmpty(body)) {
      // --- if '' i get an error so added this
      setIsLoading(true);
      axios
        .post(url, body)
        .then((res: AxiosResponse) => {
          setResult(res);
          setIsLoading(false);
          console.log("request sent");
        })
        .catch((err: AxiosError) => {
          setError(err);
          setIsLoading(false);
          console.error(err);
        });
    }
  }

  return [result, isLoading, error];
}
