import React, { useEffect, useState } from "react";
import api from "../Api";
import { useAuthContext } from "../Context/AuthContext";

const useFetch = (initialData) => {
  const [data, setData] = useState(initialData);
  const [moreData, setMoreData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { token } = useAuthContext();

  async function get(url) {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get(url);
      // console.log(data);
      setData(response.data);
      if (data?.data?.data && Array.isArray(response?.data?.data)) {
        setMoreData((prev) => [...prev, ...response.data.data]);
      }
    } catch (error) {
      setError(error.response.data);
      // console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function post(url, requestData) {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post(url, requestData);

      setData(response);
    } catch (error) {
      setError(error);
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {}, [data]);
  console.log("useFetch", data);

  return { data, error, loading, get, post, moreData };
};
export default useFetch;
