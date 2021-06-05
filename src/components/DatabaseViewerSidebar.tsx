import React, { useState } from 'react';
import { useTable } from 'react-table';
import Clickable from './Clickable';

type DatabaseSidebarProps = {
  currentCollection: string;
  collections: string[];
  className?: string;
  onChange: (collectionName: string) => void;
};
const DatabaseSidebar = ({
  onChange,
  currentCollection,
  className,
  collections,
}: DatabaseSidebarProps) => {
  return (
    <div className={className}>
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
const DatabaseContent = (keys?: any, values?: any) => {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },

      {
        col1: 'react-table',
        col2: 'rocks',
      },

      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],

    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },

      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],

    []
  );
  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,
    //@ts-ignore
  } = useTable({ columns: col, data });
  return (
    <div className="databaseContent">
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',

                    background: 'aliceblue',

                    color: 'black',

                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',

                        border: 'solid 1px gray',

                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const DatabaseNavigator = () => {
  const collections = ['asdf', 'asdfasfghas', 'asgsadgsad'];
  const [currentCollection, setCurrentCollection] = useState('');
  return (
    <div className="navigatorContainer">
      <DatabaseSidebar
        className="sidebarContainer"
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
