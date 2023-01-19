import React from 'react';

// fluent ui
import { Button } from "@fluentui/react-components";

export const Controls: React.FC = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "4px"
  };

  return (
    <div className="Controls" style={style}>
      <div className='Controls__ArrowKeys'>
        <section style={style}>
          <Button className='Controls__UpArrow' />
        </section>
        <section style={style}>
          <Button className='column Controls__LeftArrow' />
          <Button className='column Controls__RightArrow' />
        </section>
        <section style={style}>
          <Button className='Controls__DownArrow' />
        </section>
      </div>
      <div className='Controls__ActionKeys' style={style}>
        <Button className='Controls__AButton' />
        <Button className='ßControls__BButton' />
      </div>
    </div>
  );
};