import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import uaproducts from "./Items.jsx";

function MultiActionAreaCard() {
  return (
    <>
      <div className="title-ua">
        Składniki tych produktów pochodzą z Ukrainy:
      </div>
      <div className="products-container">
        {uaproducts.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                width="100"
                image={product.imgUrl}
                alt="Product Image"
              />
              <CardMedia
                component="img"
                height="150"
                width="100"
                image={product.imgUrl2}
                alt="Product Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h9" component="div">
                  <p>{product.title}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MultiActionAreaCard;
