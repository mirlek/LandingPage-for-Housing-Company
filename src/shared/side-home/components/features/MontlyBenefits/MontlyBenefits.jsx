import React from 'react';
import { Container } from 'react-bootstrap';
import MontlyBenefitsCards from './MonthlyBenefitsCards';

const MontlyBenefits = () => (
  <Container className="text-center">
    <div className="monthly-benefits border border-secondary">
      <Container>
        <div className="monthly-benefits-title">{/* Здесь добавьте ваш заголовок */}</div>
        <div className="row">
          <div className="col">
            <MontlyBenefitsCards />
          </div>
          <div className="col">
            <MontlyBenefitsCards />
          </div>
        </div>
      </Container>
    </div>
  </Container>
);

export default MontlyBenefits;
