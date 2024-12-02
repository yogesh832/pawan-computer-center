import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function OneCard({ title = "Default Title", semester = "Default Semester", description = "Default Description", image, sx }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        maxWidth: "300px", // Ensure maxWidth is defined
        ...sx,
      }}
    >
      {/* Debugging: Ensure image source is valid */}
      <img
        src={image || "https://via.placeholder.com/300"} // Fallback to a placeholder image
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {semester}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBuyNow}
        sx={{ marginTop: "8px" }}
      >
        Buy Now
      </Button>
    </Box>
  );
}

export default OneCard;
