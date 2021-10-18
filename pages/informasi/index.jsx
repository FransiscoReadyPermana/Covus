import React from 'react';
import Image from 'next/image';
import styles from './informasi.module.css';
import Paragraph from '../../Components/paragraph';
import Title from '../../Components/title';
import Card from '../../Components/card';
import Footer from '../../Components/footer';
import TableDataInformasiGlobal from '../../Components/tableInformasiGlobal';
import TableDataInformasiProvinsi from '../../Components/tableInformasiProvinsi';
import ContainerData from '../../Components/containerData';
import formatK from '../../utils/format';

export default function Informasi({dataOrang, total, informasi, informasiGlobal}) {
  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`flex flex-col items-center w-full pt-12 gap-12 ${styles.section1} bg-purple relative`}
      >
      
      <div
        id="content"
        className="flex gap-16 h-full px-52 bg-purple items-center"
      >
         <div id="text" className="flex flex-col items-center w-full mt-8">
           
          <Title color="white" className="mb-6">LACAK KASUS COVID-19</Title>
              
          <Paragraph size="2xl" color="white" className="text-center">Anda ingin mengetahui update data kasus COVID-19 secara lengkap dan tepat? <br />
          Disini kami menyediakan Data Update Kasus COVID-19 dengan lengkap</Paragraph>
        </div>
      </div>
      </section>

      <section
        id="second"
        className={`${styles.section2} w-full relative`}
      >
        <div
        id="divider"
        className={`${styles.bgFirstSection} h-52 w-full`}
      />
        <div
          id="content"
          className="flex h-full pl-0 pt-8 bg-white" 
        >
        <div
          id="content"
          className="flex flex-col gap-8 h-full px-80  bg-white "
        >
          <Title className="text-center" color="dark-grey">
          NEGARA DENGAN KASUS COVID-19 TERTINGGI
          </Title>

          <TableDataInformasiGlobal data={informasiGlobal}/>
      </div>
        </div>
      </section>

      <section
        id="third"
        className={`${styles.section3} w-full relative bg-purple`}
      >
        <div
          id="divider"
          className={`${styles.bgSecondSection} h-48 w-full absolute -top-40`}
        />

        <div
          id="content"
          className="flex flex-col items-center h-full pt-20 bg-purple"
        >

          <div id="text" className="flex flex-col gap-6 items-center">
            <Title color="white">
              UPDATE DATA KASUS COVID-19
            </Title>
            <Paragraph size="2xl" color="white" className="text-center mb-8">
            Menampilkan update data terbaru kasus Covid-19 di Indonesia, sesuai dengan fakta dan relevan
            </Paragraph>

            <div className="flex justify-between w-10/12
            gap-12 w-full" >
              <ContainerData title="Sembuh" content={`${formatK(total.jumlah_sembuh)} Jiwa`} color="green" />

              <ContainerData title="Positif" content={`${formatK(total.jumlah_positif)} Jiwa`} color="red" />

              <ContainerData title="ODP" content={`${formatK(dataOrang.jumlah_odp)} Jiwa`} color="orange" />
              
              <ContainerData title="Meninggal" content={`${formatK(dataOrang.jumlah_odp)} Jiwa`} color="dark-green" />
          </div>
          </div>
        </div>
      </section>

      <section
        id="fourth"
        className={`${styles.section4} w-full relative`}
      >
        <div
        id="divider"
        className={`${styles.bgFirstSection} h-52 w-full`}
      />
        <div
          id="content"
          className="flex h-full pl-0 pt-8 bg-white flex-col items-center w-full" 
        >
        <div
          id="content"
          className="flex flex-col gap-8 h-full px-96 bg-white w-full"
        >
          <Title className="text-center" color="dark-grey">
          DATA KASUS COVID-19 DI INDONESIA
          </Title>

          <TableDataInformasiProvinsi data={informasi}/>
      </div>
        </div>

        <div
        id="divider"
        className={`${styles.bgSecondSection} h-48 w-full mt-4`}
      />
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps() {
  const dataInformasi = await fetch("https://data.covid19.go.id/public/api/update.json");
  const dataProvinsi = await fetch("http://localhost:3000/api/informasi-covid");
  const dataGlobal = await fetch("https://coronavirus-19-api.herokuapp.com/countries");

  const resultInformasi = await dataInformasi.json();
  const resultProvinsi = await dataProvinsi.json();
  const resultGlobal = await dataGlobal.json();

  const sortdata = resultProvinsi.data.sort((a, b) => a.no - b.no);
  return {
    props: {
      dataOrang: resultInformasi.data,
      total: resultInformasi.update.total,
      informasi: sortdata,
      informasiGlobal: resultGlobal,
    }
  }
}