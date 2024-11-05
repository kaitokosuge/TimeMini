import React from 'react';

export default function TimerButton({
    txt,
    handleClickBtn,
}: {
    txt: string;
    handleClickBtn: () => void;
}) {
    return <button onClick={handleClickBtn}>{txt}</button>;
}
