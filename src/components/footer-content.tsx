import React from 'react'

const FooterContent: React.FC = () => {
  return (
    <footer className="w-full min-h-[8vh]" style={{ backgroundColor: '#05BFDB' }}>
      <div className="flex justify-center items-center container text-white h-full">
        <p>© 2023 Library App, Created by Gerardus David</p>
      </div>
    </footer>
  );
};

export default FooterContent;
