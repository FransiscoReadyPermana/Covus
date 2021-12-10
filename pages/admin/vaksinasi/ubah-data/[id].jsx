import React from "react";
import { useState, useEffect } from "react";
import Title from "../../../../Components/title";
import styles from "../../tambah.module.css";
import Footer from "../../../../Components/footer";
import PopUp from "../../../../Components/pop-up/pop-up";
import { useRouter } from "next/router";
import AdminOnly from "../../../../Components/adminOnly";
import { getSession } from "next-auth/client";
import DropDownEdit from "../../../../Components/dropDown";

export default function TambahData({ data, id, user, namaProvinsi }) {
  const emailAdmin = process.env.ADMIN;
  const router = useRouter();
  const [keluar, setKeluar] = useState(false);
  const [formUser, setFormUser] = useState({
    provinsi: data[0].provinsi,
    img: data[0].img,
    jenisVaksin: data[0].jenisVaksin,
    penyelenggara: data[0].nama,
    tanggal: data[0].tanggal,
    waktu: data[0].waktu,
    lokasi1: data[0].lokasi1,
    lokasi2: data[0].lokasi2,
    namaVaksin: data[0].namaVaksin,
  });

  const NamaVaksin = (e) => {
    let namaVaksin = formUser.namaVaksin;
    if (e.target.checked) {
      namaVaksin = [...formUser.namaVaksin, e.target.value];
    } else {
      namaVaksin = formUser.namaVaksin.filter((d) => d !== e.target.value);
    }
    setFormUser({
      ...formUser,
      namaVaksin,
    });
  };

  const onFilterDropdown = (e) => {
    setDataDropdownProvinsi(e);
    let filterProvinsi = null;

    if (e.length > 0) {
      filterProvinsi = data.filter((data) =>
        new RegExp(e, "gi").test(data.key)
      );
    } else {
      filterProvinsi = data;
      setDataDropdownProvinsi("Pilih Provinsi");
    }
    setFilteredDataProvinsi(filterProvinsi);
  };

  const deleteHandler = async (id) => {
    var myHeaders = new Headers();
    const baseUrl = process.env.BASE_URL;

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `${baseUrl}api/detail-lokasi-vaksinasi/${id}`,
      requestOptions
    );
    const result = await response.json();

    if (result.success) {
      alert("Berhasil");

      router.push("/admin/vaksinasi");
    } else {
      alert(result.message);
    }
  };

  const handleRegister = async (e) => {
    // checkInput(e);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      _id: id,
      // provinsi: formUser.provinsi,
      img: formUser.img,
      jenisVaksin: formUser.jenisVaksin,
      nama: formUser.penyelenggara,
      tanggal: formUser.tanggal,
      waktu: formUser.waktu,
      lokasi1: formUser.lokasi1,
      lokasi2: formUser.lokasi2,
      namaVaksin: formUser.namaVaksin,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
    };

    const baseUrl = process.env.BASE_URL;

    const response = await fetch(
      `${baseUrl}api/tambah-lokasi-vaksinasi/${formUser.provinsi}`,
      requestOptions
    );
    const result = await response.json();

    if (result.success) {
      alert("Berhasil");
      router.push();
    } else {
      alert(result.message);
    }
  };

  if (user.name !== "admin" && user.email !== emailAdmin) {
    return (
      <div className="pt-40">
        <AdminOnly />
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <section id="first" className={`${styles.section1} w-full relative`}>
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className="w-full flex flex-col items-center h-full pt-80 bg-white pb-20"
        >
          <Title color="dark-grey">UBAH DATA LOKASI VAKSINASI</Title>
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="provinsi">
              <label htmlFor="provinsi">Nama Provinsi</label>
              <DropDownEdit
                className="w-full"
                onChange={onFilterDropdown}
                value={data[0].vaksinId.nama}
                color="purple"
                placeholder="Pilih Provinsi"
                option={namaProvinsi}
                onChange={(e) => {
                  setFormUser({ ...formUser, provinsi: e });
                }}
              />
              {/* <input
                type="text"
                id="provinsi"
                defaultValue={data[0].provinsi}
                onChange={(e) =>
                  setFormUser({ ...formUser, provinsi: e.target.value })
                }
              />
              {errorNama && <p className="mt-2 ml-2 text-red">{errorNama}</p>} */}
            </div>
            <div id="img">
              <label htmlFor="email">Gambar Rumah Sakit</label>
              <input
                type="text"
                id="img"
                defaultValue={data[0].img}
                onChange={(e) =>
                  setFormUser({ ...formUser, img: e.target.value })
                }
              />
              {/* {errorEmail && <p className="mt-2 ml-2 text-red">{errorEmail}</p>} */}
            </div>

            <div id="jenis-vaksin">
              <label htmlFor="jenis kelamin">Jenis Vaksinasi</label>
              <div className="flex gap-8 ml-8 mt-5">
                <div id="pertama" className="flex items-center">
                  <input
                    type="radio"
                    id="vaksin-pertama"
                    name="Jenis Vaksin"
                    value="Vaksinasi Pertama"
                    defaultChecked={data[0].jenisVaksin === "Vaksinasi Pertama"}
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisVaksin: e.target.value })
                    }
                  />
                  <label htmlFor="vaksin-pertama">Vaksinasi Pertama</label>
                </div>

                <div id="kedua" className="flex items-center">
                  <input
                    type="radio"
                    id="vaksin-kedua"
                    name="Jenis Vaksin"
                    value="Vaksinasi Kedua"
                    defaultChecked={data[0].jenisVaksin === "Vaksinasi Kedua"}
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisVaksin: e.target.value })
                    }
                  />
                  <label htmlFor="vaksin-kedua">Vaksinasi Kedua</label>
                </div>
              </div>
              {/* {errorJenisKelamin && (
                <p className="mt-2 ml-2 text-red">{errorJenisKelamin}</p>
              )} */}
            </div>
            <div id="nama">
              <label htmlFor="nama-penyelenggara">Nama Penyelenggara</label>
              <input
                type="text"
                id="nama-penyelenggara"
                defaultValue={data[0].nama}
                onChange={(e) =>
                  setFormUser({ ...formUser, penyelenggara: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="tgl">
              <label htmlFor="tanggal">Tanggal Diselenggarakan</label>
              <input
                type="text"
                id="tanggal"
                defaultValue={data[0].tanggal}
                onChange={(e) =>
                  setFormUser({ ...formUser, tanggal: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="time">
              <label htmlFor="waktu">Waktu Diselenggarakan</label>
              <input
                type="text"
                id="waktu"
                defaultValue={data[0].waktu}
                onChange={(e) =>
                  setFormUser({ ...formUser, waktu: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="lokasi">
              <label htmlFor="lokasi1">Tempat Vaksinasi</label>
              <input
                type="text"
                id="lokasi1"
                defaultValue={data[0].lokasi1}
                onChange={(e) =>
                  setFormUser({ ...formUser, lokasi1: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="lokasi">
              <label htmlFor="lokasi2">Lokasi Vaksinasi</label>
              <input
                type="text"
                id="lokasi2"
                defaultValue={data[0].lokasi2}
                onChange={(e) =>
                  setFormUser({ ...formUser, lokasi2: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="nama-vaksin">
              <label htmlFor="nama vaksin">Nama Vaksinasi</label>
              <div className="flex gap-8 ml-8 mt-5">
                <div id="pertama" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Astrazeneca"
                    name="namaVaksin"
                    value="Astrazeneca"
                    defaultChecked={data[0].namaVaksin.includes("Astrazeneca")}
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Astrazeneca">Astrazeneca</label>
                </div>
                <div id="kedua" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Pfizer"
                    name="namaVaksin"
                    value="Pfizer"
                    defaultChecked={data[0].namaVaksin.includes("Pfizer")}
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Pfizer">Pfizer</label>
                </div>

                <div id="tiga" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Sinovac"
                    name="namaVaksin"
                    value="Sinovac"
                    defaultChecked={data[0].namaVaksin.includes("Sinovac")}
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Sinovac">Sinovac</label>
                </div>

                <div id="empat" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Moderna"
                    name="namaVaksin"
                    value="Moderna"
                    defaultChecked={data[0].namaVaksin.includes("Moderna")}
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Moderna">Moderna</label>
                </div>
              </div>
              {/* {errorJenisKelamin && (
                <p className="mt-2 ml-2 text-red">{errorJenisKelamin}</p>
              )} */}
            </div>

            <input
              type="submit"
              value="Ubah Data Vaksinasi"
              className="bg-purple text-white py-3 rounded-3xl mt-4"
              onClick={(e) => {
                handleRegister(e);
              }}
            />
          </form>

          <PopUp
            open={keluar}
            onClickBackground={() => setKeluar(false)}
            onClickBatal={() => setKeluar(false)}
            onClickSimpan={() => {
              deleteHandler(id);
              setKeluar(false);
            }}
            pertanyaan1={"Apakah Anda yakin ingin"}
            pertanyaan2={"hapus data vaksin?"}
            gambar={"/images/tutup.svg"}
            button_primary={"Iya"}
            button_secondary={"Tidak"}
          />

          <button
            className={`absolute text-white py-3 rounded-3xl w-72 mt-24 right-0 top-0 mt-56 mr-20 ${styles.buttonHapus}`}
            onClick={() => setKeluar(true)}
          >
            Hapus Data
          </button>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const baseUrl = process.env.BASE_URL;
  const reservasi = await fetch(`${baseUrl}api/lokasi-vaksinasi`);
  const result = await reservasi.json();
  const data = result.data.filter((item) => item._id === id);
  const session = await getSession({ req: context.req });
  const user = session.user;
  const vaksinasiPertama = await fetch(`${baseUrl}api/vaksinasi-provinsi`);
  const resultPertama = await vaksinasiPertama.json();

  const namaProvinsi = resultPertama.data.map((item) => item.nama);
  console.log(data);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
      id,
      user,
      namaProvinsi,
    },
  };
}
