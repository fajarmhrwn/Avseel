import React,{useRef} from 'react'
import { Reveal } from '../ui/Reveal';

const Bottom = () => {
    const ref = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);
    const openInNewTab = () => {
        window.open("https://instagram.com/avseelx.plus?igshid=MzRlODBiNWFlZA==", "_blank", "noreferrer");
      };
  return (
    <>
        <div className='overflow-hidden relative bg-[#2C3B2F] w-full sm:h-72 rounded-lg flex p-12'>
            <div className='sm:w-2/3'>
                <p className='text-5xl font-jakarta font-bold text-[#D4BF96]'>
                    Get Yours!
                </p>
                <p className='font-jakarta font-bold text-[#D4BF96]'>
                Why let bugs ruin your outdoor fun? Join the Scentsational<br/> revolution and savor the bug-free outdoors. Stock up now!
                </p>
                <button className='w-40 h-12 bg-[#D4BF96] mt-4 rounded-lg flex justify-center text-center items-center font-bold font-jakarta p-4 text-[#2C3B2F]' onClick={openInNewTab}>
                    Contact Us
                </button>
            </div>
            <img src="/images/Gen3.png" alt="" className="absolute w-96 -right-12 -top-24 rotate-[5deg] hidden sm:block" />
        </div>
        <div className='w-full h-fit flex flex-col items-start mt-10'>
            <p className='text-5xl font-jakarta font-bold text-[#2C3B2F] text-center'>
                Article & News
            </p>
            <div className='h-fit w-full mt-12 grid sm:grid-cols-2 gap-4 grid-flow-row'>
                <Reveal ref={ref} className='sm:row-span-2'>
                    <div >
                        <img src="/images/Article1.jpg" alt="" className="object-cover rounded-[20px] mb-4"/>
                        <a className='font-jakarta font-bold text-3xl w-2/3' href='https://www.jawapos.com/features/01444490/murid-sman-10-surabaya-riset-biji-alpukat-jadi-pengusir-nyamuk'>
                            Murid SMAN 10 Surabaya Riset Biji Alpukat Jadi Pengusir Nyamuk
                        </a>
                        <p className='font-jakarta font-lg mt-4'>
                        Selasa, 28 Maret 2023 | jawapos.com
                        </p>
                    </div>
                </Reveal>
                <Reveal ref={ref2} className='sm:flex'>
                    <div >
                        <img src="/images/Article2.jpg" alt="" className="object-cover rounded-[20px] mr-3 sm:max-w-lebargambar sm:max-h-tinggigambar" />
                        <div>
                            <a className='font-jakarta font-bold text-3xl w-2/3' href='https://beritajatim.com/pendidikan-kesehatan/siswa-sman-10-surabaya-ciptakan-spray-anti-nyamuk/'>
                            Terbuat Olahan Biji Apukat Siswa SMAN 10 Surabaya Ciptakan Spray Anti Nyamuk
                            </a>
                            <p className='font-jakarta font-lg mt-4'>
                            Minggu, 19 Februari 2023 | beritajatim.com
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal ref={ref3} className='sm:flex'>
                    <div>
                        <img src="/images/Article3.jpg" alt="" className="object-cover rounded-[20px] mr-3 sm:max-w-lebargambar sm:max-h-tinggigambar" />
                        <div>
                            <a className='font-jakarta font-bold text-3xl w-2/3' href='https://m.antaranews.com/amp/berita/3458799/siswa-sman-10-surabaya-sabet-emas-di-ajang-yisf-2023'>
                            Siswa SMAN 10 Surabaya sabet emas di ajang YISF 2023
                            </a>
                            <p className='font-jakarta font-lg mt-4'>
                            Senin, 27 Maret 2023 | antaranews.com
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal ref={ref4} className='sm:flex'>
                    <div >
                        <img src="/images/Article4.jpg" alt="" className="object-cover rounded-[20px] mr-3 sm:max-w-lebargambar sm:max-h-tinggigambar" />
                        <div>
                            <a className='font-jakarta font-bold text-3xl w-2/3' href='https://surabaya.tribunnews.com/2023/02/27/siswa-sman-10-surabaya-bikin-spray-anti-nyamuk-dan-aroma-terapi-tak-mengandung-alkohol'>
                            Siswa SMAN 10 Surabaya Bikin Spray Anti Nyamuk dan Aroma Terapi, Tak Mengandung Alkohol
                            </a>
                            <p className='font-jakarta font-lg mt-4'>
                            Senin, 27 Februari 2023 | surabaya.tribunnews.com
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal ref={ref5} className='sm:flex'>
                    <div>
                        <img src="/images/Article5.jpg" alt="" className="object-cover rounded-[20px] mr-3 sm:max-w-lebargambar sm:max-h-tinggigambar" />
                        <div>
                            <a className='font-jakarta font-bold text-3xl w-2/3' href='https://www.harianbhirawa.co.id/ekstra-biji-alpukat-antarkan-siswa-sman-10-surabaya-raih-emas-di-ajang-international/'>
                            Ekstra Biji Alpukat, Antarkan Siswa SMAN 10 Surabaya Raih Emas di Ajang International
                            </a>
                            <p className='font-jakarta font-lg mt-4'>
                            Senin, 27 Maret 2023 | harianbhirawa.co.id
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    </>
  )
}

export default Bottom