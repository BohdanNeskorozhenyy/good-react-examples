import {useEffect, useRef} from "react";

const Component = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Утверждаем что объект пользователя является объектом с полями name и age
        const canvas = canvasRef.current as unknown as HTMLCanvasElement;
        // const canvas = canvasRef.current as HTMLCanvasElement;

        console.log(canvas);
    }, []);

    return <canvas ref={canvasRef}/>;
}

export default Component;
