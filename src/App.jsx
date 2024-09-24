import { getPost } from "./api/PostApi";
import { useEffect } from "react";
export default function App() {
  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
  };
  useEffect(() => {
    getPostData()
  },[]);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
};