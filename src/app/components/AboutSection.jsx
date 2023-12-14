'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2 text-justify">
        <li className="mb-1">
          <span className="font-bold">Languages:</span> SQL, Python, R, JavaScript, Java.
        </li>
        <li className="mb-1">
          <span className="font-bold">Tools :</span> Tableau, Power BI, Google Collab, Anaconda, Excel, VSCode, GitHub, Jira, Trello, Microsoft SQL Server Management Studio, PostgreSQL, Pentaho, DBeaver{' '}
        </li>
        <li className="mb-1">
          <span className="font-bold">Analysis :</span> Data Cleaning, Exploratory Data Analysis (EDA), Descriptive Statistics, Hypothesis Testing, Cohort Analysis, Correlation Analysis, Regression Analysis, Clustering Analysis,
          Classification Analysis, Machine Learning
        </li>
        <li>
          <span className="font-bold">Soft Skills:</span> Communication, Teamwork, Decision Making, Problem Solving, Time Management
        </li>
      </ul>
    ),
  },
  {
    title: 'Achievement',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Funding at ITS Technopreneur 2023 “RaeNov Team” (2023) </li>
        <li>Finalist Tableau Open Data Jabar Data Visualization (2022)</li>
        <li>Finalist Business and IT Competition ITS (2022)</li>
        <li>Top 10 teams in Data Science Academy COMPFEST University of Indonesia
        (UI) (2022)</li>
        <li>Swiss Innovation Challenge ITB Phase 2 (2022)</li>
        <li>3rd Place at City Level Physics Olympiad (OSN) in Gunungsitoli (2019)</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Belajar dasar SQL by Dicoding</li>
        <li>Belajar Machine Learning untuk Pemula by Dicoding</li>
        <li>Introduction to SAP S/4HANA by ITS</li>
        <li>Introduction to Data Science by Microsoft</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">Hello, my name is Kurniaman Andreas Zega. You can call me Niman. I am currently studying at the Institut Teknologi Sepuluh Nopember (ITS) majoring in Sistem Informasi. I have an interest in data and web development</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              {' '}
              Achievement{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
