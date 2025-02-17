const Button = ({ onClick, text }: { onClick: () => void; text: string }) => {
  return (
    <button style={{ fontSize: "20px" }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
