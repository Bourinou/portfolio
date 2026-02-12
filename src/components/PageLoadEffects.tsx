'use client';

import { useEffect } from 'react';

export default function PageLoadEffects() {
    useEffect(() => {
        document.body.classList.add('loaded');
        document.body.classList.add('fade-in');

        const ageText = document.getElementById('age');
        if (ageText) {
            const birthDate = new Date('2006-03-19');
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            ageText.textContent = age.toString() + ' ans';
        }
    }, []);
    return null;
}
