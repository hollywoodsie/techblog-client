import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TagIcon from '@mui/icons-material/Tag';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import { SideBlock } from './SideBlock';

export function TagsBlock({ items, isLoading = true, setTag }) {
  return (
    <SideBlock title="Last Tags">
      <List>
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            <ListItem key={i} disablePadding>
              <ListItemButton onClick={() => setTag(name)}>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  <Skeleton width={100} />
                ) : (
                  <ListItemText primary={name} />
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </SideBlock>
  );
}
