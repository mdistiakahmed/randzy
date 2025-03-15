"use client";
import React, { useEffect } from "react";

const GoogleAd = ({ adSlot }: { adSlot: string }) => {


  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      if (!window.adsbygoogle.loaded) {
        window.adsbygoogle.loaded = true;
        window.adsbygoogle.push({});
      }
    }
  }, []);
  

  return (
    <div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9516918341435316"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9516918341435316"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
