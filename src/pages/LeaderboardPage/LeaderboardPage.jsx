import React from 'react';
import Header from "../../components/Header/Header";
import Channel from "../../components/Channel/Channel";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

const LeaderboardPage = () => {
    return (
        <>
            <div className="container">
                <Channel />
            </div>
            <Leaderboard />
        </>
    );
};

export default LeaderboardPage;