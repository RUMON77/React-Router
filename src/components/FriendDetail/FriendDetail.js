
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {fid} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${fid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))

    } , []);
    return (
        <div>
            <p>This is friend details: {fid}</p>
            <h3>{friend.name}</h3>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>


        </div>
    );
};

export default FriendDetail;