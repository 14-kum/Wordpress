import { useEffect } from "react";
import { getPost } from "../api/PostApi";

export const Posts = () => {

 const [data, setData ] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    getPostData();

  },[])
  return (
    <h1 className="text-3xl font-bold underline">
      Hello, Posts page
    </h1>
  )
}