"use client";
import React, { Fragment, ReactNode, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
    children: ReactNode;
  };
  
  declare global {
    interface Window {
      adsbygoogle?: any | any[];
    }
  }

const GoogleAd = ({ children }: Props) => {
    const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [pathname, searchParams]);
  return <Fragment>{children}</Fragment>;
};

export default GoogleAd;
