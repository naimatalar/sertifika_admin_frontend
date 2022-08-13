import React, { useEffect, useState } from 'react'
import AlertFunction from '../../../../components/alertfunction';
import Layout from '../../../../layout/layout';
import PageHeader from '../../../../layout/pageheader';
import { apiConstant, fileUploadUrl, GetWithToken } from '../../../api/crud';
var isBrowser = typeof (window) != undefined;
export default function (props) {
    const [data, setData] = useState({})
    useEffect(async () => {
        start()
    }, [])

    const start = async () => {
        var id = ""
        if (isBrowser) {
            id = window.location.href.split("/")[window.location.href.split("/").length - 1]
            var d = await GetWithToken("Company/getDetailById/" + id).then(x => { return x.data }).catch((e) => { AlertFunction("", e.response.data); return false })
            setData(d.data)
            console.log(d.data)
        }

    }
    return (
        <Layout permissionControl={false}>
            <PageHeader title="Tanımlamalar" map={[
                { url: "/tanimlamalar/firma-tanimlari/", name: "Firmma Tanımları" },
                { url: "", name: "Detay" },

            ]}>

            </PageHeader>



            <div className='content '>
                <div className='card p-5'>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div className='col-12 text-center'>
                                <img style={{ width: "50%" }} src={fileUploadUrl + data?.logoUrl}></img>
                            </div>
                            <div className='col-12 text-center'>
                            <b style={{fontSize:20}}>{data.name}</b>
                            </div>
                        </div>
                        <div className='col-12 col-md-8 row'>
                            <div className='col-md-3 col-12' style={{fontSize:17}}>
                                <b>Telefon: </b>{data.phone}
                            </div>
                            <div className='col-md-3 col-12' style={{fontSize:17}}>
                                <b>Mail: </b>{data.email}
                            </div>
                            <div className='col-md-3 col-12' style={{fontSize:17}}>
                                <b>Adres: </b>{data.address}
                            </div>
                            <div className='col-12 mt-2' style={{fontSize:17}}>
                            <b>Açıklama: </b>{data.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}
