import React, { useState } from 'react';
import Clickable from './Clickable';

type DatabaseSidebarProps = {
  currentCollection: string;
  collections: string[];
  onChange: (collectionName: string) => void;
};
const DatabaseSidebar = ({
  onChange,
  currentCollection,
  collections,
}: DatabaseSidebarProps) => {
  return (
    <div className="sidebarContainer">
      {collections.map((collectionName) => {
        return (
          <Clickable
            onClick={() => {
              onChange(collectionName);
            }}
            className={
              currentCollection === collectionName
                ? 'sidebarClickable sidebarClickableActive'
                : 'sidebarClickable'
            }
            key={collectionName} // collection names are unique
          >
            {collectionName}
          </Clickable>
        );
      })}
    </div>
  );
};
const DatabaseContent = () => {
  return <div className="databaseContent" />;
};
const DatabaseNavigator = () => {
  const collections = ['asdf', 'asdfasfghas', 'asgsadgsad'];
  const [currentCollection, setCurrentCollection] = useState('');
  return (
    <div className="navigatorContainer">
      <DatabaseSidebar
        collections={collections}
        currentCollection={currentCollection}
        onChange={(collectionName) => {
          setCurrentCollection(collectionName);
        }}
      />
      <DatabaseContent />
    </div>
  );
};
export default DatabaseNavigator;
