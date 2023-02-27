import React from 'react';
import Header from "../../components/Header/Header";
import Channel from "../../components/Channel/Channel";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

const LeaderboardPage = () => {
    return (
        <>
            <Channel />
            <Leaderboard />
        </>
    );
};

export default LeaderboardPage;