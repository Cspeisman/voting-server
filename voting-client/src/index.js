import React from 'react';
import Voting from './components/Voting';
import {render} from 'react-dom';

const pair = ['Trainspotting', '28 Days Later'];

render(<Voting pair={pair} />, document.getElementById('app'))
