import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './data/user.json';
import data from './data/data.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </div>
  );
}
