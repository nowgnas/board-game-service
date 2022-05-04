import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BoardgameRec from "./BoardgameRec";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log("여긴 어디", props);

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function DetailTab({ gameData }) {
    const [value, setValue] = React.useState(0);
    const { description } = gameData;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

<<<<<<< HEAD
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="게임 설명" {...a11yProps(0)} />
                    <Tab label="What else?" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {description}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BoardgameRec />
            </TabPanel>
        </Box>
    );
=======
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="게임 설명" {...a11yProps(0)} />
          <Tab label="What else?" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BoardgameRec gameData={gameData} />
      </TabPanel>
    </Box>
  );
>>>>>>> 04f7e76898daf4cfcd702046800a8d97d115e94b
}
