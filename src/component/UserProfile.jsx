import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function UserProfile(props) {
  const { name, role, age, isOnline, bio, socials } = props;

  return (
    <div className="profile-card">
      <h2 className="profile-name">
        {name}
        {/* Conditional rendering based on the isOnline boolean */}
        {isOnline ? (
          <span className="status status-online">● Online</span>
        ) : (
          <span className="status status-offline">● Offline</span>
        )}
      </h2>

      <p><strong>Role:</strong> {role}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {bio}</p>

      <div className="socials">
        <strong>Socials:</strong>
        <ul>
          <li>
            <a href={`https://github.com/${socials.github.replace('@', '')}`} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub: {socials.github}
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/${socials.twitter.replace('@', '')}`} target="_blank" rel="noreferrer">
              <FaTwitter /> Twitter: {socials.twitter}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}