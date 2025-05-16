import React, { useDebugValue, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';

const SEO = () => {
  const [seoData, setSeoData] = useState(null);
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname === '/' ? 'home' : location.pathname.replace(/^\/+|\/+$/g, '');
    fetchSEO(path);
  }, [location.pathname]);

  const fetchSEO = async (slug, fetchAgain = false) => {
    try {
      let mainslug = slug;
      if (fetchAgain) {
        mainslug = 'home';
      }
      const response = await fetch(`https://backend.medzentrum.ch/api/pages?filters[Slug][$eq]=${mainslug}&populate[Seo][populate]=shareImage`);
      const data = await response.json();
      const pageData = data.data[0];

      console.log("seo data", pageData)

      if (pageData && pageData.Seo) {
        setSeoData(pageData.Seo);
      }
      else {
        if (!fetchAgain) {
          fetchSEO('home', true);
        }
      }
    } catch (error) {
      console.error('Error fetching SEO data:', error);
    }
  };


  if (!seoData) return null;

  const { metaTitle, metaDescription, shareImage } = seoData;
  const imageUrl = shareImage?.url
    ? `https://backend.medzentrum.ch${shareImage.url}`
    : '';

  return (
    <Helmet>
      <title>{metaTitle}</title>
    </Helmet>
  );
};

export default SEO;
