import { useRef, useEffect } from "react";

const ResizingLine = ({ setPreviewWidth }) => {
    const ResizerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPreviewWidth(e.clientX);
        };

        const stopResize = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopResize);
        };

        const startResize = () => {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", stopResize);
        };

        const resizer = ResizerRef.current;
        if (resizer) {
            resizer.addEventListener("mousedown", startResize);
        }

        return () => {
            if (resizer) resizer.removeEventListener("mousedown", startResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", stopResize);
        };
    }, [setPreviewWidth]); 

    return (
        <div
            ref={ResizerRef}
            className="relative z-50 w-2 bg-yellow-500 cursor-col-resize hover:bg-yellow-700"
        ></div>
    );
};

export default ResizingLine;