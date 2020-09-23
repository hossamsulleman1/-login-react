import React from 'react';
import MiniChardCard from './MiniChartCard';
import Container from '@material-ui/core/Container';
import '../App.css';
import NewDashboardCard from './NewDashboardCard'

function DashboardPage() {


    return (

        // FIX THIS
        
        <Container 
        //  maxWidth="sm"
        maxHeight="sm"
        ClassName="MiniChartDivFlex">
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