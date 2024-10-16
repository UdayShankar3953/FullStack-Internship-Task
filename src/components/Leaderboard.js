import React, { useState } from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // Define the top users
  const topUsers = [
    { 
      name: 'Sam', mail: 'sam@gmail.com', gender: 'Male', memberSince: '2022', 
      score: 15, prize: 25, rank: 1, 
      avatar: 'https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-5507.jpg', 
      dailyPoints: 10, dailyStars: 5, weeklyPoints: 50, weeklyStars: 15, monthlyPoints: 150, monthlyStars: 30 
    },
    { 
      name: 'Mia', mail: 'mia@gmail.com', gender: 'Female', memberSince: '2021', 
      score: 12, prize: 20, rank: 2, 
      avatar: 'https://thumbs.dreamstime.com/b/businesswoman-avatar-cartoon-character-profile-picture-short-hair-portrait-round-icon-vector-illustration-graphic-design-149146952.jpg', 
      dailyPoints: 8, dailyStars: 4, weeklyPoints: 45, weeklyStars: 10, monthlyPoints: 140, monthlyStars: 28 
    },
    { 
      name: 'Steve', mail: 'steve@gmail.com', gender: 'Male', memberSince: '2020', 
      score: 10, prize: 15, rank: 3, 
      avatar: 'https://www.meirc.com/assets/images/plus/testimonials/western-businessman.png', 
      dailyPoints: 6, dailyStars: 3, weeklyPoints: 40, weeklyStars: 8, monthlyPoints: 120, monthlyStars: 25 
    }
  ];

// Define other users
const otherUsers = [
  { 
    name: 'Tyler', mail: 'tyler@gmail.com', gender: 'Male', memberSince: '2019', 
    score: 9, prize: 12, rank: 4, 
    avatar: 'https://th.bing.com/th/id/OIP.38lAP6kfwfrYnsXUE9HdHgHaHQ?pid=ImgDet&w=474&h=464&rs=1', 
    dailyPoints: 5, dailyStars: 2, weeklyPoints: 35, weeklyStars: 6, monthlyPoints: 110, monthlyStars: 20 
  },
  { 
    name: 'Mark', mail: 'mark@gmail.com', gender: 'Male', memberSince: '2020', 
    score: 8, prize: 10, rank: 5, 
    avatar: 'https://cdn-icons-png.freepik.com/512/11507/11507579.png', 
    dailyPoints: 4, dailyStars: 2, weeklyPoints: 30, weeklyStars: 5, monthlyPoints: 100, monthlyStars: 18 
  },
  { 
    name: 'Jonathan', mail: 'jonathan@gmail.com', gender: 'Male', memberSince: '2018', 
    score: 6, prize: 8, rank: 6, 
    avatar: 'https://www.dp-recruitment.com/userfiles/images/Asset158x.png', 
    dailyPoints: 3, dailyStars: 1, weeklyPoints: 25, weeklyStars: 4, monthlyPoints: 90, monthlyStars: 15 
  },
  { 
    name: 'Ross', mail: 'ross@gmail.com', gender: 'Male', memberSince: '2017', 
    score: 5, prize: 5, rank: 7, 
    avatar: 'https://i.fbcd.co/avatars/default/avatar_9.png', 
    dailyPoints: 2, dailyStars: 1, weeklyPoints: 20, weeklyStars: 3, monthlyPoints: 80, monthlyStars: 12 
  },
  { 
    name: 'Susie', mail: 'susie@gmail.com', gender: 'Female', memberSince: '2021', 
    score: 4, prize: 3, rank: 8, 
    avatar: 'https://i.fbcd.co/avatars/default/avatar_83.png', 
    dailyPoints: 1, dailyStars: 0, weeklyPoints: 15, weeklyStars: 2, monthlyPoints: 70, monthlyStars: 10 
  }
];


  // Function to handle clicking on a user and setting selected user details
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <>


      <div className="leaderboard-container">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <div className="tab-buttons">
            <button className="tab-button active">Week</button>
            <button className="tab-button">Month</button>
            <button className="tab-button">Year</button>
          </div>
        </div>

        {/* Top Users */}
        <div className="top-users-wrapper text-center mb-5">
          <div className="top-users-box">
            {topUsers.map((user) => (
              <div 
                key={user.rank} 
                className={`user-card rank-${user.rank}`} 
                onClick={() => handleUserClick(user)}
              >
                <div className={`crown crown-${user.rank === 1 ? 'gold' : user.rank === 2 ? 'silver' : 'bronze'}`}></div>
                <img 
                  src={user.avatar} 
                  className="rounded-circle user-avatar" 
                  alt={user.name} 
                />
                <h5>{user.name}</h5>
                <p className="score">Score: {user.score}</p>
                <p className="prize">Prize: ₹{user.prize}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Users */}
        <div className="other-users">
          {otherUsers.map(user => (
            <div className="user-entry" key={user.rank} onClick={() => handleUserClick(user)}>
              <div className="user-info">
                <img src={user.avatar} alt={user.name} className="rounded-circle" />
                <div>
                  <h6 className="user-name">{user.name}</h6>
                  <small className="user-rank">Rank: {user.rank}</small>
                </div>
              </div>
              <div className="user-scores">
                <span className="badge bg-primary me-2">₹{user.prize}</span>
                <span className="badge bg-secondary">{user.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for User Details */}
      {selectedUser && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{selectedUser.name}</h4>
            <button onClick={closeModal}>Close</button>
            
            <div className="user-info-box">
              <p><span>Email:</span> {selectedUser.mail}</p>
            </div>
            <div className="user-info-box">
              <p><span>Gender:</span> {selectedUser.gender}</p>
            </div>
            <div className="user-info-box">
              <p><span>Member Since:</span> {selectedUser.memberSince}</p>
            </div>

            <div className="info-group">
              <div className="info-box">
                <h5>Daily Points</h5>
                <p>{selectedUser.dailyPoints}</p>
              </div>
              <div className="info-box">
                <h5>Daily Stars</h5>
                <p>{selectedUser.dailyStars}</p>
              </div>
            </div>

            <div className="info-group">
              <div className="info-box">
                <h5>Weekly Points</h5>
                <p>{selectedUser.weeklyPoints}</p>
              </div>
              <div className="info-box">
                <h5>Weekly Stars</h5>
                <p>{selectedUser.weeklyStars}</p>
              </div>
            </div>

            <div className="info-group">
              <div className="info-box">
                <h5>Monthly Points</h5>
                <p>{selectedUser.monthlyPoints}</p>
              </div>
              <div className="info-box">
                <h5>Monthly Stars</h5>
                <p>{selectedUser.monthlyStars}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </>
  );
};

export default Leaderboard;
