import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';

interface ContentProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children, sidebar: SideBar}: ContentProps) => {
  const contentSize = SideBar? 9 : 12;

  return (
    <Container maxWidth="lg">
      <Grid container>
        { SideBar && <Grid item xs={12} sm={3}>{SideBar}</Grid> }
        <Grid item xs={12} sm={contentSize}>{children}</Grid>
      </Grid>
    </Container>
  );
};

export default Content;
