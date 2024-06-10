import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

export const adminNavigationMenus = [
  {
    id: 1,
    mainButton: "Questions",
    mainButtonIcons: <CodeOutlinedIcon />,
    subMainButtons: ["List Questions", "Create Question"],
  },
  {
    id: 2,
    mainButton: "Users",
    mainButtonIcons: <AccountCircleOutlinedIcon />,
    subMainButtons: ["List Users", "Create Users"],
  },
  {
    id: 3,
    mainButton: "Language",
    mainButtonIcons: <ViewInArIcon />,
    subMainButtons: ["List Language", "Create Language"],
  },
  {
    id: 4,
    mainButton: "Collections",
    mainButtonIcons: <ViewInArIcon />,
    subMainButtons: ["List Collections", "Create Collection"],
  },
];
