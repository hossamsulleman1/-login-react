import React from 'react';
import MiniChardCard from './MiniChartCard';
import Container from '@material-ui/core/Container';
import '../App.css';
import NewDashboardCard from './NewDashboardCard'

const useStyles = ({
    root: {
        display: "flex",
        
    }
})

function DashboardPage() {

const classes = useStyles();
    return (

        // FIX THIS
        
        <Container 
        //  maxWidth="sm"
        maxHeight="sm"
        ClassName={}>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>
<NewDashboardCard></NewDashboardCard>
        </Container>


    )
}


export default DashboardPage;