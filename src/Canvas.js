import React, { Component } from 'react';
import './css/Canvas.css';

class Canvas extends React.Component {

    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,90);
        ctx.lineTo(30,250);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(30,262,12,0,2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,274);
        ctx.lineTo(30,300);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(30,312,12,0,2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,324);
        ctx.lineTo(30,350);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(30,362,12,0,2*Math.PI);
        ctx.lineWidth=1;
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.lineWidth=1;
        ctx.moveTo(30,374);
        ctx.lineTo(30,550);
        ctx.stroke();

    }



    render() {
        return (
            <canvas ref="canvas" width={100} height={600}/>
        );
    }
}
export default Canvas;