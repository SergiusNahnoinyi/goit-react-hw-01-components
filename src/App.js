import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
