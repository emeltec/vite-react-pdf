import { useQuery } from "react-query"

const getData = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return data
}

export const useGetData = () => {
  const query = useQuery(
    ['users'],
    getData,
    {
      refetchOnWindowFocus: false
    }
  );

  return query;
}