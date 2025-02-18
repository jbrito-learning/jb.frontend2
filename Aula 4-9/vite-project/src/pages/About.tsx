import { useParams } from "react-router-dom";

const AboutPage = () => {
  const { id } = useParams();
  return <div>Id: {id}</div>;
};

export default AboutPage;
