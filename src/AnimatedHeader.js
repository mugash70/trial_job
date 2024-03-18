import React, { useRef, useEffect, useState } from 'react';
import { TweenLite, Circ } from 'gsap';

function Circle(pos, rad, color) {
    this.pos = pos || null;
    this.radius = rad || null;
    this.color = color || null;
    this.active = 0;

    this.draw = function () {
        if (!this.active) return;
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
    };
}

function AnimatedHeader() {
    const canvasRef = useRef(null);
    const [points, setPoints] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [target, setTarget] = useState({ x: width / 2, y: height / 2 });
    const [animateHeader, setAnimateHeader] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = width;
        canvas.height = height;

        const pointsArray = [];
        for (let x = 0; x < width; x += width / 20) {
            for (let y = 0; y < height; y += height / 20) {
                const px = x + Math.random() * (width / 20);
                const py = y + Math.random() * (height / 20);
                const p = { x: px, originX: px, y: py, originY: py };
                pointsArray.push(p);
            }
        }

        pointsArray.forEach((p) => {
            const c = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
            c.ctx = ctx;
            p.circle = c;
        });

        setPoints(pointsArray);

        function handleMouseMove(e) {
            const posx = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            const posy = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            setTarget({ x: posx, y: posy });
        }

        function handleScroll() {
            setAnimateHeader(document.body.scrollTop <= height);
        }

        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [width, height]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                points.forEach((p) => {
                    if (Math.abs(getDistance(target, p)) < 4000) {
                        p.active = 0.3;
                        p.circle.active = 0.6;
                    } else if (Math.abs(getDistance(target, p)) < 20000) {
                        p.active = 0.1;
                        p.circle.active = 0.3;
                    } else if (Math.abs(getDistance(target, p)) < 40000) {
                        p.active = 0.02;
                        p.circle.active = 0.1;
                    } else {
                        p.active = 0;
                        p.circle.active = 0;
                    }

                    drawLines(p);
                    p.circle.draw();
                });
            }
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animate);
        };
    }, [animateHeader, points, target, width, height]);

    function drawLines(p) {
        const ctx = canvasRef.current.getContext('2d');
        if (!p.active || !p.closest) return; // Check if closest points are defined
        p.closest.forEach(closeP => {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(closeP.x, closeP.y);
            ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
            ctx.stroke();
        });
    }
    
    

    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    return (
        <div className="large-header" style={{ height }}>
            <canvas id="demo-canvas" ref={canvasRef}></canvas>
        </div>
    );
}

export default AnimatedHeader;
