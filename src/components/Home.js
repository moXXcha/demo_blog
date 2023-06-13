import React from "react";
import "./Home.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase";

const Home = ({ }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="mendoi" key={post.id}>
            <div className="mendoi2">
              <div className="postContents">
                <div className="postHeader">
                  <h1>{post.title}</h1>
                </div>
                <div className="postTextContainer">{post.postsText}</div>
              </div>
              <div className="nameAndDeleteButton">
                <h3>@{post.author.username}</h3>
                {post.author.id === auth.currentUser?.uid && (
                  <button
                    onClick={() => {
                      handleDelete(post.id);
                    }}
                  >
                    削除
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
