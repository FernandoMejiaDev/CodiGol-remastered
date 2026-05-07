import { useEffect, useState } from "react";

const styles = {

  complete: {
    border: "border-lime-500",
    text: "text-lime-600",
    face: "Face1.webp",
    commentator: "Commentator1.webp",
  },
  success: {
    border: "border-cyan-500",
    text: "text-cyan-600",
    face: "Face1.webp",
    commentator: "Commentator1.webp",

  },
  warning: {
    border: "border-yellow-500",
    text: "text-yellow-600",
    face: "Face2.webp",
    commentator: "Commentator2.webp",
  },
  error: {
    border: "border-red-500",
    text: "text-red-600",
    face: "Face3.webp",
    commentator: "Commentator3.webp",
  }
};

const AlertFeedback = ({ 
  message, 
  mode = "training", 
  type = "error", 
  duration = 5000, 
  onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        onClose && onClose();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

   const currentStyle = styles[type] || styles.success;

  const currentImage =
    mode === "match"
      ? currentStyle.commentator
      : currentStyle.face;

  return (
    <div
      className={`
        fixed top-5 right-5 z-50
        transition-all duration-300 ease-in-out
        ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    >
      <div className={`flex items-center gap-2 p-4 text-white border-l-4 rounded-lg shadow-lg bg-neutral-900 ${styles[type]?.border || styles.success.border}`}>

        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className={`flex-shrink-0 w-5 h-5 ${styles[type]?.text || styles.success.text}`}
        >
          <path
            d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        <p className="text-base font-semibold max-w-96">
          {message}
        </p>

        <img
          src={`/img/${currentImage}`}
          alt="Character"
          className="object-contain w-12 h-12"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AlertFeedback;