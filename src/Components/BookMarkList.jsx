import React, { useState } from 'react';
import '../styles/BookmarkList.css';
import { BsBookmarkStarFill } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";

function BookmarkList({ bookmarks, handleDelete, setEditBookMark }) {
  const [search, setSearch] = useState('');

  const filteredBookmarks = bookmarks.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bookmark-wrapper">

      <div className="bookmark-header-bar">
        <h3 className="bookmark-heading">
          Saved Bookmarks <BsBookmarkStarFill className="star-icon" />
        </h3>

        <input
          type="text"
          className="bookmark-search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      {filteredBookmarks.length === 0 ? (
        <p className="empty-text">
          {bookmarks.length === 0
            ? "No bookmarks added"
            : "No bookmarks match your search"}
        </p>
      ) : (
        <div className="bookmark-grid">
          {filteredBookmarks.map((b) => (
            <div key={b.id} className="bookmark-card">
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bookmark-title"
              >
                {b.title}
              </a>

              <div>
                <MdEdit
                  className="edit-icon"
                  onClick={() => setEditBookMark(b)}
                />
                <MdDelete
                  className="delete-icon"
                  onClick={() => handleDelete(b.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarkList;