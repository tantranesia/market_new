import React, { useState } from "react";
import {
  IoArrowBack,
  IoChevronDown,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";
import img1 from "../assets/image/photo_2021-08-12 15.05.38.jpeg";
import img2 from "../assets/image/photo_2021-08-12 15.05.42.jpeg";
import img3 from "../assets/image/photo_2021-08-12 15.05.45.jpeg";
import img4 from "../assets/image/photo_2021-08-12 15.05.46.jpeg";

function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowOptions(!showOptions);
  };

  const data = [
    {id: 1,
      img: img1,
      content:
        "Hijab Segi Empat / Jilbab Segi Empat / Kerudung Segi Empat Warna Hijau",
      label: "TRANSAKSI TERAKHIR",
      time: "28 Juli 2021, jam 14:39",
    },
    {id: 2,
      img: img2,
      content:
        "Hijab Segi Empat / Jilbab Segi Empat / Kerudung Segi Empat Warna Hijau",
      time: "14 Juni 2021, jam 21:53",
    },
    { id: 3,
      img: img3,
      content:
        "Hijab Segi Empat / Jilbab Segi Empat / Kerudung Segi Empat Warna Hijau",
      time: "04 Mei 2021, jam 17:12",
    },
    {id: 4,
      img: img4,
      content:
        "Hijab Segi Empat / Jilbab Segi Empat / Kerudung Segi Empat Warna Hijau",
      label: "TRANSAKSI PERTAMA",
      time: "07 April 2021, jam 20:48",
    },
  ];
  const __renderPermission = (status) => {
    const label = {
      "TRANSAKSI TERAKHIR": (
        <span className="text-blue bg-tosca py-2 px-4 phone:px-2 phone:text-sm font-bold">
          TRANSAKSI TERAKHIR
        </span>
      ),
      "TRANSAKSI PERTAMA": (
        <span className="text-blue bg-tosca py-2 px-4 phone:px-1 phone:text-sm font-bold">
          TRANSAKSI PERTAMA
        </span>
      ),
    };

    return label[status];
  };
  return (
    <div>
      <div className="bg-white shadow-md py-3 phone:py-1 ">
        <div className="grid grid-cols-2 mx-20 phone:mx-3 phone:my-2 my-10">
          <div className="flex flex-row">
            <p className="">12:30</p>
          </div>
          <div className="flex flex-row-reverse gap-x-1">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.97083 13.5834H1.17917C0.805625 13.5834 0.5 13.2777 0.5 12.9042V1.35837C0.5 0.984824 0.805625 0.679199 1.17917 0.679199H7.97083C8.34437 0.679199 8.65 0.984824 8.65 1.35837V12.9042C8.65 13.2777 8.34437 13.5834 7.97083 13.5834Z"
                fill="#CFD8DC"
              />
              <path
                d="M5.9332 3.05625H3.21654C3.01279 3.05625 2.87695 2.92042 2.87695 2.71667V0.339583C2.87695 0.135833 3.01279 0 3.21654 0H5.9332C6.13695 0 6.27279 0.135833 6.27279 0.339583V2.71667C6.27279 2.92042 6.13695 3.05625 5.9332 3.05625Z"
                fill="#CFD8DC"
              />
              <path
                d="M7.97083 13.5834H1.17917C0.805625 13.5834 0.5 13.2778 0.5 12.9042V6.45215H8.65V12.9042C8.65 13.2778 8.34437 13.5834 7.97083 13.5834Z"
                fill="#6B6B6B"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10.75H2.25V13H1V10.75Z"
                fill="#6B6B6B"
                stroke="#6B6B6B"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M3.6875 8.25H4.9375V13H3.6875V8.25Z"
                fill="#6B6B6B"
                stroke="#6B6B6B"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M6.375 5.75H7.625V12.9998H6.375V5.75Z"
                fill="#6B6B6B"
                stroke="#6B6B6B"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M9.0625 3.25H10.3125V12.9998H9.0625V3.25Z"
                fill="#6B6B6B"
                stroke="#6B6B6B"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M11.75 1H13V13H11.75V1Z"
                fill="#6B6B6B"
                stroke="#6B6B6B"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99986 9.80002C6.81687 9.80084 6.63583 9.83772 6.4671 9.90853C6.29836 9.97934 6.14523 10.0827 6.01645 10.2127C5.88768 10.3427 5.78578 10.4968 5.71658 10.6662C5.64738 10.8356 5.61224 11.017 5.61316 11.2C5.61316 11.9728 6.23406 12.6 6.99986 12.6C7.18279 12.5991 7.36375 12.5622 7.53241 12.4913C7.70106 12.4205 7.85411 12.3171 7.98281 12.1871C8.11152 12.0571 8.21335 11.903 8.28251 11.7336C8.35166 11.5643 8.38678 11.383 8.38586 11.2C8.38586 10.4265 7.76566 9.80002 6.99986 9.80002ZM4.05986 8.23062L5.03986 9.22042C5.29599 8.96067 5.60119 8.75441 5.93773 8.61362C6.27426 8.47284 6.63542 8.40034 7.00021 8.40034C7.365 8.40034 7.72616 8.47284 8.06269 8.61362C8.39923 8.75441 8.70443 8.96067 8.96056 9.22042L9.93986 8.23062C9.55575 7.84102 9.09804 7.53165 8.59333 7.32049C8.08861 7.10933 7.54696 7.00059 6.99986 7.00059C6.45275 7.00059 5.91111 7.10933 5.40639 7.32049C4.90168 7.53165 4.44397 7.84102 4.05986 8.23062ZM2.09986 6.24962L3.07986 7.23942C3.59199 6.72006 4.20223 6.30766 4.87512 6.02618C5.548 5.74469 6.27012 5.59974 6.99951 5.59974C7.7289 5.59974 8.45102 5.74469 9.1239 6.02618C9.79679 6.30766 10.407 6.72006 10.9192 7.23942L11.8999 6.24962C11.2596 5.60038 10.4968 5.08484 9.65558 4.73296C8.8144 4.38108 7.91167 4.19987 6.99986 4.19987C6.08804 4.19987 5.18532 4.38108 4.34414 4.73296C3.50295 5.08484 2.74009 5.60038 2.09986 6.24962ZM0.13916 4.27002L1.11916 5.25982C1.88743 4.4806 2.80292 3.86185 3.8124 3.43952C4.82189 3.01719 5.90524 2.79971 6.99951 2.79971C8.09378 2.79971 9.17713 3.01719 10.1866 3.43952C11.1961 3.86185 12.1116 4.4806 12.8799 5.25982L13.8599 4.27002C12.9635 3.36094 11.8955 2.63906 10.7178 2.14635C9.54005 1.65363 8.27614 1.3999 6.99951 1.3999C5.72287 1.3999 4.45897 1.65363 3.28125 2.14635C2.10352 2.63906 1.03547 3.36094 0.13916 4.27002Z"
                fill="#6B6B6B"
              />
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7976 3.85382C13.754 3.89735 13.7023 3.93188 13.6455 3.95543C13.5886 3.97899 13.5276 3.99112 13.4661 3.99112C13.4045 3.99112 13.3436 3.97899 13.2867 3.95543C13.2298 3.93188 13.1781 3.89735 13.1346 3.85382L11.1459 1.86514C11.0589 1.77706 11.0103 1.65812 11.0107 1.53429C11.011 1.41046 11.0604 1.29181 11.1479 1.20425C11.2355 1.11669 11.3541 1.06732 11.478 1.06694C11.6018 1.06656 11.7207 1.11519 11.8088 1.20221L13.7976 3.19089C13.8411 3.23441 13.8756 3.28609 13.8992 3.34296C13.9227 3.39984 13.9349 3.46079 13.9349 3.52235C13.9349 3.58391 13.9227 3.64487 13.8992 3.70174C13.8756 3.75861 13.8411 3.81029 13.7976 3.85382ZM3.85384 1.20221C3.76593 1.11432 3.64671 1.06494 3.5224 1.06494C3.39809 1.06494 3.27887 1.11432 3.19097 1.20221L1.20224 3.19089C1.11433 3.2788 1.06494 3.39803 1.06494 3.52235C1.06494 3.64667 1.11433 3.76591 1.20224 3.85382C1.29015 3.94173 1.40938 3.99111 1.5337 3.99111C1.65803 3.99111 1.77726 3.94173 1.86517 3.85382L3.85384 1.86514C3.89737 1.82162 3.9319 1.76994 3.95546 1.71307C3.97902 1.65619 3.99114 1.59524 3.99114 1.53368C3.99114 1.47212 3.97902 1.41116 3.95546 1.35429C3.9319 1.29742 3.89737 1.24574 3.85384 1.20221ZM13.1231 7.35608C13.1243 7.40389 13.1249 7.45182 13.125 7.49987C13.125 7.54792 13.1243 7.59585 13.1231 7.64366C13.123 7.64999 13.1226 7.65626 13.1224 7.66253C13.1213 7.70454 13.1197 7.74653 13.1176 7.7885L13.1174 7.79278C13.0449 9.18145 12.4607 10.4941 11.4774 11.4774C10.4942 12.4606 9.18154 13.0449 7.79286 13.1173L7.78853 13.1175C7.74663 13.1197 7.70474 13.1212 7.66261 13.1223C7.65634 13.1225 7.65007 13.1229 7.64374 13.1231C7.59589 13.1242 7.54796 13.1248 7.49995 13.1249C7.45191 13.1249 7.40398 13.1243 7.35616 13.1231C7.34984 13.1229 7.34357 13.1225 7.3373 13.1223C7.29529 13.1212 7.25329 13.1196 7.21132 13.1175L7.20704 13.1173C5.81836 13.0449 4.50573 12.4607 3.52245 11.4774C2.53917 10.4941 1.95494 9.18146 1.88251 7.79278L1.88228 7.78844C1.88021 7.74649 1.87861 7.70452 1.87747 7.66253C1.8773 7.65626 1.87695 7.64999 1.87677 7.64366C1.87556 7.59585 1.87493 7.54792 1.87489 7.49987C1.87489 7.45182 1.8755 7.40389 1.87671 7.35608C1.87689 7.34975 1.87724 7.34348 1.87741 7.33721C1.87859 7.29514 1.88011 7.25319 1.88222 7.21124L1.88245 7.20696C1.9549 5.81829 2.53913 4.50566 3.52241 3.52238C4.50568 2.53911 5.81831 1.95487 7.20698 1.88243L7.21132 1.88219C7.25327 1.88013 7.29525 1.87853 7.33724 1.87739C7.34351 1.87721 7.34978 1.87686 7.35611 1.87669C7.40392 1.87551 7.45185 1.87491 7.49989 1.87487C7.54794 1.87487 7.59587 1.87548 7.64368 1.87669C7.65001 1.87686 7.65628 1.87721 7.66255 1.87739C7.70462 1.87856 7.74657 1.88009 7.78853 1.88219L7.7928 1.88243C9.18148 1.95486 10.4941 2.53909 11.4774 3.52237C12.4607 4.50565 13.0449 5.81828 13.1173 7.20696L13.1176 7.2113C13.1197 7.25319 13.1212 7.29508 13.1224 7.33721C13.1226 7.34348 13.1229 7.34975 13.1231 7.35608H13.1231ZM11.2499 7.49987C11.2499 7.37555 11.2005 7.25632 11.1126 7.16841C11.0247 7.08051 10.9055 7.03112 10.7811 7.03112H7.96864V4.21862C7.96864 4.0943 7.91926 3.97507 7.83135 3.88716C7.74344 3.79926 7.62422 3.74987 7.49989 3.74987C7.37557 3.74987 7.25635 3.79926 7.16844 3.88716C7.08053 3.97507 7.03114 4.0943 7.03114 4.21862V7.49987C7.03114 7.62419 7.08053 7.74342 7.16844 7.83133C7.25635 7.91923 7.37557 7.96862 7.49989 7.96862H10.7811C10.9055 7.96862 11.0247 7.91923 11.1126 7.83133C11.2005 7.74342 11.2499 7.62419 11.2499 7.49987Z"
                fill="#6B6B6B"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 phone:grid-cols-2 phone:mx-3 mx-20">
          <div className="flex flex-row gap-x-2 text-lg mb-2">
            <IoArrowBack className="h-5 w-5 mt-1" />
            <p>Semua Transaksi</p>
          </div>
          <div className="flex flex-row-reverse mr-2">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="18"
                height="2"
                rx="1"
                transform="matrix(1 0 0 -1 0 5)"
                fill="#58595B"
              />
              <circle
                cx="6.5"
                cy="4"
                r="3"
                fill="white"
                stroke="#58595B"
                stroke-width="2"
              />
              <rect
                x="18"
                y="14"
                width="18"
                height="2"
                rx="1"
                transform="rotate(-180 18 14)"
                fill="#58595B"
              />
              <circle
                r="3"
                transform="matrix(-1 0 0 1 11.5 13)"
                fill="white"
                stroke="#58595B"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>

      {data.map((items, idx) => {
        return (
          <>
            <div className="grid grid-cols-3 my-3 phone:grid-cols-4 phone:my-5 phone:mx-3 mx-20 gap-x-1">
              <div className="">
                <img
                  src={items.img}
                  alt=""
                  className="rounded-lg h-[71px] w-[71px] phone:w-20"
                />
              </div>
              <div className="flex flex-col phone:col-span-2 gap-y-4 justify-center">
                <div className="">
                  <p>{__renderPermission(items.label)}</p>
                </div>

                <p className="truncate">{items.content}</p>
                <p className="text-gray text-xs">{items.time}</p>
              </div>
              <button
                className="flex flex-row-reverse mr-2"
                onClick={handleClick}
              >
                <IoChevronDown className="h-5 w-5 my-10" />
              </button>
              
            </div>
            {showOptions && (
                <div className="flex flex-col gap-y-3 phone:flex-col phone:mx-3 mx-20" key={items.id}>
                  <div className="grid grid-cols-2 phone:grid-cols-2">
                    <div className="flex flex-row gap-x-2 mt-2">
                      <p className="text-blue font-bold">Pesanan Selesai</p>
                      <IoCheckmarkCircleSharp className="text-blue h-5 w-5" />
                    </div>
                    <div className="flex flex-row-reverse">
                      <button className="border border-blue rounded text-blue py-2 px-1">
                        Lihat Invoice
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between my-2">
                    <p>Rincian Pembayaran</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-gray">Total Harga (1 Barang)</p>
                    <p>Rp15.900</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-gray">Total Ongkir</p>
                    <p>Rp15.000</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-gray">Biaya Asuransi</p>
                    <p>Rp800</p>
                  </div>
                  <div className="flex flex-row my-2 justify-between">
                    <p className="text-gray font-bold">Total Bayar</p>
                    <p className="font-bold">Rp31.700</p>
                  </div>
                </div>
              )}
            <div className="bg-border py-[0.5px]" />
          </>
        );
      })}
    </div>
  );
}

export default Home;
