import { useNavigate } from "react-router-dom";
import s from "./NotFoundPage.module.css";

function NotFoundPage() {
  const navigate = useNavigate();
  const goHomeHandler = () => navigate("/");

  return (
    <>
      <div className={s.title}>Page not found</div>
      <div className={s.container}>
        <button onClick={goHomeHandler}>Go back home</button>
      </div>
    </>
  );
}
export default NotFoundPage;
