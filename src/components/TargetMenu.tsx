import React from 'react';
import '../styling/TargetMenu.css';

interface Props {
    isLeft: boolean,
    pageX: number,
    pageY: number,
    targets: {
        name: string,
        startX: number,
        startY: number,
        endX: number,
        endY: number
    }[]
}

const TargetMenu: React.FC<Props> = ({ 
    isLeft, pageX, pageY, targets
}) => {
    let leftCss: string;
    if (isLeft) {
        leftCss = `calc((calc(${pageX}px - calc(var(--target-box-size) * 2))) - 30px);`;
    } else {
        leftCss = `calc((calc(${pageX}px + calc(var(--target-box-size) * 0.5))) + 30px);`;
    }
    const css = `
    .target-menu {
        position: absolute;
        top: calc(${pageY}px - calc(var(--target-box-size) / 2));
        left: ${leftCss}
        border-radius: ${isLeft ? '20% 0% 0% 20%' : '0% 20% 20% 0%'};
    }
    `

    return (
        <div className="target-menu">
            <style>{css}</style>
            {targets.map((target) => {
                return(
                    <div key={target.name}>{target.name}</div>
                )
            })}
        </div>
    );
}

export default TargetMenu;
