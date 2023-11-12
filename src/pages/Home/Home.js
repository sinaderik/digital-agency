import React from 'react';
import Header from '../../components/Header/Header';
import Clients from '../../components/Clients/Clients';
import Job from '../../components/Job/Job';
import MainAbout from '../../components/MainAbout/MainAbout';
import Projects from '../../components/Projects/Projects';
import CustomerComments from '../../components/CustomerComments/CustomerComments';
import OrderProject from '../../components/OrderProject/OrderProject';
import Footer from '../../components/Footer/Footer';
import SubFooter from '../../components/SubFooter/SubFooter';

export default function Home() {
  return (
    <>
      <Header />
      <Clients />
      <Job />
      <MainAbout />
      <Projects />
      <CustomerComments />
      <OrderProject />
      <Footer />
      <SubFooter />
    </>
  )
}
