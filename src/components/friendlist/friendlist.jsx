import css from '../friendlist/friendlist.module.css'
import PropTypes from 'prop-types';
export const FriendList = ({friends}) => {
    return (
        <div className="friends">
        <ul className="friend-list">
        {friends.map(friend =>{
            return (
                <li className={css.item} key={friend.id}>
                <span className={friend.isOnline ? css.onlineStatus : css.offlineStatus}></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.name}>{friend.name}</p>
                </li>
            )
        })}
        </ul>
        </div>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
    ).isRequired,
};

