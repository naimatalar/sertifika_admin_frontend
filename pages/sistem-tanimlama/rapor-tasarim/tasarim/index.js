import React, { useEffect, useState } from 'react';
import ReportDesingTools from '../../../../components/reportDesingTools';

function Index(props) {
    const [pages, setPages] = useState([])
    const [dragStatus, setDragStatus] = useState({ dragging: false, tool: "" })
    const [mouseEnter, setMouseEnter] = useState("")


    const [selectedPage, setSelectedPage] = useState([{
        Element: {
            Name: "",
            Options: [{}]
        },
        Position: "",

    }])



    const [pageLoad, setPageLoad] = useState(false)

    useEffect(() => {
        start()

    }, [])
    const start = async () => {
        setPageLoad(true)
        // setSelectedPage(setPages[0])
    }
    const onDragStart = async (data) => {
        setDragStatus({ dragging: true, tool: "table" })
    }
    const onDragStop = async (data) => {
        debugger
        var pageData = selectedPage;
        if (mouseEnter != "") {
            pageData.push({
                Id: new Date().getMilliseconds(),
                Element: {
                    Name: dragStatus.tool,
                    Options: [{}]
                },
                Position: mouseEnter,

            })
            setSelectedPage(pageData)
        }
        setDragStatus({ dragging: false, tool: "" })
    }

    return (
        <div className='conten-report'>

            <div className='report-tools'>
                <div className='text-center pt-4'><b>Elementler</b></div>
                <div style={{ border: "1px solid red", padding: 20, width: "80%", margin: "0 auto" }}>
                    <ReportDesingTools onDragStart={onDragStart} onDragStop={onDragStop}></ReportDesingTools>
                </div>
            </div>
            <div className='report-page-content'>
                <div className='report-design-page col-12'>

                    <div className='content-border text-center col' style={{ width: "100%", height: 60, float: "left", marginLeft: 0 }}>
                        <div><b>Header</b></div>
                        <div>      <i>Bu kısım diğer bilgilere göre otomatik dolacaktır</i></div>


                    </div>
                    <div style={{ clear: "both" }}></div>
                    <div className='row mt-2 p-2'>
                        {
                            selectedPage.map((item, key) => {
                                if (!item.Id) {
                                    return null
                                }
                                return <div key={key} className="mt-1" style={item.Position == "right" && { width: "50%", float: "left" } || item.Position == "left" && { width: "50%", float: "left" } || { width: "100%" }}>
                                   <button><i className='fa fa-edit'></i></button>
                                    {
                                        <div>

                                            {
                                                item.Element.Name == "table" && <table border="1" style={{width:"100%",height:20}}>
                                                  <tr>
                                                      <td> </td>
                                                      <td> </td>
                                                  </tr>
                                                </table>
                                            }
                                        </div>
                                    }
                                </div>
                            })

                        }
                    </div>

                    <div className={'mt-4 text-center drag-content ' + dragStatus.dragging + "-dragging"} style={{ position: "absolute", zIndex: 9999, width: 475 }}>

                        <i style={{ fontSize: 20 }}>Elementi buraya sürükleyiniz</i>

                        {



                            <div className='col-12 row p-1 justify-content-between show-adding' style={{ height: 31 }}>

                                <div className='col-3 nns' onMouseEnter={() => setMouseEnter("left")} onMouseLeave={() => setMouseEnter("")} >+</div>
                                <div className='col-6 nns' onMouseEnter={() => setMouseEnter("all")} onMouseLeave={() => setMouseEnter("")}>{"< >"}</div>
                                <div className='col-3 nns' onMouseEnter={() => setMouseEnter("right")} onMouseLeave={() => setMouseEnter("")} >+</div>


                            </div>

                        }
                    </div>

                </div>
            </div>
            <div className='page-counts'>

            </div>

        </div>
    );
}

export default Index;