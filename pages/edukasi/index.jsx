import React from 'react';
import Image from 'next/image';
import styles from './edukasi.module.css';
import Paragraph from '../../Components/paragraph';
import Button from '../../Components/button';
import Title from '../../Components/title';
import Card from '../../Components/card';
import Footer from '../../Components/footer';

export default function Edukasi() {
  return (
    <div>
      {/* first section */}

      <section
        id="first"
        className={`w-full relative bg-purple ${styles.section1} `}
      >
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-52 w-full absolute top-9 z-10`}
        />
        <div
          id="content"
          className="flex gap-24 h-full px-20 pb-28 pt-32 bg-white items-center"
        >
          <div className="relative w-1/2 h-5/6 pl-40  ">
            <Image
              src="/images/ReadingBook.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
          <div id="text" className="flex flex-col gap-8 items-start w-1/2">
            <Title color="dark-grey">
              EDUKASI <br /> SEPUTAR COVID 19
            </Title>
            <Paragraph size="2xl" color="dark-grey">
              Cari tahu Edukasi seputar Covid-19
            </Paragraph>
            <Button to="#second" color="purple">Apa itu Covid-19</Button>
            <Button to="#third" color="purple">Apa saja gejala Covid-19</Button>
            <Button to="#fourth" color="purple">Pencegahan Covid-19</Button>
          </div>
        </div>
      </section>

      {/* second section */}

      <section
        id="second"
        className={`w-full relative bg-purple ${styles.section2} `}
      >
        <div
          id="divider"
          className={`${styles.bgSecondSection} h-52 w-full absolute -top-40`}
        />
        <div
          id="content"
          className="flex gap-16 h-full px-52  bg-purple items-center"
        >
          <div id="text" className="flex flex-col gap-8 items-start w-1/2 mb-12">
            <Title color="white">APA ITU COVID-19?</Title>
            <Paragraph size="2xl" color="white">
              Coronavirus adalah kumpulan virus yang bisa menginfeksi sistem
              pernapasan. Pada banyak kasus, virus ini hanya menyebabkan infeksi
              pernapasan ringan, seperti flu. Namun, virus ini juga bisa
              menyebabkan infeksi pernapasan berat, seperti infeksi paru-paru
              (pneumonia). <br /> <br /> Infeksi virus Corona disebut COVID-19
              (Corona Virus Disease 2019) dan pertama kali ditemukan di kota
              Wuhan, China pada akhir Desember 2019. Virus ini menular dengan
              sangat cepat dan telah menyebar ke hampir semua negara, termasuk
              Indonesia, hanya dalam waktu beberapa bulan.
            </Paragraph>
          </div>
          <div className="relative w-1/2 h-5/6 pl-40  ">
            <Image
              src="/images/girlWithSheild.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
        </div>
      </section>

      {/* third section */}

      <section
        id="third"
        className={`w-full relative bg-purple ${styles.section3} `}
      >
        <div
          id="divider"
          className={`${styles.bgThirdSection} h-52 w-full absolute top-0`}
        />
        <div
          id="content"
          className="flex gap-12 h-full px-52 bg-white items-center"
        >
          <div id="text" className="flex flex-col gap-10 items-center w-full">
            <Title color="dark-grey">Gejala COVID-19</Title>
            <Paragraph size="xl" color="dark-grey" className="text-center">
              Gejala awal infeksi virus Corona atau COVID-19 bisa menyerupai
              gejala flu, yaitu demam, pilek, batuk kering, sakit tenggorokan,
              dan sakit kepala. Setelah itu, gejala dapat hilang dan sembuh atau
              malah memberat. Penderita dengan gejala yang berat bisa mengalami
              demam tinggi, batuk berdahak bahkan berdarah, sesak napas, dan
              nyeri dada
            </Paragraph>
            <div
              id="card containter"
              className="w-full h-full flex justify-between gap-12"
            >
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Demam.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Demam
                </p>
              </Card>
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Sesak Nafas.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Sesak Nafas
                </p>
              </Card>
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Batuk Kering.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Batuk Kering
                </p>
              </Card>
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Lelah.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Lelah
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* fourth section */}

      <section
        id="fourth"
        className={`w-full relative bg-purple ${styles.section4} `}
      >
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute -top-32 -z-20`}
        />
        <div
          id="content"
          className="flex gap-12 h-full px-52 pt-20 bg-purple item-center"
        >
          <div id="text" className="flex flex-col gap-8 items-center w-full">
            <Title color="white">
              BAGAIMANA MELAKUKAN PENCEGAHAN TERHADAP COVID-19
            </Title>
            <Paragraph size="xl" color="white" className="text-center">
              Gejala awal infeksi virus Corona atau COVID-19 bisa menyerupai
              gejala flu, yaitu demam, pilek, batuk kering, sakit tenggorokan,
              dan sakit kepala. Setelah itu, gejala dapat hilang dan sembuh atau
              malah memberat. Penderita dengan gejala yang berat bisa mengalami
              demam tinggi, batuk berdahak bahkan berdarah, sesak napas, dan
              nyeri dada
            </Paragraph>
            <div
              id="card containter"
              className="w-full h-full flex justify-between gap-12"
            >
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Gunakan Masker.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Gunakan Masker
                </p>
              </Card>
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Mencuci Tangan.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Mencuci Tangan
                </p>
              </Card>
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Menjaga Jarak.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Menjaga Jarak
                </p>
              </Card>
              <Card type="big">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Jaga Kebersihan.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p className="text-center font-semibold text-2xl text-dark-grey">
                  Jaga Kebersihan
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer color="white"/>
    </div>
  );
}
