import { Card, CardContent, Divider, Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Loader = () => {
  return (
    <Box
      component={Grid}
      item
      xs={12}
      sm={12}
      md={6}
      lg={3}
      alignItems="center"
    >
      <Card sx={{ maxWidth: "300px", minHeight: 237, margin: "auto" }}>
        {/* <Tooltip title="Favorite" TransitionComponent={Fade}>
          <IconButton>
            <FavoriteBorderIcon color="primary" />
          </IconButton>
        </Tooltip> */}
        <Skeleton variant="rectangular" height={40} width={40} />
        {/*  <CardMedia
          sx={{ maxWidth: "100px", margin: "auto" }}
          component="img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name || "pokemon"}
        /> */}
        <Skeleton
          variant="rectangular"
          height={100}
          width={100}
          sx={{ margin: "auto" }}
        />
        {/*  <CardContent>
          <Divider />
          <Typography sx={PokemonCardStyles["PokemonCard-title"]}>
            {firstWordUp(pokemon.name)}
          </Typography>
          <Box>
            {pokemon.types.map((type) => (
              <Chip
                key={`${pokemon.id}-${type.type.name}`}
                sx={{
                  backgroundColor: typeColorFun(type.type.name),
                  margin: " 0 2.5px",
                  borderRadius: "18%",
                  color: "white",
                }}
                label={firstWordUp(type.type.name)}
              />
            ))}
          </Box>
        </CardContent> */}
        <CardContent>
          <Divider />
          <Skeleton width="60%" height={30} sx={{ margin: "auto" }} />
          <Box component={Grid} container>
            <Skeleton width="25%" height={40} sx={{ margin: " 0 2.5px" }} />
            <Skeleton width="25%" height={40} sx={{ margin: " 0 2.5px" }} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export { Loader };
