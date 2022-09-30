import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { GetWithToken } from '../pages/api/crud';
import AlertFunction from './alertfunction';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

export default function DocumentTypeAndDocumentApplication({ year }) {
    // certList,perorList,apcertList,apreporList
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: year+" Yılı Verilen ve Başvuru Yapılan Eğrisi"
          },
        },
      };
    const [data, setData] = useState({
        labels: [ "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Eylül", "Ekim", "Kasım", "Aralık"],
        datasets: [
            {
                type: 'line' as const,
                label: 'Verilen Sertifika',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: [],
            },
            


        ],
       
    });
    const [refresh, setRefresh] = useState(new Date())

    useEffect(() => {

        start()

    }, [year]);

    const start = async () => {
        var d = await GetWithToken("Charts/DocumentTypeAndDocumentApplicationcart/" + year).then(x => { return x.data }).catch((e) => { AlertFunction("", e.response.data); return false })
   
        var ds = new Array();
        ds.push({
            type: 'line' as const,
            label: 'Verilen Sertifika',
            borderColor: '#9f0000',
            borderWidth: 2,
            fill: false,
            data: d.data.certList,
        })
        ds.push({
            type: 'line' as const,
            label: 'Verilen Rapor',
            borderColor: '#ffa726',
            borderWidth: 2,
            fill: false,
            data: d.data.perorList,
        })
        ds.push({
            type: 'bar' as const,
            label: 'Başvurulan Sertifika',  
            borderColor: '#4527a0',
            backgroundColor:"rgb(69 39 160 / 65%)",
            borderWidth: 2, 
            fill: true, 
            data: d.data.apcertList
             
        })  
              ds.push({
            type: 'bar' as const,
            label: 'Başvurulan Rapor',
            borderColor: '#880e4f',
            backgroundColor:"rgb(136 14 79 / 62%)",
            borderWidth: 2,
            fill: true,
            data: d.data.apreporList 
            
        })

        var dd=data; 
        dd.datasets=ds;
        console.log(dd) 
        setData(dd);
        setRefresh(new Date())
    }
 

    return <Chart options={options} type='bar' data={data} />;

}
