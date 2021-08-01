
import React from 'react';
import Box from '../atoms/Box';

export default function ErrorCard({ error }: ErrorCardProps) {
    return (<div className="errorCard">
        <Box>
            <h1>{error.errorTitle}</h1>
            <p>{error.errorDescription}</p>
            <p>{error.errorLog}</p>
        </Box>
    </div>);
}

interface ErrorCardProps {
    error: Error;
}

interface Error {
    errorTitle: string,
    errorDescription: string,
    errorLog: string,
}