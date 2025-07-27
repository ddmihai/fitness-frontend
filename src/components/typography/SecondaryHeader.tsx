interface SecondaryHeaderProps {
    title: string;
    colour: 'primary' | 'secondary' | 'accent' | 'dark' | 'light';
}


const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({ title, colour }) => {
    return (
        <h1 className={`text-2xl text-${colour} font-serif`}>
            {title}
        </h1>
    );
};

export default SecondaryHeader;
