import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 40px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

const Card = styled(Link)`
  display: block;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Title>Panel Principal - Educarse</Title>
      <Grid>
        <Card to="/login">Autenticación</Card>
        <Card to="/perfiles">Perfiles</Card>
        <Card to="/notas">Notas</Card>
        <Card to="/eventos">Eventos</Card>
        <Card to="/materias">Materias</Card>
      </Grid>
    </Container>
  );
};

export default Dashboard;
