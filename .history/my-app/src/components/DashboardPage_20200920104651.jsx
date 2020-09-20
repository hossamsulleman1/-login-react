import React from 'react';
import {Link} from 'react-router-dom';
import MiniChardCard from './MiniChartCard';
import Container from '@material-ui/core/Container';
import '../App.css';

function DashboardPage() {
    return (
        <Container ClassName="MiniChartDivFlex">
<MiniChardCard></MiniChardCard>
        </Container>


    )
}


export default DashboardPage;