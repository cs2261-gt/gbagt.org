import CSS from 'csstype';

interface EmulatorProps {
    game: string;
    width?: string;
    height?: string;

}

export default function EmulatorFrame({ game = "", width = "480px", height = "320px"} : EmulatorProps) {

    const iframeStyles: CSS.Properties = {
        width: width,
        height: height,
        margin: "0 auto",
        display: "block"
    };

    const src: string = "/player.html" + game;

    return (
        <iframe src={ src } style={ iframeStyles }></iframe>
    )
}

