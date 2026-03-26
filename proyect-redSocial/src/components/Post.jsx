import React from "react";

function Post({ user, avatar, time, content, images }) {
  return (
    <article className="w3-container w3-card w3-white w3-round w3-margin">
      <header className="w3-flex w3-align-middle w3-padding-small">
        <img
          src={avatar}
          alt={`Avatar de ${user}`}
          className="w3-circle w3-margin-right"
          width="60"
          height="60"
          loading="lazy"
        />
        <div>
          <h4>{user}</h4>
          <span className="w3-opacity">{time}</span>
        </div>
      </header>
      <hr />
      <p>{content}</p>

      {images && (
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          {images.map((img, i) => (
            <div key={i} className="w3-half">
              <img src={img.src} alt={img.alt} style={{ width: "100%" }} className="w3-margin-bottom" loading="lazy" />
            </div>
          ))}
        </div>
      )}

      <footer>
        <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
          <i className="fa fa-thumbs-up"></i> Like
        </button>
        <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
          <i className="fa fa-comment"></i> Comment
        </button>
      </footer>
    </article>
  );
}

export default Post;
