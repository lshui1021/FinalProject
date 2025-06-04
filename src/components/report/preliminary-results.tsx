import { useEffect, useRef, useState } from 'react';
import importImg from '/src/assets/import.png';
import refactImg from '/src/assets/refact.png';
import parseImg from '/src/assets/parse.png'; 
import resultImg from '/src/assets/result.png'; 
import result2Img from '/src/assets/result2.png'; 

const images = [
    { src: importImg, alt: 'ImportActiveFileDataProcess' },
    { src: refactImg, alt: 'RefactActiveFileOutPutCSV' },
    { src: parseImg, alt: 'ParseFinalResultCSV' }
];

function PreResults() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;

        let startX = 0, startY = 0;
        let isDragging = false;

        const updateTransform = () => {
            if (image) {
                image.style.transform = `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`;
                image.style.cursor = scale > 1 ? 'move' : 'zoom-in';
            }
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            const newScale = Math.min(Math.max(scale * delta, 0.5), 3);
            if (newScale !== scale) {
                setScale(newScale);
                if (newScale <= 1) {
                    setTranslate({ x: 0, y: 0 });
                }
            }
        };

        const handleMouseDown = (e: MouseEvent) => {
            if (scale <= 1) return;
            isDragging = true;
            startX = e.clientX - translate.x;
            startY = e.clientY - translate.y;

            const onMouseMove = (e: MouseEvent) => {
                if (!isDragging) return;
                setTranslate({ x: e.clientX - startX, y: e.clientY - startY });
            };

            const onMouseUp = () => {
                isDragging = false;
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        updateTransform();

        image.addEventListener('wheel', handleWheel);
        image.addEventListener('mousedown', handleMouseDown);

        return () => {
            image.removeEventListener('wheel', handleWheel);
            image.removeEventListener('mousedown', handleMouseDown);
        };
    }, [scale, translate, currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setScale(1);
        setTranslate({ x: 0, y: 0 });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setScale(1);
        setTranslate({ x: 0, y: 0 });
    };
    return (
        <div className="report-page">
            <h2 id="report-tool">伍、初步成果展示</h2>
            <h4>一、 程式碼-流程圖</h4>
            <div className="carousel-wrapper">
            <div className="carousel-header">
                <button onClick={handlePrev}>← 上一張</button>
                <span>{images[currentIndex].alt}</span>
                <button onClick={handleNext}>下一張 →</button>
            </div>
            <div className="image-wrapper">
                <div className="zoom-container" ref={containerRef}>
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="image-content"
                        ref={imageRef}
                    />
                </div>
            </div>
        </div>
            <h4>二、 系統頁面</h4>
            <img
                src={resultImg}
                />
            <img
                src={result2Img}
                />
        </div>
    );
}

export default PreResults;
