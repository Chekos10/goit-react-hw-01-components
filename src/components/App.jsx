import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

import { Profile } from './profile/profile';
import { Statistics } from './statistic/statistic';
import { FriendList } from './friendlist/friendlist';
import { TransactionHistory } from './transaction/transactions';



export const App = () => {
  return (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics title="Upload stats"
    statss={data}
    />
    <FriendList 
    friends={friends} 
    />
    <TransactionHistory items={transactions} />
    </>
  )
}
