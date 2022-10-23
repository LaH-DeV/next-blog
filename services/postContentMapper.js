import React from "react";

const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    if (obj) {
        if (obj.bold) {
            modifiedText = <strong key={index}>{text}</strong>;
        }
        if (obj.italic) {
            modifiedText = <em key={index}>{text}</em>;
        }
        if (obj.underline) {
            modifiedText = <u key={index}>{text}</u>;
        }
    }

    switch (type) {
        case "heading-one":
            return (
                <h1 key={index} className="">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h1>
            );
        case "heading-two":
            return (
                <h2 key={index} className="">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h2>
            );
        case "heading-three":
            return (
                <h3 key={index} className="">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h3>
            );
        case "heading-four":
            return (
                <h4 key={index} className="">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h4>
            );
        case "heading-five":
            return (
                <h5 key={index} className="">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h5>
            );
        case "heading-six":
            return (
                <h6 key={index} className="">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h6>
            );
        case "paragraph":
            return (
                <p key={index} className="">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </p>
            );
        case "heading-four":
            return (
                <h4 key={index} className="text-md font-semibold mb-4">
                    {modifiedText.map((item, i) => (
                        <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                </h4>
            );
        case "image":
            return <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} loading="lazy" />;
        default:
            return modifiedText;
    }
};

export default getContentFragment;