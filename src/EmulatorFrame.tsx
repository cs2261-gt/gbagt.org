import CSS from 'csstype';

export default function EmulatorFrame() {

    const iframeStyles: CSS.Properties = {
        width: "480px",
        height: "320px",
        margin: "0 auto",
        display: "block"
    };

    return (
        <iframe src="/player.html" style={ iframeStyles }></iframe>
    )
}

