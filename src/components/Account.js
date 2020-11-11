import React, { useState } from 'react'
import { Button, Grid, Header, Icon, Input, Segment } from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../redux/actions';

export default function Account(props) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [newAmount, setNewAmount] = useState(0);

    const handlePlus = () => {
        dispatch(increment(parseFloat(newAmount), props.id));
        setNewAmount(0);
    }

    const handleMinus = () => {
        dispatch(decrement(parseFloat(newAmount), props.id));
    }

    console.log(state);
    return (
        <Segment>
            <Grid>
                <Grid.Row>
                <Grid.Column>
                <Header as="h2" textAlign="center">{props.title}</Header>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                    <Segment>
                    <Grid>
                        <Grid.Row>
                        <Grid.Column>
                            <Header size="huge" color="blue">{state[props.id]}</Header>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                        <Button icon onClick={handleMinus}>
                            <Icon name="minus" />
                        </Button>
                        <Input type="number" onChange={(e) => {setNewAmount(e.target.value)}} value={newAmount}/>
                        <Button icon onClick={handlePlus}>
                            <Icon name="plus" />
                        </Button>
                        </Grid.Row>
                    </Grid>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
    )
}
