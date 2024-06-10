'use client';
import { useEffect, useState } from "react";

export default function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));

    useEffect(() => {
        const updateTime = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
        }, 1000);

        return() => clearInterval(updateTime);
    }, []);

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <p className='text-9xl text-[#F2F2F2] font-semibold'>{time}</p>
        </div>
    );
}