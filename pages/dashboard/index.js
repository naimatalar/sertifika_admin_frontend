

import { useState } from 'react'
import DocumentApplicationSource from '../../components/DocumentApplicationSource.tsx'
import { DocumentApplicationChart } from '../../components/DocumentApplicationStatusChart.tsx'
import DocumentTypeAndDocumentApplication from '../../components/DocumentTypeAndDocumentApplication.tsx'
import { DocumentTypeChart } from '../../components/DocumentTypeChart.tsx'
import Layout from '../../layout/layout'
import PageHeader from '../../layout/pageheader'


export default function Index() {
  const [documentTypeYear, setDocumentTypeYear] = useState(new Date().getFullYear())

  const [docApCartYear, setDocApCartYear] = useState(new Date().getFullYear())
  const [docApCartMout, setDocApCartMout] = useState(new Date().getMonth() + 1)

  const [docAppSourceYear, setDocAppSourceYear] = useState(new Date().getFullYear())
  const [docAppSourceMout, setDocAppSourceMout] = useState(new Date().getMonth() + 1)
  const [docAppDocumentYear, setDocAppDocumentYear] = useState(new Date().getFullYear())

  return <Layout>
    <PageHeader title="Dashboard" map={[

    ]}>
 
    </PageHeader>
    <div className='content'>
      <div className='row justify-content-around'>


        <div className='col-12 col-md-6 p-2 m-4' style={{
          background: "#c9e7da",
          border: "1px solid #186a1f"
        }}>
           <p className='text-center mt-2 mb-3'><b style={{fontSize:18}}>Kişi Firma ve Ürün bazlı Yıllık Verilen Sertifika Grafiği</b></p>
          <div className='row justify-content-center'>
            <label> <b>Yıl Giriniz: </b><input type={"number"} minLength={4} min={1990} value={documentTypeYear} onChange={(x) => setDocumentTypeYear(x.target.value)}></input></label>
          </div>

          {documentTypeYear && <DocumentTypeChart year={documentTypeYear}></DocumentTypeChart>}

        </div>


        <div className='col-12 col-md-4 p-2 m-4' style={{
          background: " #c9e1e7",
          border: "1px solid #186a35"
        }}>
          <p className='text-center mt-2 mb-3'><b  style={{fontSize:18}}>Başvuruların Sonuç Dağılımını Yıl Ve Aylara Göre Oluşan Grafik</b></p>
          <div className='row'>
            <div className='col-12 col-md-6'> <b>Yıl Giriniz: </b><input  style={{ width: "100%" }} type={"number"} minLength={4} min={1990} value={docApCartYear} onChange={(x) => setDocApCartYear(x.target.value)}></input></div>
            <div className='col-12 col-md-6'><b>Ay Seçiniz : </b><select style={{ padding: 2, width: "100%" }} value={docApCartMout} onChange={(x) => setDocApCartMout(x.target.value)}>

              <option value={1}>Ocak</option>
              <option value={2}>Şubat</option>
              <option value={3}>Mart</option>
              <option value={4}>Nisan</option>
              <option value={5}>Mayıs</option>
              <option value={6}>Haziran</option>
              <option value={7}>Temmuz</option>
              <option value={8}>Ağustos</option>
              <option value={9}>Eylül</option>
              <option value={10}>Ekim</option>
              <option value={11}>Kasım</option>
              <option value={12}>Aralık</option>
            </select></div>
            <div className='mt-3 text-center col-12'>
              <b style={{ color: "grey", textAlign: "center" }}> Başvuru Sonuçları</b>
            </div>
          </div>

          <DocumentApplicationChart year={docApCartYear} mout={docApCartMout}></DocumentApplicationChart>

        </div>
        <div className='col-12 col-md-6 p-2 m-4' style={{
            background: "rgb(251 255 0 / 12%)",
            border: "1px solid rgb(196 199 17)"
        }}>
           <p className='text-center mt-2 mb-3'><b  style={{fontSize:18}}>Verilen Sertifika/Rapor Ve Başvurulan Sertifika/Rapor Karşılaştırma Grafiği</b></p>
          <div className='row justify-content-center'>
            <label> <b>Yıl Giriniz: </b><input type={"number"} minLength={4} min={1990} value={docAppDocumentYear} onChange={(x) => setDocAppDocumentYear(x.target.value)}></input></label>
          </div>

          {docAppDocumentYear && <DocumentTypeAndDocumentApplication year={docAppDocumentYear}></DocumentTypeAndDocumentApplication>}

        </div>

        <div className='col-12 col-md-4 p-2 m-4' style={{
          background: "#e7dbc9",
          border: "1px solid #8b6718"
        }}>
          <p className='text-center mt-2 mb-3'><b  style={{fontSize:18}}>Gelen Başvurulan Web/Mobil Kaynaklı Olduğunu Gösteren Grafik</b></p>
          <div className='row'>
            <div className='col-12 col-md-6'> <b>Yıl Giriniz: </b><input  style={{ width: "100%" }}type={"number"} minLength={4} min={1990} value={docAppSourceYear} onChange={(x) => setDocAppSourceYear(x.target.value)}></input></div>
            <div className='col-12 col-md-6'><b>Ay Seçiniz : </b><select style={{ padding: 2, width: "100%" }} value={docAppSourceMout} onChange={(x) => setDocAppSourceMout(x.target.value)}>

              <option value={1}>Ocak</option>
              <option value={2}>Şubat</option>
              <option value={3}>Mart</option>
              <option value={4}>Nisan</option>
              <option value={5}>Mayıs</option>
              <option value={6}>Haziran</option>
              <option value={7}>Temmuz</option>
              <option value={8}>Ağustos</option>
              <option value={9}>Eylül</option>
              <option value={10}>Ekim</option>
              <option value={11}>Kasım</option>
              <option value={12}>Aralık</option>
            </select></div>
            <div className='mt-3 text-center col-12'>
              <b style={{ color: "grey", textAlign: "center" }}> Başvuru kaynakları</b>
            </div>
          </div> 

          {docAppSourceMout&&<DocumentApplicationSource year={docAppSourceYear} mout={docAppSourceMout}></DocumentApplicationSource>}

        </div>
      </div>
    </div>
  </Layout>



}
