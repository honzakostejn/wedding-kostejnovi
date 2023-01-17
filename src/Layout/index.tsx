import "./css/styles.css";

import React from 'react';

import { useResizeDetector } from 'react-resize-detector';

// components
import { GameConsole } from '../components/GameConsole';
import RelationshipHistory from '../components/RelationshipHistory';
import RSVP from '../components/RSVP';

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
