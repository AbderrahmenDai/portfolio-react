import React from 'react';

import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoGithub } from "react-icons/io5";

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <IoLogoGithub />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <IoLogoLinkedin />
        </div>
    </div>
);

export default SocialMedia;