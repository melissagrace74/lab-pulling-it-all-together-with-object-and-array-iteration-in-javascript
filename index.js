function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function allPlayers() {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;

    // Merge home and away players into one object
    const allPlayers = Object.assign({}, homePlayers, awayPlayers);

    return allPlayers;
}

function numPointsScored(playerName) {
    const players = allPlayers();
    if (players[playerName]) {
        return players[playerName].points;
    }
    return null; // player not found
}

function shoeSize(playerName) {
    const players = allPlayers();
    if (players[playerName]) {
        return players[playerName].shoe;
    }
    return null; // player not found
}

function teamColors(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    return null; // team not found
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    var players = null;

    if (game.home.teamName === teamName) {
        players = game.home.players;
    } else if (game.away.teamName === teamName) {
        players = game.away.players;
    }

    if (!players) return [];

    var numbers = [];
    for (var player in players) {
        numbers.push(players[player].number);
    }
    return numbers;
}

function playerStats(playerName) {
    const players = allPlayers();
    if (players[playerName]) {
        return players[playerName];
    }
    return null; // player not found
}

function bigShoeRebounds() {
    const players = allPlayers();
    var largestShoe = 0;
    var rebounds = 0;

    for (var player in players) {
        if (players[player].shoe > largestShoe) {
            largestShoe = players[player].shoe;
            rebounds = players[player].rebounds;
        }
    }

    return rebounds;
}

function mostPointsScored() {
    var players = allPlayers();
    var maxPoints = 0;
    var topScorer = "";

    for (var player in players) {
        if (players[player].points > maxPoints) {
            maxPoints = players[player].points;
            topScorer = player;
        }
    }

    return topScorer;
}

function winningTeam() {
    var game = gameObject();
    var homePoints = 0;
    var awayPoints = 0;

    var homePlayers = game.home.players;
    var awayPlayers = game.away.players;

    for (var player in homePlayers) {
        homePoints += homePlayers[player].points;
    }

    for (var player in awayPlayers) {
        awayPoints += awayPlayers[player].points;
    }

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    var players = allPlayers();
    var longestName = "";

    for (var player in players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
}

function doesLongNameStealATon() {
    var players = allPlayers();
    var longestName = playerWithLongestName();
    var maxSteals = 0;
    var topStealer = "";

    for (var player in players) {
        if (players[player].steals > maxSteals) {
            maxSteals = players[player].steals;
            topStealer = player;
        }
    }

    return longestName === topStealer;
}
