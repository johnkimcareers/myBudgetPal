import {styled} from "@mui/system";
import {Typography} from "@mui/material";

export const ComponentTitle = styled(Typography)({
    fontWeight: 'bold', // Use the CSS value for bold text
    fontSize: '2rem', // Replace with the equivalent static size
    color: '#010f67',
    marginBottom: '16px', // Assuming the theme spacing is 8px per "unit"
    display: 'inline-block',
});

export const ComponentHeading = styled(Typography)({
    fontWeight: 'bold', // Use the CSS value for bold text
    fontSize: '1.5rem', // Replace with the equivalent static size
    color: '#010f67',
    marginBottom: '8px', // Assuming the theme spacing is 8px per "unit"
    display: 'block',
});

export const ComponentSubHeading = styled(Typography)({
    fontWeight: 500, // Medium font weight
    fontSize: '1.25rem', // Replace with the equivalent static size
    color: '#010f67', // A commonly used primary color, replace with your desired value
    marginBottom: '16px', // Assuming the theme spacing is 8px per "unit"
    display: 'block',
});
