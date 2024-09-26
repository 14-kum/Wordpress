import { useEffect } from "react";
import { getPost } from "../api/PostApi";

 const Posts = () => {

 const [data, setData ] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  }

  useEffect(() => {
    getPostData();

  },[])
  return ( <section className="section-post">
    <ul>
      {
        data.map((curElem) => {
          const { id, body, title } = curElem;
          return(
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          )
        })
      }
    </ul>
  </section>
  )
}
export default Posts;