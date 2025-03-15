"use client";

import React from 'react';

const GoogleAd = ({ adSlot }: { adSlot: string }) => {
    return (
        <div>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9516918341435316"
            crossOrigin="anonymous"
          ></script>
          {/* <!-- Rectangular ad unit --> */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9516918341435316"
            data-ad-slot={adSlot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      );
  };



export default GoogleAd;