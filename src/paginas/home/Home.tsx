
import React, { useEffect } from "react";
import { Button, ButtonBaseActions } from "@material-ui/core"
import "./Home.css";
import { Avatar, Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokenReduce";
import { toast } from "react-toastify";
import TabProdutos from "../../Components/produtos/tabProdutos/TabProdutos";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Home() {
    const navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>((state) => state.tokens);


    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token]);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    const imagens = [
<Card
            sx={{
                maxWidth: "20rem",
                maxHeight: "40rem",
            }}
            className="space"
        >
            <CardMedia
                component="img"
                height="140"
                image="https://imgur.com/QOq4wCq.jpg"
                alt="ONG Banco de Alimentos"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Banco de Alimentos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A ONG Banco de Alimentos é uma associação civil que recolhe alimentos
                    que já perderam valor de prateleira no comércio e indústria, mas ainda
                    estão aptos para consumo, e os distribui onde são mais necessários.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saiba Mais</Button>
            </CardActions>
        </Card>,

<Card
            sx={{
                maxWidth: "20rem",
                maxHeight: "40rem",
            }}
            className="space"
        >
            <CardMedia
                component="img"
                height="140"
                image="https://imgur.com/EXWZX57.jpg"
                alt="Ampara animal"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Ampara animal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A AMPARA é uma OSCIP sem fins lucrativos. Somos protetores de animais
                    abandonados e vítimas de maus-tratos. Lutamos para que os mais de 30
                    milhões de animais de rua tenham uma vida com respeito e amor.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saiba Mais</Button>
            </CardActions>
        </Card>,

<Card
            sx={{
                maxWidth: "20rem",
                maxHeight: "40rem",
            }}
            className="space"
        >
            <CardMedia
                component="img"
                height="140"
                image="https://imgur.com/f1Nbfp4.jpg"
                alt="Juntos somos mais"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Juntos somos mais
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                    reprehenderit excepturi ex, voluptatibus quia aspernatur. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Non id provident fugiat
                    quas quia.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saiba Mais</Button>
            </CardActions>
        </Card>,

<Card
            sx={{
                maxWidth: "20rem",
                maxHeight: "40rem",
            }}
            className="space"
        >
            <CardMedia
                component="img"
                height="140"
                image="https://imgur.com/tQ9bqNN.jpg"
                alt="Um coração"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Um coração
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                    reprehenderit excepturi ex, voluptatibus quia aspernatur. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Non id provident fugiat
                    quas quia.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saiba Mais</Button>
            </CardActions>
        </Card>,

<Card
            sx={{
                maxWidth: "20rem",
                maxHeight: "40rem",
            }}
            className="space"
        >
            <CardMedia
                component="img"
                height="140"
                image="https://imgur.com/j3GDnIq.jpg"
                alt="Plan International"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Plan International
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Uma organização humanitária, não governamental e sem fins lucrativos,
                    que promove os direitos das crianças e a igualdade para as meninas.
                    Acreditamos no poder e potencial de todas as crianças.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Saiba Mais</Button>
            </CardActions>
        </Card>
    ];

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="subtitulo">Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/clJVUH7.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="produtos">
                </Grid>
            </Grid>
            <TabProdutos />
            <Grid>
                <div className="faixa">
                    <p className="faixa-margin"> PARCEIROS </p>
                    <hr></hr>
                </div>

                <div>
                    <Box justifyContent="center" display="flex" className="card">
                        <AliceCarousel
                            mouseTracking
                            items={imagens}
                            responsive={responsive}
                            controlsStrategy="alternate"
                            infinite
                            autoPlay
                            animationDuration={4000}
                            autoPlayInterval={5000}
                        />
                    </Box>
                </div>
            </Grid>
        </>
    );
}

export default Home;