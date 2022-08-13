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
            <PageHeader title={data.name} map={[
                { url: "/tanimlamalar/firma-tanimlari/", name: "Firmma Tanımları" },
                { url: "", name: "Detay" },

            ]}>

            </PageHeader>



            <div className='content '>
                <div className='card p-5'>
                    <div className='row'>
                        <div className='col-12 col-md-4 firm-detail-box'>


                            <div className='col-12 text-center mb-2'>
                                <b style={{ fontSize: 26 }}>{data.name}</b>
                            </div>
                            <div className='col-12 col-md-12 mb-3'>
                                <div className='col-12 text-center'>
                                    <img style={{ width: "50%" }} src={fileUploadUrl + data?.logoUrl}></img>
                                </div>

                            </div>
                            <div className='col-12 col-md-12 row'>
                                <div className='col-12 mb-3 firm-detail-box-field' >
                                    <b>Telefon : </b>{data.phone}
                                </div>
                                <div className='col-12 mb-3 firm-detail-box-field' >
                                    <b>Mail : </b>{data.email}
                                </div>
                                <div className=' col-12 mb-3 firm-detail-box-field' >
                                    <b>Adres : </b>{data.address}
                                </div>
                                <div className='col-12 mt-2 firm-detail-box-field'>
                                    <b>Açıklama : </b>{data.description}
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-8 mt-md-0 mt-5'>

                            <button className='btn btn-success btn-sm mb-2'><i className='fa fa-plus'></i> Yeni Rapor Ekle</button>
                            <table className='table table-hovered mb-3'>
                                <thead>
                                    <tr>
                                        <th>
                                            Adı
                                        </th>
                                        <th>
                                            No
                                        </th>
                                        <th>
                                            Rapor Tarihi
                                        </th>
                                        <th>
                                            Geçerlilik Tarihi
                                        </th>
                                        <th>
                                            Belgeler
                                        </th>
                                        <th>
                                            #
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.report?.length == 0 && <tr>
                                        <td colSpan={5} className="text-center">Rapor Bulunamadı.</td>
                                    </tr>}
                                    {data.report?.map((item, key) => {
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.documnentNo}</td>
                                            <td>{item.documnentDate}</td>
                                            <td>{item.expireDate}</td>
                                            <td>{item.documentFiles?.length}</td>
                                            <td></td>


                                        </tr>
                                    })}
                                </tbody>
                            </table>

                            <button className='btn btn-success btn-sm mb-2 mt-5'><i className='fa fa-plus'></i> Yeni Rapor Ekle</button>
                            <table className='table table-hovered'>
                                <thead>
                                    <tr>
                                        <th>
                                            Adı
                                        </th>
                                        <th>
                                            No
                                        </th>
                                        <th>
                                            Rapor Tarihi
                                        </th>
                                        <th>
                                            Geçerlilik Tarihi
                                        </th>
                                        <th>
                                            Belgeler
                                        </th>
                                        <th>
                                            #
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.certifica?.length == 0 && <tr>
                                        <td colSpan={5} className="text-center">Sertifika Bulunamadı.</td>
                                    </tr>}
                                    {data.report?.map((item, key) => {
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.documnentNo}</td>
                                            <td>{item.documnentDate}</td>
                                            <td>{item.expireDate}</td>
                                            <td>{item.documentFiles?.length}</td>
                                            <td>#</td>

                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>

    )
}
