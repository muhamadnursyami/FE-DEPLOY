import PropTypes from "prop-types";
import styles from "../pages/Halaman-Buku/buku.module.css";
import { useNavigate } from "react-router-dom";
export default function CardBuku({ book }) {
  const navigate = useNavigate();
  const handleClick = () => {
    // console.log(book.id);
    navigate(`/halaman-buku/detail-buku/${book._id}`);
    window.location.reload();
  };
  const authors = book.author.split(",").map((author) => author.trim());

  return (
    <>
      <div className="col-6">
        <div
          className=" card h-100 rounded-3"
          id={styles["warna-card"]}
          onClick={handleClick}
        >
          <img
            src={book.img_url}
            className="card-img-top p-2 rounded-4"
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">{book.title}</h6>
            <p id={styles["font-card-detail"]} className="opacity-50 mb-1">
              {authors[0]}
            </p>
            <div
              className="d-flex align-books-baseline"
              id={styles["font-card-detail"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <defs>
                  <linearGradient
                    id="star-gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#fffdee" }} />
                    <stop offset="100%" style={{ stopColor: "#ffee02" }} />
                  </linearGradient>
                </defs>
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.950l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256"
                  fill="url(#star-gradient)"
                />
              </svg>
              <span className="ms-1">{book.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardBuku.propTypes = {
  book: PropTypes.object,
};
