'use client';
import { useState } from "react";
import "./projets.css";

export default function ProjetsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [activeImg, setActiveImg] = useState<{ src: string; alt: string } | null>(null);

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG' && target.closest('.item-galerie')) {
            const img = target as HTMLImageElement;
            setActiveImg({
                src: img.src || img.getAttribute('src') || '',
                alt: img.alt || ''
            });
        }
    };

    return (
        <div onClick={handleImageClick}>
            {children}
            {activeImg && (
                <div 
                    className="lightbox-overlay" 
                    onClick={() => setActiveImg(null)}
                >
                    <div className="lightbox-content">
                        <img src={activeImg.src} alt={activeImg.alt} className="lightbox-img" />
                        {activeImg.alt && <p className="lightbox-caption">{activeImg.alt}</p>}
                        <button className="lightbox-close">&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
}

