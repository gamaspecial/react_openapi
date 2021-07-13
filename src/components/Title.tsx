import React, { useEffect, useState } from 'react';
import { Pong, HealthcheckApi, MurmursApi } from '../openapi'
import Typography from "@material-ui/core/Typography";

interface Props {
    message: string;
}

export const Title: React.FC<Props> = (props) => {

    const [pong, setPong] = useState<Pong[]>();

    useEffect(() => {
        new HealthcheckApi().healthcheck({ "ping": true }).then((response) => {
            console.log(response.data);
            setPong(response.data);
        }).catch((e) => {
            console.log(e);
        });
    }, [])

    return (
        <Typography variant="h4" component="h4">
            {props.message}
        </Typography>
    );
}
