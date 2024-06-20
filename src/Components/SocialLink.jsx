import React from "react";

const SocialLink = (socialLinks) => {

    return (socialLinks.props.map(function (social) {
        return (
            <a href={social.url} className={social.name} target="__blank"><i className={social.className}></i></a>
        )
    }))
}

export default SocialLink;