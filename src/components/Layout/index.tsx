import "./css/styles.css";

import React from 'react';

import { useResizeDetector } from 'react-resize-detector';

// components
import { GameConsole } from '../GameConsole';
import RelationshipHistory from '../RelationshipHistory';
import RSVP from '../RSVP';

export const Layout: React.FC = () => {
  const { width, height, ref } = useResizeDetector();

  return (
    <div className="Layout">
      <GameConsole />
      <RelationshipHistory />
      <RSVP />
    </div>
  );
};
