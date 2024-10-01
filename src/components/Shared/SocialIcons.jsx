import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '../../assets/Icons/FacebookIcon';
import TwitterIcon from '../../assets/Icons/TwitterIcon';
import InstaIcon from '../../assets/Icons/InstaIcon';
import GitIcon from '../../assets/Icons/GitIcon';

const SocialIcons = () => {
  // States for individual icons
  const [facebookFill, setFacebookFill] = useState("#fff");
  const [facebookCircle, setFacebookCircle] = useState(['#000', '#D4D4D8']);

  const [twitterFill, setTwitterFill] = useState("#fff");
  const [twitterCircle, setTwitterCircle] = useState(['#000', '#D4D4D8']);

  const [instaFill, setInstaFill] = useState("#fff");
  const [instaCircle, setInstaCircle] = useState(['#000', '#D4D4D8']);

  const [gitFill, setGitFill] = useState("#fff");
  const [gitCircle, setGitCircle] = useState(['#000', '#D4D4D8']);

  return (
    <div>
      
      <div className="flex space-x-4">
        {/* Social Icons */}
        <a href="#Facebook" className="hover:text-gray-400">
          <FacebookIcon
            circles={facebookCircle}
            fill={facebookFill}
            onMouseEnter={() => {
              setFacebookFill("#000");
              setFacebookCircle(['#FDD362', 'transparent']);
            }}
            onMouseLeave={() => {
              setFacebookFill("#fff");
              setFacebookCircle(['#000', '#D4D4D8']);
            }}
          />
        </a>
        <a href="#Twitter" className="hover:text-gray-400">
          <TwitterIcon
            circles={twitterCircle}
            fill={twitterFill}
            onMouseEnter={() => {
              setTwitterFill("#000");
              setTwitterCircle(['#FDD362', 'transparent']);
            }}
            onMouseLeave={() => {
              setTwitterFill("#fff");
              setTwitterCircle(['#000', '#D4D4D8']);
            }}
          />
        </a>
        <a href="#Insta" className="hover:text-gray-400">
          <InstaIcon
            circles={instaCircle}
            fill={instaFill}
            onMouseEnter={() => {
              setInstaFill("#000");
              setInstaCircle(['#FDD362', 'transparent']);
            }}
            onMouseLeave={() => {
              setInstaFill("#fff");
              setInstaCircle(['#000', '#D4D4D8']);
            }}
          />
        </a>
        <a href="#Git" className="hover:text-gray-400">
          <GitIcon
            circles={gitCircle}
            fill={gitFill}
            onMouseEnter={() => {
              setGitFill("#000");
              setGitCircle(['#FDD362', 'transparent']);
            }}
            onMouseLeave={() => {
              setGitFill("#fff");
              setGitCircle(['#000', '#D4D4D8']);
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
