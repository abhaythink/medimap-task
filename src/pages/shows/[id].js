
import Rating from "src/components/Rating";
import Schedule from "src/components/Schedule";
import styles from "./shows.module.css";

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const data = await res.json()

  return { props: { data } }
}

const ShowDetails = ({ data: show }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={show.image?.medium} alt={show.name} className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <h1>{show.name}</h1>
        {show.summary}
      </div>
      <div className={styles.showInfo}>
        <h2>Show Info</h2>
        <ul className={styles.itemList}>
          <li className={styles.item}>
            <strong>Network:</strong> {show.network?.name} (
            {show.premiered.substring(0, 4)} - now)
          </li>
          <li className={styles.item}>
            <strong>Schedule:</strong>{" "}
            <Schedule time={show.schedule?.time} days={show.schedule?.days} />
          </li>
          <li className={styles.item}>
            <strong>Status:</strong> {show.status}
          </li>
          <li className={styles.item}>
            <strong>Show Type:</strong> {show.type}
          </li>
          <li className={styles.item}>
            <strong>Genres:</strong> {show.genres.join(", ")}
          </li>
          <li className={styles.item}>
            <strong>Official Site:</strong>
            <a href={show.officialSite}>{show.officialSite}</a>
          </li>
          <li>
            <div>
              <Rating average={show.rating?.average} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShowDetails;
