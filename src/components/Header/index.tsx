import React from 'react';

// fluent ui
import { Card } from '@fluentui/react-components/unstable';
import { Label, makeStyles, shorthands } from "@fluentui/react-components";

const cardStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "auto",
};;

export const Header: React.FC = () => {

  return (
    <>
      <Card style={cardStyle}>
        <Label style={{textAlign: "center"}}>kostejnovi</Label>
      </Card>
    </>
  );
};
