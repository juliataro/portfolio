import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

// Type for a single list item
export type ListItemData = {
  id: string | number;
  primary: string;
  secondary?: string;
  icon?: React.ReactNode; // pass in an MUI icon component
};

// Props for the reusable component
type Props = {
  items: ListItemData[];
  maxWidth?: number | string;
};

export default function ReusableList({ items, maxWidth = "100%" }: Props) {
  return (
    <List sx={{ width: "100%", maxWidth, ml: "-1rem" }}>
      {items.map((item) => (
        <ListItem key={item.id}>
          {item.icon && (
            <ListItemAvatar>
              <Avatar>{item.icon}</Avatar>
            </ListItemAvatar>
          )}
          <ListItemText primary={item.primary} secondary={item.secondary} />
        </ListItem>
      ))}
    </List>
  );
}
