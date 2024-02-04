import { Box, ButtonBase, Card, CardContent, CardHeader, CardMedia, Divider, Grid, Link, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export default function EmployeeItem({ employee }) {

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    const fullName = `${employee.surname} ${employee.name} ${employee.patronymic}`;

    const emailAdress = `mailto:${fullName}<${employee.email}>`;

    return (
        <Grid item md={4} p={2}>
            <Card>
                <Grid container>
                    <Grid item md={3} p={1}>
                        <CardMedia
                            component="img"
                            image="/images/avka.jpg"
                            alt="Live from space album cover"
                        />
                    </Grid>
                    <Grid item md={9}>
                        <Typography variant="h5" component="div" >
                            {fullName}
                        </Typography>
                    </Grid>
                </Grid>
                <CardContent>
                    <Grid container>
                        <Grid item md={12}>
                            <Typography component="div">
                                Посада :  {employee.namePosition}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography component="div">
                                Кімната: {employee.room}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography component="div">
                                Телефон: {employee.phoneNumber}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography component="div">
                        Email:
                        <Link href={emailAdress}>
                            {employee.email}
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};