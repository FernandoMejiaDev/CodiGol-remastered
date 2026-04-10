//It's necessary to be able to differentiate between plain text and code. 
// In Dialogs files, they used backticks to highlight code and remove it with regular expressions.

const renderTextWithCode = (text) => {

  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      const code = part.slice(1, -1); // delete backticks

      return (
        <span
          key={index}
          className="px-2 py-1 mx-1 font-mono text-white bg-stone-900/60 rounded"
        >
          {code}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

export default renderTextWithCode;