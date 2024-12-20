<template>
    <div class="mb-10">
        <h2>Para mejoras echar un vistazo a <a href="https://codesandbox.io/p/sandbox/keen-surf-jzygrm?file=%2Fsrc%2FApp.js">este marcador</a></h2>
    </div>
    <div class="w-100">
        <button @click="changeGoldPointFormat()">
            <span v-if="goldPoint">Formato Punto de Oro Activado</span>
            <span v-if="!goldPoint">Formato Punto de Oro Desactivado</span>
        </button>
    </div>
    <div class="d-flex">
        <div class="teams">
            <div
                class="team"
                v-for="(team, index) in teams"
                :key="index"
            >
            <h3>{{ team[0] }} / {{ team[1] }}</h3>
            </div>
        </div>
        <div class="sets d-flex ml-4">
            <div
                class="set ml-2"
                v-for="(set, index) in scoreSet"
                :key="index"
            >
                <div class="team1">
                    <h3>{{ set[0] }}</h3>
                </div>
                <div class="team2">
                    <h3>{{ set[1] }}</h3>
                </div>
            </div>
        </div>
        <div class="game">
            <div class="ml-4">
                <div class="team1">
                    <h3>{{ currentScoreGame[0] }}</h3>
                </div>
                <div class="team2">
                    <h3>{{ currentScoreGame[1] }}</h3>
                </div>
            </div>
        </div>
        <div class="controllers d-flex" v-if="!hasWinner">
            <div class="ml-4">
                <div class="team1">
                    <button @click="updateGameScore(0, 1, 1)">+ game</button>
                </div>
                <div class="team2">
                    <button @click="updateGameScore(1, 0, 1)">+ game</button>
                </div>
            </div>
            <div class="ml-4">
                <div class="team1">
                    <button @click="updateGameScore(0, 1, -1)">- game</button>
                </div>
                <div class="team2">
                    <button @click="updateGameScore(1, 0, -1)">- game</button>
                </div>
            </div>
        </div>
    </div>
    <div class="winner" v-if="hasWinner">
        <h1>Pareja ganadora: {{ teams[winner][0] }} / {{ teams[winner][1] }}</h1>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                winner: null,
                hasWinner: false,
                scoreMatch: [0, 0],
                currentScoreGame:[0, 0],
                currentSet: 0,
                scoreSet: [],
                
                gamePoints: [],
                maxGamesBySets: 6, 
                numSets: 3, 
                numSetsToWin: 2,
                goldPoint: true,
                isTieBreak: false,

                formatGamesAdvantage: [0, 15, 30, 40, 'AD'],
                formatGamesGoldPoint: [0, 15, 30, 40],
                formatTieBreak: 7,
                formatSuperTieBreak: 10,

                teams: [
                    ['Jugador 1', 'Jugador 2'],
                    ['Jugador 3', 'Jugador 4']
                ]
            }
        },
        methods: {
            changeGoldPointFormat(){
                this.goldPoint = !this.goldPoint;
            },

            updateGameScore(teamWin, teamLost, action){
                const indexTeamWin = this.gamePoints.indexOf(this.currentScoreGame[teamWin]);
                const indexTeamLost = this.gamePoints.indexOf(this.currentScoreGame[teamLost]);

                if(!this.isTieBreak){
                    if(!this.goldPoint){
                        this.gamePoints = [0, 15, 30, 40, 'AD'];
                    }else{
                        this.gamePoints = [0, 15, 30, 40];
                    }
                }else{
                    this.gamePoints = [];
                    for(let i = 0; i < this.formatTieBreak; i++){
                        this.gamePoints.push(i);
                    }
                }

                if (action === 1){
                    if(!this.isTieBreak){
                        if(!this.goldPoint){
                            if(this.currentScoreGame[teamWin] === 40 && this.currentScoreGame[teamLost] === 'AD'){
                                this.currentScoreGame = [this.gamePoints[indexTeamWin], this.gamePoints[indexTeamLost - 1]];
                            }else if((this.currentScoreGame[teamWin] === 'AD' && this.currentScoreGame[teamLost] === 40) || (this.currentScoreGame[teamLost] !== 40 && this.currentScoreGame[teamWin] === 40)){
                                this.currentScoreGame = [0, 0];
                                this.updateSetScore(teamWin, teamLost, 1);
                            }
                            else{
                                this.currentScoreGame[teamWin] = this.gamePoints[indexTeamWin + 1];
                            }
                        }else{
                            if(this.currentScoreGame[teamWin] === 40){
                                this.currentScoreGame = [0, 0];
                                this.updateSetScore(teamWin, teamLost, 1);
                            }else{
                                this.currentScoreGame[teamWin] = this.gamePoints[indexTeamWin + 1];
                            }
                            
                        }
                    }else{
                        this.currentScoreGame[teamWin] += 1;

                        if(this.currentScoreGame[teamWin] >= this.formatTieBreak && this.currentScoreGame[teamLost] <= (this.currentScoreGame[teamWin] - 2)){
                            this.currentScoreGame = [0, 0];
                            this.updateSetScore(teamWin, teamLost, 1);
                        }
                    }
                }else if (action === -1){
                    console.log('restar');
                }
            },
            updateSetScore(teamWin, teamLost, action){
                console.log(this.teams[teamWin][0])
                if(action === 1){
                    
                    if(this.scoreSet[this.currentSet][teamWin] >= (6 - 1) && (this.scoreSet[this.currentSet][teamLost] <= (this.scoreSet[this.currentSet][teamWin] - 1))){
                        this.scoreSet[this.currentSet][teamWin] += 1;
                        this.currentSet += 1;

                        this.scoreMatch[teamWin] += 1;
                        this.checkWinnerMatch(teamWin);
                    }else if(this.scoreSet[this.currentSet][teamWin] === 6 && this.scoreSet[this.currentSet][teamLost] === 6){
                        this.isTieBreak = false;
                        this.scoreSet[this.currentSet][teamWin] += 1;
                        this.currentSet += 1;

                        this.scoreMatch[teamWin] += 1;
                        this.checkWinnerMatch(teamWin);
                    }else{
                        this.scoreSet[this.currentSet][teamWin] += 1;
                        if(this.scoreSet[this.currentSet][teamWin] === 6 && this.scoreSet[this.currentSet][teamLost] === 6){
                            this.isTieBreak = true;
                        }
                    }
                }
            },
            checkWinnerMatch(teamWin){
                if(this.scoreMatch[teamWin] === this.numSetsToWin){
                    this.hasWinner = true;
                    this.winner = teamWin
                }
            }
        },
        mounted(){
            for(let i = 0; i < this.numSets; i++){
                this.scoreSet.push([0, 0]);
            }
        }
    }
</script>
