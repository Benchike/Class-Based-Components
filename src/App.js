import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
  { id: 'u4', name: 'John' },
  { id: 'u5', name: 'Jane' },
  { id: 'u6', name: 'Tom' },
  { id: 'u7', name: 'Kate' },
  { id: 'u8', name: 'Luke' },
  { id: 'u9', name: 'Maria' },
  { id: 'u10', name: 'Paul' },
  { id: 'u11', name: 'Olivia' },
  { id: 'u12', name: 'Sam' },
  { id: 'u13', name: 'Emily' },
  { id: 'u14', name: 'Henry' },
  { id: 'u15', name: 'Lucy' },
  { id: 'u16', name: 'Ben' },
  { id: 'u17', name: 'Nora' },
  { id: 'u18', name: 'David' },
  { id: 'u19', name: 'Grace' },
  { id: 'u20', name: 'Mike' },
  { id: 'u21', name: 'Sophie' },
  { id: 'u22', name: 'Chris' },
  { id: 'u23', name: 'Amy' },
  { id: 'u24', name: 'Frank' },
  { id: 'u25', name: 'Linda' },
  { id: 'u26', name: 'Jack' },
  { id: 'u27', name: 'Alice' },
  { id: 'u28', name: 'Ethan' },
  { id: 'u29', name: 'Mia' },
  { id: 'u30', name: 'George' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
