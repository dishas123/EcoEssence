import React, { useState } from 'react';

const Rewards = () => {
    const rewards = [
        { description: '10% off your next purchase', points: 100 },
        { description: 'Free shipping on your next order', points: 200 },
        { description: 'Exclusive access to new products', points: 300 },
    ];

    const [selectedReward, setSelectedReward] = useState('');

    const handleRewardSelection = (event) => {
        setSelectedReward(event.target.value);
    };

    return (
        <div
            style={{
                padding: '20px',
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center',
                backgroundColor: 'aquamarine',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h1 style={{ color: '#005f73', fontSize: '2rem' }}>Your Rewards</h1>
            <p style={{ fontSize: '1rem', color: '#023047' }}>
                You will gain points worth <strong>10% of your purchase cost!</strong>
            </p>
            <p style={{ fontSize: '1rem', color: '#023047', marginBottom: '20px' }}>
                You can use your points for any of the following:
            </p>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {rewards.map((reward, index) => (
                    <li
                        key={index}
                        style={{
                            fontSize: '1rem',
                            color: '#002233',
                            margin: '10px 0',
                            padding: '10px',
                            backgroundColor: '#0abab5',
                            borderRadius: '5px',
                        }}
                    >
                        {reward.description} - <strong>{reward.points} points</strong>
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: '20px' }}>
                <label htmlFor="reward-select" style={{ fontSize: '1rem', color: '#023047' }}>
                    Choose a reward:
                </label>
                <select
                    id="reward-select"
                    value={selectedReward}
                    onChange={handleRewardSelection}
                    style={{
                        marginLeft: '10px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        border: '1px solid #005f73',
                        fontSize: '1rem',
                    }}
                >
                    <option value="">-- Select a reward --</option>
                    {rewards.map((reward, index) => (
                        <option key={index} value={reward.description}>
                            {reward.description}
                        </option>
                    ))}
                </select>
            </div>

            {selectedReward && (
                <p style={{ marginTop: '20px', fontSize: '1rem', color: '#002233' }}>
                    You selected: <strong>{selectedReward}</strong>
                </p>
            )}
        </div>
    );
};

export default Rewards;
