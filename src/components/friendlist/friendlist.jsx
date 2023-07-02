export const FriendList = ({friends}) => {
    return (
        <div className="friends">
        <ul className="friend-list">
        {friends.map(friend =>{
            return (

                <li className="item" key={friend.id}>
                <span className="status"></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
                </li>
            )
        })}
        </ul>
        </div>
    )
}