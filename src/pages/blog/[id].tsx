import { client } from "../../lib/MicroCms";
import { NextPage } from "next";

type BlogResponseType = {
  contents: Contents;
  totalCount: number;
  offset: number;
  limit: number;
};

type Contents = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: JSX.Element;
  image: { url: string; height: number; width: number };
}[];

type Props = {
  content: Contents;
};
//
// export const Post: NextPage<Contents> = ({blog}:Co) => {
//   console.log(blog);
//   return (
//     <div>
//       <ul>
//         {blog.map((blog) => (
//           <>
//             <div>{blog.id}</div>
//             <div>{blog.title}</div>
//             <div>{blog.contents}</div>
//           </>
//           ))}
//         <li key={blog.id}>
//           <p>{blog.title}</p>
//         </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Post;

export const getStaticProps = async () => {
  const data = await client.get<BlogResponseType>({
    endpoint: "blog",
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
