const SnippetForText = ({ text }) => {
  const maxLenght = 38;

  if (text.length <= maxLenght) {
    return <span>{text}</span>;
  }
  const shortText = text.slice(0, maxLenght) + "...";

  return <span>{shortText}</span>;
};

export default SnippetForText;
