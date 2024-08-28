import React from 'react';
import './Services.css'; // Optional: CSS for styling
import Service from './Service';
import LabImg from '../assets/lab-1.jpg'; 

const Services = () => {
  // Example data (replace with your actual services)
  const services = [
    {
      id: 1,
      title: 'DNA Testing',
      description: 'Paternity',
    },
    {
      id: 2,
      title: 'Tumor Genetics',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Pathologies',
      description: 'Chemical Pathology as: FBC, Mps, Blood Group etc.',
    },
    {
      id: 2,
      title: 'Histology',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Cytology',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Serology',
      description: 'Hepatitis B, C, HIV, Typhoid(WIDAL) ',
    },
    {
      id: 2,
      title: 'Haematology',
      description: 'FBC, Mps, Blood Group',
    },
    {
      id: 2,
      title: 'Executive  Profi.',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Infertility Profi.',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Gynaecological',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Abd. Scan',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Urology',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Breast Scan',
      description: 'Description of Service 2...',
    },
    {
      id: 2,
      title: 'Others scans',
      description: 'Description of Service 2...',
    },
    // Add more services as needed
  ];

  return (
    <div className="services-container">
      <h2>Laboratory Services Available</h2>
      <div className="services">
        {services.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            description={service.description}
            //image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
