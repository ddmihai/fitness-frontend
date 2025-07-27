interface PrimaryHeaderProps {
    title: string;
    colour: 'primary' | 'secondary' | 'accent' | 'dark' | 'light';
}


const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({ title, colour }) => {
    return (
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-${colour}`}>
            {title}
        </h1>
    );
};

export default PrimaryHeader;
