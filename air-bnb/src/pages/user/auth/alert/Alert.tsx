import React, { useEffect, useState } from 'react'

interface AlertProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

export default function Alert(props: any) {
    const { message, type, onClose } = props;
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <>
            {showAlert && (
                <div className={
                    `
                    w-60 text-center
                    fixed top-10 mt-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-opacity-100 z-50 py-3 px-0 text-sm 
                    text-${type === 'success' ? 'green' : 'red'}-800 rounded-lg 
                    bg-${type === 'success' ? 'green' : 'red'}-300 dark:bg-gray-800 
                    dark:text-${type === 'success' ? 'green' : 'red'}-400
                    `
                } role="alert">
                    <span className="font-semibold">
                        {type === 'success' ? 'Success! ' : 'Error! '}
                    </span>
                    {message}
                </div>
            )}
        </>
    );
};