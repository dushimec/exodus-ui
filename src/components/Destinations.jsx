import React, { useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function MainComponent() {
  const [selectedCommentCard, setSelectedCommentCard] = useState(null);

  const destinations = [
    {
      name: "Istanbul | Konya | Edirne",
      country: "Turkey",
      likes: 0,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      moreCities: ["Bursa", "Antalya", "Trabzon", "Sanliurfa"],
      showMore: false,
      comments: [
        {
          id: 1,
          user: "Sarah",
          text: "Beautiful city with amazing culture!",
          likes: 0,
          replies: [],
        },
        {
          id: 2,
          user: "John",
          text: "The food was incredible, must visit!",
          likes: 0,
          replies: [],
        },
        {
          id: 3,
          user: "Mike",
          text: "Loved the historical sites",
          likes: 0,
          replies: [],
        },
      ],
    },
    {
      name: "Kibeho | Kigali | Gisenyi",
      country: "Rwanda",
      likes: 0,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      moreCities: ["Butare", "Muhanga", "Nyamata", "Rubavu"],
      showMore: false,
      comments: [
        {
          id: 4,
          user: "Emma",
          text: "Such a peaceful place",
          likes: 0,
          replies: [],
        },
        {
          id: 5,
          user: "David",
          text: "Unforgettable experience",
          likes: 0,
          replies: [],
        },
      ],
    },
    {
      name: "Cairo | Luxor | Alexandria",
      country: "Egypt",
      likes: 0,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      moreCities: ["Aswan", "Sharm El-Sheikh", "Dahab", "Hurghada"],
      showMore: false,
      comments: [
        {
          id: 6,
          user: "Alex",
          text: "The pyramids are breathtaking!",
          likes: 0,
          replies: [],
        },
        {
          id: 7,
          user: "Lisa",
          text: "Amazing historical sites",
          likes: 0,
          replies: [],
        },
      ],
    },
    {
      name: "Jerusalem | Haifa | Nazareth",
      country: "Israel",
      likes: 0,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      moreCities: ["Bethlehem", "Tiberias", "Safed", "Eilat"],
      showMore: false,
      comments: [
        {
          id: 8,
          user: "Rachel",
          text: "Such a spiritual experience",
          likes: 0,
          replies: [],
        },
        {
          id: 9,
          user: "Tom",
          text: "Rich in history and culture",
          likes: 0,
          replies: [],
        },
      ],
    },
  ];

  return (
    <section
      className="container mx-auto px-4 md:px-12 lg:px-20 py-10"
      data-aos="fade-up"
    >
      <div className="flex flex-wrap justify-center gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            {...destination}
            isSelected={selectedCommentCard === index}
            onCommentClick={() =>
              setSelectedCommentCard(
                selectedCommentCard === index ? null : index
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

function DestinationCard({
  name,
  country,
  likes,
  image,
  link,
  comments,
  isSelected,
  onCommentClick,
}) {
  const { t } = useTranslation();
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState(
    comments.map((comment) => ({
      ...comment,
      isLiked: false,
    }))
  );
  const [replyingTo, setReplyingTo] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentLike = (commentId) => {
    setLocalComments((comments) =>
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
              isLiked: !comment.isLiked,
            }
          : comment
      )
    );
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      if (replyingTo) {
        setLocalComments((comments) =>
          comments.map((comment) =>
            comment.id === replyingTo
              ? {
                  ...comment,
                  replies: [
                    ...comment.replies,
                    {
                      id: Date.now(),
                      user: "You",
                      text: newComment,
                      likes: 0,
                      isLiked: false,
                    },
                  ],
                }
              : comment
          )
        );
        setReplyingTo(null);
      } else {
        setLocalComments([
          ...localComments,
          {
            id: Date.now(),
            user: "You",
            text: newComment,
            likes: 0,
            replies: [],
            isLiked: false,
          },
        ]);
      }
      setNewComment("");
      setShowEmojiPicker(false);
    }
  };

  const onEmojiClick = (emoji) => {
    setNewComment((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <article
      className="flex flex-col w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-1/3 p-4"
      data-aos="zoom-in"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src={image}
          alt={`${name} destination`}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold mb-2">{country}</h3>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <div className="flex items-center">
              <span>{name}</span>
            </div>
          </div>
          <div className="text-xs flex justify-between items-center gap-2 text-gray-500 mt-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={onCommentClick}
            >
              <FaComment className="mr-2" size={20} />
              <span className="text-sm">{localComments.length} {t('view')}</span>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleLikeClick}
            >
              <FaHeart className={`mr-2 ${isLiked ? "text-red-500" : ""}`} size={20} />
              <span>{likeCount}</span>
            </div>
          </div>

          {isSelected && (
            <div className="mt-4 transition-all duration-300 ease-in-out">
              <div className="max-h-40 overflow-y-auto mb-4 bg-gray-50 rounded p-2">
                {localComments.map((comment) => (
                  <div key={comment.id} className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="font-semibold">{comment.user}: </span>
                        <span>{comment.text}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCommentLike(comment.id)}
                          className={`text-gray-500 hover:text-red-500 ${
                            comment.isLiked ? "text-red-500" : ""
                          }`}
                        >
                          <FaHeart size={16} />
                          {comment.likes > 0 && (
                            <span className="ml-1">{comment.likes}</span>
                          )}
                        </button>
                        <button
                          onClick={() => setReplyingTo(comment.id)}
                          className="text-sm text-gray-500 hover:text-gray-700"
                        >
                          💬 Reply
                        </button>
                      </div>
                    </div>
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="ml-6 mt-1 text-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-semibold">
                              {reply.user}:{" "}
                            </span>
                            <span>{reply.text}</span>
                          </div>
                          <button
                            onClick={() => handleCommentLike(reply.id)}
                            className={`text-gray-500 hover:text-red-500 ${
                              reply.isLiked ? "text-red-500" : ""
                            }`}
                          >
                            <FaHeart size={16} />
                            {reply.likes > 0 && (
                              <span className="ml-1">{reply.likes}</span>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <form onSubmit={handleAddComment} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={
                      replyingTo ? "Write a reply..." : "Add a comment..."
                    }
                    className="flex-1 px-3 py-1 border rounded-full text-sm"
                    name="comment"
                  />
                  <button
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="px-3 py-1 text-gray-500 hover:text-gray-700"
                  >
                    😊
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
                  >
                    {replyingTo ? "Reply" : "Post"}
                  </button>
                </div>
                {showEmojiPicker && (
                  <div className="flex flex-wrap gap-2 p-2 bg-white border rounded-lg">
                    {["😊", "😂", "❤️", "👍", "🎉", "🌟", "🔥", "💯"].map(
                      (emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() => onEmojiClick(emoji)}
                          className="text-xl hover:scale-110 transition-transform"
                        >
                          {emoji}
                        </button>
                      )
                    )}
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default MainComponent;

