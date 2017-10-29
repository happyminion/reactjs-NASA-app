import React, { Component } from 'react';

class Canvas extends React.Component {

    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,20);
        ctx.lineTo(30,230);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(30,242,12,0,2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,254);
        ctx.lineTo(30,280);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(30,292,12,0,2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,304);
        ctx.lineTo(30,330);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(30,342,12,0,2*Math.PI);
        ctx.lineWidth=1;
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,354);
        ctx.lineTo(30,580);
        ctx.stroke();

    }



    render() {
        return (
            <canvas ref="canvas" width={100} height={600}/>
        );
    }
}
export default Canvas;