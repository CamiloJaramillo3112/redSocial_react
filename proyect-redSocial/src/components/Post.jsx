import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import "./Post.css";



function Post({ id, user, content, image }) {
  const { name } = useContext(UserContext); // usuario logueado
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replies, setReplies] = useState({});
  // useEffect para registrar cuando se carga el post
useEffect(() => {
  console.log(`Post ${id} cargado`);
}, [id]);
  

  // Like
  const handleLike = () => setLikes(likes + 1);
 
  

  // Compartir
  const handleShare = () => setShares(shares + 1);

  // Comentar
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, `${name}: ${newComment}`]);
      setNewComment("");
    }
  };

  // Responder comentario
  const handleReply = (index, text) => {
    setReplies({
      ...replies,
      [index]: [...(replies[index] || []), `${name}: ${text}`]
    });
  };

  return (
    <article className="post">
      <header>
       <h4>{user}</h4>
       <small>Post ID: {id}</small>
       </header>

      <p>{content}</p>
      {image && <img src={image} alt="post" />}

      <footer>
        <button onClick={handleLike}>👍 Like ({likes})</button>
        <button onClick={handleShare}>↗️ Compartir ({shares})</button>
      </footer>

      {/* Comentarios */}
      <section>
        {comments.map((c, i) => (
          <div key={i}>
            <p>{c}</p>
            <ReplyBox onReply={(text) => handleReply(i, text)} />
            {replies[i] &&
              replies[i].map((r, j) => <p key={j} style={{ marginLeft: "20px" }}>↳ {r}</p>)}
          </div>
        ))}
      </section>

      {/* Input para nuevo comentario */}
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Escribe un comentario..."
      />
      <button onClick={handleAddComment}>Enviar</button>
    </article>
  );
}

// Componente para responder comentarios
function ReplyBox({ onReply }) {
  const [replyText, setReplyText] = useState("");

  const handleSendReply = () => {
    if (replyText.trim() !== "") {
      onReply(replyText);
      setReplyText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="Responder..."
      />
      <button onClick={handleSendReply}>Responder</button>
    </div>
  );
}

export default Post;
