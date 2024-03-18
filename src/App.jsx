import "./App.css";
import Title from "./components/title/Title";
import Profile from "./components/profile/Profile";
import FriendList from "./components/friendList/FriendList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Title title={"Task 1 Profile"} />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <Title title={"Task 2 Friend list"} />
      <FriendList friends={friends} />

      <Title title={"Task 3 Transaction history"} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
