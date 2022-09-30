import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { GetWithToken } from '../pages/api/crud';
import AlertFunction from './alertfunction';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function DocumentApplicationSource({ year, mout }) {
    const [data, setData] = useState({
        labels: ['Red'],
        datasets: [
            {
                label: '# of Votes',
                data: [0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',

                ],
                borderWidth: 1,
            },
        ],
    });
    useEffect(() => {

        start()

    }, [year, mout]);
    const start = async () => {

        var d = await GetWithToken("Charts/GetDocumentApplicateResourceDataset/" + year + "/" + mout).then(x => { return x.data }).catch((e) => { AlertFunction("", e?.response?.data); return false })

        var dd = d.data
        setData(dd);

    }

    return <Pie data={data} />;
}
