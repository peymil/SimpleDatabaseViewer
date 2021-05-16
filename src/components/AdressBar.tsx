import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import path from 'path';
import { DiPostgresql } from 'react-icons/all';
import Clickable from './Clickable';
import HandleClickOutside from './HandleClickOutside';
import { t } from '../i18n';
import PostgreSQL from '../../assets/icons/postgreSql.png';
import MongoDB from '../../assets/icons/mongoDB.png';

const iconsPath = path.join(__dirname, '/../../assets/');
enum DatabasesIds {
  'PostgreSQL',
  'MongoDB',
}
const Databases = [
  {
    id: 0,
    name: 'PostgreSQL',
    icon: PostgreSQL,
    defaultAdress: 'postgresql://localhost:5432',
  }, // icons must placed under assets/icons with same name
  {
    id: 1,
    name: 'MongoDB',
    icon: MongoDB,
    defaultAdress: 'mongodb://localhost:27015',
  },
];
interface DbSelectButtonProps {
  value: DatabasesIds;
  onChange: (e: DatabasesIds) => void;
}
const DbSelectButton = ({ onChange, value }: DbSelectButtonProps) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  return (
    <>
      <Clickable
        onClick={() => {
          setIsDropdownOpened(!isDropdownOpened);
          console.log(isDropdownOpened);
        }}
        className="DbSelectButton"
      >
        <img
          id="dbIcon"
          src={Databases[value].icon}
          alt={Databases[value].name}
          width={20}
        />
        <MdKeyboardArrowDown color="red" size={20} />
      </Clickable>
      {isDropdownOpened ? (
        <>
          <div className="DbSelectDropdown">
            {Databases.map(({ id, name, icon }) => {
              return (
                <Clickable
                  key={id}
                  className="DbSelectDropdownItems"
                  onClick={() => {
                    setIsDropdownOpened(false);
                    onChange(id);
                  }}
                >
                  <img
                    className="DbSelectItemImage"
                    width={30}
                    src={icon}
                    alt={name}
                  />
                  <div className="DbSelectItemName">{name}</div>
                </Clickable>
              );
            })}
          </div>
          <HandleClickOutside
            onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpened(false);
            }}
          />
        </>
      ) : null}
    </>
  );
};
const AdressBar = () => {
  const [currentDatabase, setCurrentDatabase] = useState(0);
  return (
    <div className="adressBarContainer">
      <div className="adressBar">
        <DbSelectButton
          value={currentDatabase}
          onChange={(database: DatabasesIds) => {
            setCurrentDatabase(database);
          }}
        />
        <input placeholder={Databases[currentDatabase].defaultAdress} />
        <Clickable
          onClick={() => {
            console.log('buton basıldı');
          }}
        >
          <MdKeyboardArrowRight color="red" id="searchIcon" size={25} />
        </Clickable>
      </div>
    </div>
  );
};
export default AdressBar;
