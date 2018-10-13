import React, { Component } from 'react';
import api from '../../services/api';
import classes from './FirstLoginConfig.css'
import Board from '../../components/Boards/Board/Board';

class FirstLoginConfig extends Component {

    state = {
        boards: []
    };

    componentWillMount() {
        this.loadBoardsJson();
    }

    loadBoardsJson = async () => {
        const key = '...';
        const token = '...';
        const response = await api.get(`/1/members/me/boards?key=${key}&token=${token}`);
        
        const json = response.data;
        const arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push([key, json[key]]);
        });
        this.setState({ boards: arr})
    }

    render() {
        return (
            <>
                <div><strong><h3>Selecione um dos Boards abaixo para ser o principal:</h3></strong></div>
                <ul className={classes.BoardList}>
                    {this.state.boards.map(bl => <Board key={bl[0]} name={bl[1].name} description={bl[1].desc} />)}}
                </ul>
                
            </>
        );
    }
}

export default FirstLoginConfig;