import { Typography, Grid } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import FeaturedCard from '../components/Hero/FeatureCard'
import CountryFooter from '../components/CountryFooter'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';
import {FaNetworkWired} from 'react-icons/fa'
import {BiCheckDouble} from 'react-icons/bi'
import {ImPieChart} from 'react-icons/im'
import FeatureExpand from '../components/Hero/FeatureExpand'
import MapImage from '../resources/images/map.png'
import uk from '../resources/images/ukImage.png'
import StatsImage from '../resources/images/stats.png'
import GraphImage from '../resources/images/graph.png'
import BagBg from '../resources/background/bagBg.png'
import BagImage from '../resources/images/Emoji.png'
import richie from '../resources/images/richie.jpg'
import bob from '../resources/images/Robert-Ebers.jpg'
import db from '../resources/images/db1.jpg'
import RoundedButton from '../components/Buttons/RoundedButton'
import PartnerHero from '../components/Partner/PartnerHero'
import TeamCard from '../components/About/TeamCard'

// import {AccountTreeIcon} from '@mui/icons-material';

export default function UkPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-metric Suites</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Navbar/> */}
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

          <Navbar country={1}/>
          {/* </> */}
          <PartnerHero 
            direction='ltr'
            image={uk} 
            hasButtons= {true}
            header='Welcome to Enterprise Metric Suite Solutions LLC (United Kingdom)' 
            body='Enterprise Metric Suite Solutions LLC is a global business process and performance management solution provider with its international headquarters in DallasTexas, USA.
            As a duly registered organization in the United Kingdom, we are poised to partner with you towards transforming your business with the joint expertise of the team.' 
            />
          <Grid container justifyContent='center' my={2} md={6}>
            <Typography fontWeight={800} textAlign='center' my={2} fontSize={25}>
            Understand KPI Analytics for Productivity
            </Typography>

            <Typography fontWeight={400} textAlign='center' fontSize={17}>
            Our Simplified system helps you track, Performance measurement, Agile task planning and tracking software, Structured Appraisal and data capture. 
            </Typography>
          </Grid>

          <Grid container my={3} justifyContent='space-around'>
          <FeaturedCard
                icon={<FaNetworkWired color='#7B9AFF'/>}
                iconBg='#EDEFF1'
                title='Strategy Development'
                body='For an organization to truly have long-term 
                strategic success, strong strategic plans are needed at 
                every level in the organization. Our approach to the development of
                 corporate strategy at Emetric Suite is designed to ensure that 
                 organizations produce better plans for how they might effectively 
                 respond to the new and ...'
              />

              <FeaturedCard
                icon={<BiCheckDouble color='#F2C94C' fontWeight={800} size={28}/>}
                iconBg='#FFF2CC'
                title='Performance Management'
                body='Performance management in any organization 
                aims at extensively improving organizational performance 
                while sustaining performance, productivity, and the motivation 
                of employees. In recent years, it has become obvious that traditional 
                performance management is ineffective.'
              />

              <FeaturedCard
                icon={<ImPieChart color='#963A04' size={28}/>}
                iconBg='#FFEADD'
                title='Appraisal Data Generation'
                body='Provides a clear and compelling 
                strategic direction toOftentimes,organizations 
                award high appraisal based performance ratings/scores 
                to employees based on activities they are involved in 
                and not on the contribution of those activities to the 
                achievement of the overall organization objectives'
              />
          </Grid>

          <Grid>
            <Typography fontWeight={800} textAlign='center' my={2} fontSize={25}>
              Some Features and Capabilities
            </Typography>

            <FeatureExpand 
              header='Performance Management & Assessment Data Generation Automation' 
              body='Balanced Scorecard, HR Scorecards etc.  Also, existing performance management software like the intrafocus, QPR Metrics etc.'
              image={MapImage}
              direction='ltr'
              />

              <FeatureExpand 
                header='Software Structure- Reporting Modules Human Performance Reporting' 
                body='Individual Task Rating Task assessment elements ratings like;  TAT, Quality, Quantity.
                Individual task contribution to team task which builds up into team performance. Cumulative tasks contributions to individual performance score achieved. Team overall score with all the task elements
                '
                image={StatsImage}
                direction='rtl'
              />

              <FeatureExpand 
                header='Corporate Performance Management Reporting' 
                body='Team performance Reporting with all elements captured Initiative/JD score.
                Various teams and hierarchies e.g. unit, department, group and or divisions.
                Strategic objectives score-corporate perspective grouping ratings to access performance directions. 
                '
                image={GraphImage}
                direction='ltr'
              />
          </Grid>

          <Grid container justifyContent='center' my={4} px={3}>
            <Grid container justifyContent={'center'}>
              <Typography fontWeight={800} textAlign='center' my={2} mx={2} fontSize={25}>
                Our Team
              </Typography>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' mt={2} md={12} px={8}>
               <TeamCard image={bob} name='Robert P. Ebers' role='Chief Executive Officer'/>
               <TeamCard image={richie} name='Martin Baillie' role='Country Manager' />
               <TeamCard image={db} name='Debo Adebayo' role='Regional Manager'/>
               
               
               
            </Grid>

          </Grid>
          
          <Grid container justifyContent='center' className={styles.artBg} py={2}>
                <Grid px={7} py={7} item className={styles.joinBg} md={7} borderRadius={2}>
                  <Grid container justifyContent='center'>
                    <Image src={BagImage}/>
                  </Grid>
                  
                <Typography fontWeight={800} textAlign='center' mx={2} my={2} fontSize={25}>
                Join the growing list of our partners across the globe.
                  </Typography>

                  <Typography fontWeight={400} textAlign='center' fontSize={17}>
                  Our Value Added members are partners that want to be part of resallers for the leading Performance Management software
                  </Typography>
                  <Grid container justifyContent='center' pt={3} >
                    <RoundedButton text='Join Now'/>
                  </Grid>
                  
              </Grid>
          </Grid>

  
        <Grid container justifyContent='center' sx={{background:`url(${BagBg})`}}>
        </Grid>
      </main>

      <footer >
      {/* <Grid container sx={{bgcolor:'red'}} md={12}> */}
        <CountryFooter 
          address='9304 Forest lane, Suite S207 Dallas, Texas 75243' 
          email='uk@emetricsuite.com'
          phone='+1 (504) 499-5921'
          />
      {/* </Grid> */}
      </footer>
    </div>
  )
}
