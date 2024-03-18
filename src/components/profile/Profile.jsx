import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div>
        <img src={image} alt="User avatar" className={styles.profileImg} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileDescr}>{"@" + tag}</p>
        <p className={styles.profileDescr}>{location}</p>
      </div>
      <ul className={styles.profileStats}>
        <li className={styles.profileStat}>
          <span>Followers</span> <span>{stats.followers}</span>
        </li>
        <li className={styles.profileStat}>
          <span>Views</span> <span>{stats.views}</span>
        </li>
        <li className={styles.profileStat}>
          <span>Likes</span> <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
