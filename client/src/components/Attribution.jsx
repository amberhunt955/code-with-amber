import { useState } from "react";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

function Attribution({ img, alt, group, width, height, link }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div aria-describedby={id} variant="contained" onClick={handleClick}>
        <img className={group} src={img} alt={alt} width={width} height={height}/>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        sx={{cursor: 'pointer'}}
      >
        <Typography sx={{ padding: 1 }}><Link href={link} target="blank" underline="none">{link}</Link></Typography>
      </Popover>
    </div>
  );
}

export default Attribution;