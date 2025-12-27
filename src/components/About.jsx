export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#121212",
    backgroundColor: props.mode === "dark" ? "#121212" : "white",
  };

  return (
    <div className="w-full" style={myStyle}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 my-6 text-center">
        <h1 className="font-bold text-2xl sm:text-3xl mb-6">
          Analyze Your Text
        </h1>

        <p className="mb-4 text-sm sm:text-base leading-relaxed">
          TextUtils gives you a way to analyze your text quickly and efficiently.
          Be it word count, character count or converting text case.
        </p>

        <p className="mb-4 text-sm sm:text-base leading-relaxed">
          This project is created for learning React concepts like components,
          props, state, and event handling. TextUtils is a free character counter
          tool that provides instant character count & word count statistics for
          a given text.
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          This word counter software works in any web browser such as Chrome,
          Firefox, Safari, and more. It is useful for blogs, essays, documents,
          and social media content.
        </p>
      </div>
    </div>
  );
}
