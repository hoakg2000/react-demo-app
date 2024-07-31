import { ReactNode } from 'react';

type MyFromItemProps = {
    children: ReactNode;
    label: string;
    value?: string | number | boolean;
    onChange?: (value: string | number | boolean) => void;
};

const MyFromItem = ({ children, label, value, onChange }: MyFromItemProps) => {
    return (
        <div
            style={{
                display: 'flex',
                marginBottom: '16px', // Space between items
                alignItems: 'center', // Vertically center content
            }}
        >
            <div
                style={{
                    flex: '0 0 30%', // 30% width for the label
                    paddingRight: '16px', // Space between label and content
                    fontWeight: 'bold', // Make the label text bold
                }}
            >
                {label}
            </div>
            <div
                style={{
                    flex: '1', // Take the remaining width
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default MyFromItem;
