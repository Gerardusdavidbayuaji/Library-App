import React from 'react';
import ContentLayout from "@/components/contentlayout";
import DetailBook from './books/details';
// import HomeLayout from '@/components/homelayout';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const Index: React.FC = () => {
  const contentLayoutProps: ContentLayoutProps = {
    children: <DetailBook />, 
  };

  return (
    <ContentLayout {...contentLayoutProps} />
  );
};

export default Index;