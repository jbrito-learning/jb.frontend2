type Props = {
  data: {
    title: string;
    description: string;
    buttonText: string;
  };
};

const buttonClick = () => {
  window.alert("Button Clicked");
};

export const Card: React.FC<Props> = ({ data }) => {
  return (
    <div style={style.card}>
      <div style={style.title}>{data.title}</div>
      <div style={style.description}>{data.description}</div>
      <button onClick={buttonClick}>{data.buttonText}</button>
    </div>
  );
};

const style = {
  card: {
    padding: "12px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    color: "black",
    boxShadow: "4px 2px 4px #000",
  },
  title: {
    fontSize: "30px",
  },
  description: {
    fontSize: "20px",
  },
};
